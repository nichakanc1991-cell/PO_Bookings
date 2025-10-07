// โหลดไฟล์ภาษาตามที่เลือก
async function setLang(lang) {
  const response = await fetch(`i18n/${lang}.json`);
  const translations = await response.json();
  
  // แปลทุก element ที่มี data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) el.innerText = translations[key];
  });

  localStorage.setItem("lang", lang); // จดจำภาษาที่เลือกไว้
}

// โหลดภาษาที่เคยเลือกไว้เมื่อเปิดเว็บ
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "th";
  setLang(savedLang);
});
