// 보안 유틸리티 함수

/**
 * 악성 스크립트 및 HTML 태그 제거 (XSS 방어)
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  // HTML 태그 제거
  let cleaned = input.replace(/<[^>]*>/g, '');
  
  // 스크립트 관련 키워드 제거
  cleaned = cleaned.replace(/javascript:/gi, '');
  cleaned = cleaned.replace(/on\w+\s*=/gi, '');
  
  // 특수 문자 이스케이프
  cleaned = cleaned
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  
  return cleaned.trim();
}

/**
 * 입력 데이터 검증 및 sanitization
 */
export function validateAndSanitizeInquiry(data: any) {
  const sanitized: any = {};
  
  // 이름 검증 (최대 50자)
  if (data.name && typeof data.name === 'string') {
    sanitized.name = sanitizeInput(data.name.substring(0, 50));
  }
  
  // 이메일 검증 (최대 100자, 이메일 형식)
  if (data.email && typeof data.email === 'string') {
    const email = data.email.substring(0, 100).trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      sanitized.email = sanitizeInput(email);
    }
  }
  
  // 전화번호 검증 (최대 20자)
  if (data.phone && typeof data.phone === 'string') {
    sanitized.phone = sanitizeInput(data.phone.substring(0, 20));
  }
  
  // 서비스 타입 검증
  const validServices = ['installation', 'replacement', 'maintenance', 'inspection', 'emergency', 'consultation'];
  if (data.service && validServices.includes(data.service)) {
    sanitized.service = data.service;
  }
  
  // 메시지 검증 (최대 1000자)
  if (data.message && typeof data.message === 'string') {
    sanitized.message = sanitizeInput(data.message.substring(0, 1000));
  }
  
  // 기타 필드 보존
  if (data.id) sanitized.id = data.id;
  if (data.createdAt) sanitized.createdAt = data.createdAt;
  if (data.status) sanitized.status = data.status;
  
  return sanitized;
}

/**
 * Rate Limiting 체크 (10분 내 최대 10회)
 */
export async function checkRateLimit(
  ip: string,
  kvGet: (key: string) => Promise<any>,
  kvSet: (key: string, value: any) => Promise<void>
): Promise<{ allowed: boolean; remaining: number }> {
  const rateLimitKey = `ratelimit_${ip}`;
  const now = Date.now();
  const timeWindow = 10 * 60 * 1000; // 10분
  const maxRequests = 10;
  
  try {
    const rateLimitData = await kvGet(rateLimitKey);
    
    if (!rateLimitData) {
      // 첫 요청
      await kvSet(rateLimitKey, {
        requests: [now],
        firstRequest: now
      });
      return { allowed: true, remaining: maxRequests - 1 };
    }
    
    // 시간 창 내의 요청만 필터링
    const recentRequests = rateLimitData.requests.filter(
      (timestamp: number) => now - timestamp < timeWindow
    );
    
    if (recentRequests.length >= maxRequests) {
      // 제한 초과
      return { allowed: false, remaining: 0 };
    }
    
    // 새 요청 추가
    recentRequests.push(now);
    await kvSet(rateLimitKey, {
      requests: recentRequests,
      firstRequest: rateLimitData.firstRequest || now
    });
    
    return { allowed: true, remaining: maxRequests - recentRequests.length };
  } catch (error) {
    console.error('Rate limit check error:', error);
    // 에러 시 허용 (보안보다 사용자 경험 우선)
    return { allowed: true, remaining: maxRequests };
  }
}
