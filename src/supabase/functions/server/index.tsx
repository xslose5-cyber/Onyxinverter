import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { validateAndSanitizeInquiry, checkRateLimit } from "./security.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-2b231e01/health", (c) => {
  return c.json({ status: "ok" });
});

// robots.txt endpoint
app.get("/make-server-2b231e01/robots.txt", (c) => {
  const robotsTxt = `User-agent: *
Allow: /
`;
  return c.text(robotsTxt, 200, {
    'Content-Type': 'text/plain',
  });
});

// KV Store endpoints
app.post("/make-server-2b231e01/kv/set", async (c) => {
  try {
    // Rate limiting 체크
    const clientIp = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown';
    const { allowed, remaining } = await checkRateLimit(clientIp, kv.get, kv.set);
    
    if (!allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return c.json({ 
        error: "요청 횟수 제한을 초과했습니다. 10분 후에 다시 시도해 주세요." 
      }, 429);
    }
    
    const { key, value } = await c.req.json();
    
    // 문의 데이터인 경우 sanitization 적용
    let sanitizedValue = value;
    if (key && key.startsWith('inquiry_')) {
      sanitizedValue = validateAndSanitizeInquiry(value);
      console.log(`Inquiry sanitized for key: ${key}`);
    }
    
    await kv.set(key, sanitizedValue);
    return c.json({ success: true, remaining });
  } catch (error) {
    console.error("KV set 오류:", error);
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-2b231e01/kv/get", async (c) => {
  try {
    const key = c.req.query("key");
    if (!key) {
      return c.json({ error: "Key is required" }, 400);
    }
    const value = await kv.get(key);
    return c.json({ value });
  } catch (error) {
    console.error("KV get 오류:", error);
    return c.json({ error: String(error) }, 500);
  }
});

app.delete("/make-server-2b231e01/kv/del", async (c) => {
  try {
    const { key } = await c.req.json();
    await kv.del(key);
    return c.json({ success: true });
  } catch (error) {
    console.error("KV del 오류:", error);
    return c.json({ error: String(error) }, 500);
  }
});

app.post("/make-server-2b231e01/kv/mset", async (c) => {
  try {
    const { entries } = await c.req.json();
    await kv.mset(entries);
    return c.json({ success: true });
  } catch (error) {
    console.error("KV mset 오류:", error);
    return c.json({ error: String(error) }, 500);
  }
});

app.post("/make-server-2b231e01/kv/mget", async (c) => {
  try {
    const { keys } = await c.req.json();
    const values = await kv.mget(keys);
    return c.json({ values });
  } catch (error) {
    console.error("KV mget 오류:", error);
    return c.json({ error: String(error) }, 500);
  }
});

app.delete("/make-server-2b231e01/kv/mdel", async (c) => {
  try {
    const { keys } = await c.req.json();
    await kv.mdel(keys);
    return c.json({ success: true });
  } catch (error) {
    console.error("KV mdel 오류:", error);
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-2b231e01/kv/getByPrefix", async (c) => {
  try {
    const prefix = c.req.query("prefix");
    if (!prefix) {
      return c.json({ error: "Prefix is required" }, 400);
    }
    const values = await kv.getByPrefix(prefix);
    return c.json({ values });
  } catch (error) {
    console.error("KV getByPrefix 오류:", error);
    return c.json({ error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);