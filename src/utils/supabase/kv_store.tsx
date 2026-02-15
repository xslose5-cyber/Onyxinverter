import { projectId, publicAnonKey } from './info';

const BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-2b231e01`;

async function makeRequest(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${publicAnonKey}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`KV Store 요청 실패: ${response.status} ${errorText}`);
  }

  return response.json();
}

export async function set(key: string, value: any): Promise<void> {
  await makeRequest('/kv/set', {
    method: 'POST',
    body: JSON.stringify({ key, value }),
  });
}

export async function get(key: string): Promise<any> {
  const result = await makeRequest(`/kv/get?key=${encodeURIComponent(key)}`);
  return result.value;
}

export async function del(key: string): Promise<void> {
  await makeRequest('/kv/del', {
    method: 'DELETE',
    body: JSON.stringify({ key }),
  });
}

export async function mset(entries: [string, any][]): Promise<void> {
  await makeRequest('/kv/mset', {
    method: 'POST',
    body: JSON.stringify({ entries }),
  });
}

export async function mget(keys: string[]): Promise<any[]> {
  const result = await makeRequest('/kv/mget', {
    method: 'POST',
    body: JSON.stringify({ keys }),
  });
  return result.values;
}

export async function mdel(keys: string[]): Promise<void> {
  await makeRequest('/kv/mdel', {
    method: 'DELETE',
    body: JSON.stringify({ keys }),
  });
}

export async function getByPrefix(prefix: string): Promise<any[]> {
  const result = await makeRequest(`/kv/getByPrefix?prefix=${encodeURIComponent(prefix)}`);
  return result.values || [];
}
