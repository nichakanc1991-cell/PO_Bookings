// เลือกภาษา: จาก ?lang=xx หรือ localStorage หรือค่าเริ่มต้น 'th'
function getLang() {
  const url = new URL(location.href);
  const q = url.searchParams.get('lang');
  if (q) { localStorage.setItem('lang', q); return q; }
  return localStorage.getItem('lang') || 'th';
}

async function applyI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;
  const res = await fetch(`./i18n/${lang}.json`);
  const dict = await res.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('a[data-keep-lang="true"]').forEach(a => {
    const url = new URL(a.getAttribute('href'), location.origin);
    url.searchParams.set('lang', lang);
    a.setAttribute('href', url.pathname + url.search);
  });

  document.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.classList.toggle('opacity-100', btn.dataset.lang === lang);
    btn.classList.toggle('opacity-60', btn.dataset.lang !== lang);
  });
}

function switchLang(lang){
  localStorage.setItem('lang', lang);
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  location.href = url.pathname + url.search;
}

document.addEventListener('DOMContentLoaded', applyI18n);
