/* ===== i18n.js — ระบบแปลภาษา 3 ภาษา (ไทย / อังกฤษ / จีน) ===== */

const translations = {
  th: {
    "btn.grooming": "จองคิวอาบน้ำ–ตัดขน",
    "btn.hotel": "จองห้องพักโรงแรมแมว",
  },
  en: {
    "btn.grooming": "Grooming & Bath Booking",
    "btn.hotel": "Cat Hotel Reservation",
  },
  zh: {
    "btn.grooming": "猫咪美容与洗澡预约",
    "btn.hotel": "猫咪酒店预订",
  },
};

let currentLang = localStorage.getItem("lang") || "th";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  // แปลข้อความ
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // อัปเดตลิงก์ทั้งหมดให้แนบภาษาปัจจุบันไปด้วย
document.querySelectorAll("a[href]").forEach(a => {
  const href = a.getAttribute("href");
  if (href && href.includes(".html")) {
    const url = new URL(href, window.location.origin);
    url.searchParams.set("lang", currentLang);
    a.setAttribute("href", url.pathname + url.search);
  }
});
}

// โหลดภาษาเมื่อเปิดหน้า
document.addEventListener("DOMContentLoaded", applyLang);
