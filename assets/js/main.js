/* =====================================================================
   ONYX Engineering — Landing Page Script
   ---------------------------------------------------------------------
   ▼ 운영 전 아래 CONFIG 값을 확인해 주세요.
   ===================================================================== */
const CONFIG = {
  // Google Analytics 4 측정 ID (예: 'G-XXXXXXXXXX'). 비워 두면 콘솔에만 기록합니다.
  GA_ID: '',
  // Google Ads 전화 클릭 전환 (예: 'AW-17348793009/AbCdEfGhIjK'). Google Ads에서 전환 액션을 만들면 발급됩니다. 비워 두면 전환을 보내지 않습니다.
  ADS_CALL_CONVERSION: 'AW-17348793009/p5qKCLCTg_0cELGlxtBA',
};

/* ---------- 유틸 ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const fmt = (n, d = 0) => Number(n).toLocaleString('ko-KR', { maximumFractionDigits: d, minimumFractionDigits: 0 });

/* ---------- 이벤트 트래킹 (GA4 dataLayer / 콘솔) ---------- */
window.dataLayer = window.dataLayer || [];
function track(name, params = {}) {
  const payload = { event: name, ...params, ts: Date.now() };
  window.dataLayer.push(payload);
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
  if (!CONFIG.GA_ID) console.debug('[track]', payload);
}
if (CONFIG.GA_ID) {
  const s = document.createElement('script');
  s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_ID}`;
  document.head.appendChild(s);
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date()); window.gtag('config', CONFIG.GA_ID);
}
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-track]');
  if (el) track(el.dataset.track, { href: el.getAttribute('href') || '' });
});

/* ---------- 내비게이션 ---------- */
const nav = $('#nav');
const burger = $('#burger');
const mnav = $('#mnav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 8), { passive: true });
burger.addEventListener('click', () => {
  const open = mnav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
$$('#mnav a').forEach((a) => a.addEventListener('click', () => {
  mnav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
}));

// 현재 섹션 하이라이트
const navLinks = $$('.nav ul a');
const sections = navLinks.map((a) => $(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => io.observe(s));
}

/* ---------- 스크롤 리빌 ---------- */
if ('IntersectionObserver' in window) {
  const rv = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$('.rv').forEach((el) => rv.observe(el));
} else {
  $$('.rv').forEach((el) => el.classList.add('in'));
}

/* ---------- 플로팅 버튼 / 모바일 바: 문의 섹션이 보이면 숨김 ---------- */
const fab = $('#fab'), mbar = $('#mbar'), contact = $('#contact');
if ('IntersectionObserver' in window && contact) {
  const vis = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const hide = en.isIntersecting && en.intersectionRatio > 0.2;
      fab.classList.toggle('hide', hide);
      mbar.classList.toggle('hide', hide);
    });
  }, { threshold: [0, 0.2, 0.5] });
  vis.observe(contact);
}

/* ---------- 슬라이드인 안내 (데스크톱, 세션당 1회, 45% 스크롤 시) ---------- */
const nudge = $('#nudge');
if (nudge) {
  let shown = false;
  try { shown = sessionStorage.getItem('onyx_nudge') === '1'; } catch (_) {}
  const onScroll = () => {
    if (shown) return;
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const contactVisible = contact.getBoundingClientRect().top < window.innerHeight;
    if (pct > 0.45 && !contactVisible) {
      shown = true; nudge.classList.add('show'); track('nudge_show');
      try { sessionStorage.setItem('onyx_nudge', '1'); } catch (_) {}
      window.removeEventListener('scroll', onScroll);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  const close = () => { nudge.classList.remove('show'); };
  $('#nudgeClose').addEventListener('click', () => { close(); track('nudge_close'); });
  $$('#nudge a').forEach((a) => a.addEventListener('click', close));
}

/* ---------- 전화 클릭 → Google Ads 전환 ---------- */
document.addEventListener('click', (e) => {
  if (!CONFIG.ADS_CALL_CONVERSION || !e.target.closest('a[href^="tel:"]')) return;
  if (typeof window.gtag === 'function') window.gtag('event', 'conversion', { send_to: CONFIG.ADS_CALL_CONVERSION });
});

/* ---------- 전화번호 클릭 시 클립보드 복사 (데스크톱에서 tel: 미지원 대비) ---------- */
$$('a[href^="tel:"]').forEach((a) => a.addEventListener('click', () => {
  const num = a.textContent.replace(/[^\d\-]/g, '').match(/\d{2,3}-\d{3,4}-\d{4}/);
  if (num && navigator.clipboard && !/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    navigator.clipboard.writeText(num[0]).catch(() => {});
  }
}));
