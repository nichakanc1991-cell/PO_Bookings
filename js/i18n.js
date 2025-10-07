/* ===== i18n.js — ระบบแปลภาษา 3 ภาษา (ไทย / อังกฤษ / จีน) ===== */

// กำหนดข้อความหลัก 3 ภาษา
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

// อ่านค่าภาษาเริ่มต้น (จาก localStorage ถ้ามี)
let currentLang = localStorage.getItem("lang") || "th";

// ฟังก์ชันเปลี่ยนภาษา
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

// ฟังก์ชันแปลข้อความในหน้า
function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // อัปเดตลิงก์ให้ส่งค่าภาษาไปยังหน้าถัดไป
  document.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if (href.includes(".html")) {
      const url = new URL(href, window.location.origin);
      url.searchParams.set("lang", currentLang);
      a.setAttribute("href", url.pathname + url.search);
    }
  });
}

// โหลดภาษาเมื่อเปิดหน้า
document.addEventListener("DOMContentLoaded", applyLang);
