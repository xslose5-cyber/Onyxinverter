/* =====================================================================
   ONYX Engineering — Landing Page Script
   ---------------------------------------------------------------------
   ▼ 운영 전 아래 CONFIG 값을 확인해 주세요.
   ===================================================================== */
const CONFIG = {
  // Google Analytics 4 측정 ID (예: 'G-XXXXXXXXXX'). 비워 두면 콘솔에만 기록합니다.
  GA_ID: '',
  // 절감 계산기 기본 전기요금 단가 (원/kWh)
  DEFAULT_PRICE: 180,
  // 탄소 배출계수 (tCO₂/MWh)
  CO2_FACTOR: 0.4594,
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

/* ---------- 절감 계산기 ---------- */
const calc = {
  kw: $('#c_kw'), n: $('#c_n'), type: $('#c_type'), h: $('#c_h'), d: $('#c_d'),
  price: $('#c_price'), speed: $('#c_speed'), speedV: $('#c_speed_v'), inv: $('#c_inv'),
  oWon: $('#o_won'), oPct: $('#o_pct'), oBase: $('#o_base'), oSave: $('#o_save'),
  oCo2: $('#o_co2'), oPay: $('#o_pay'), o10y: $('#o_10y'),
};
// 설비 종류별 평균 필요 회전수 프리셋 (경험적 기본값)
const SPEED_PRESET = { ct: 80, ahu: 75, pump: 78, fan: 72 };

function runCalc() {
  const kw = Math.max(0, parseFloat(calc.kw.value) || 0);
  const n = Math.max(0, parseInt(calc.n.value, 10) || 0);
  const h = Math.min(24, Math.max(0, parseFloat(calc.h.value) || 0));
  const d = Math.min(365, Math.max(0, parseFloat(calc.d.value) || 0));
  const price = Math.max(0, parseFloat(calc.price.value) || CONFIG.DEFAULT_PRICE);
  const r = (parseInt(calc.speed.value, 10) || 100) / 100;
  const inv = Math.max(0, parseFloat(calc.inv.value) || 0);

  calc.speedV.textContent = Math.round(r * 100) + '%';

  const base = kw * n * h * d;                          // kWh/년
  const frac = Math.max(0, 1 - Math.pow(r, 3) - 0.03);  // 절감률 (인버터 손실 3% 반영)
  const save = base * frac;
  const won = save * price;                             // 원/년
  const co2 = (save / 1000) * CONFIG.CO2_FACTOR;        // tCO₂

  calc.oWon.textContent = fmt(won / 10000);
  calc.oPct.textContent = fmt(frac * 100, 1);
  calc.oBase.textContent = fmt(base);
  calc.oSave.textContent = fmt(save);
  calc.oCo2.textContent = fmt(co2, 1);
  calc.o10y.textContent = fmt((won * 10) / 10000);

  let payText = '일반적으로 6개월–2년';
  if (inv > 0 && won > 0) {
    const months = (inv / won) * 12;
    payText = months < 1 ? '1개월 미만' : months < 24 ? `약 ${fmt(months, 1)}개월` : `약 ${fmt(months / 12, 1)}년`;
  }
  calc.oPay.textContent = payText;
}
if (calc.kw) {
  Object.values(calc).forEach((el) => { if (el && el.tagName && /INPUT|SELECT/.test(el.tagName)) el.addEventListener('input', runCalc); });
  calc.type.addEventListener('change', () => { calc.speed.value = SPEED_PRESET[calc.type.value] || 80; runCalc(); });
  runCalc();
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

/* ---------- 전화번호 클릭 시 클립보드 복사 (데스크톱에서 tel: 미지원 대비) ---------- */
$$('a[href^="tel:"]').forEach((a) => a.addEventListener('click', () => {
  const num = a.textContent.replace(/[^\d\-]/g, '').match(/\d{2,3}-\d{3,4}-\d{4}/);
  if (num && navigator.clipboard && !/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    navigator.clipboard.writeText(num[0]).catch(() => {});
  }
}));
