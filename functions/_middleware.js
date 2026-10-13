// Cloudflare Pages Functions 미들웨어
// 대표 주소(www.onyxeng.kr)가 아닌 주소로 들어오면 경로·쿼리를 유지한 채 301로 넘깁니다.
// 대상: 루트 도메인 onyxeng.kr, Pages 기본 주소 onyxinverter.pages.dev
// (미리보기 배포 주소 xxxx.onyxinverter.pages.dev 는 넘기지 않습니다.)
const CANONICAL_HOST = 'www.onyxeng.kr';
const REDIRECT_HOSTS = new Set(['onyxeng.kr', 'onyxinverter.pages.dev']);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
