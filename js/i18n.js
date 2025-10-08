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

const translations = {
  th: {
    "btn.grooming": "จองคิวอาบน้ำ–ตัดขน",
    "btn.hotel": "จองห้องพักโรงแรมแมว",

    // หน้าจองคิว
    "title.booking": "ระบบจองคิว",
    "label.steps": "ขั้นตอน",
    "label.name": "ชื่อ–นามสกุลหรือชื่อเล่น",
    "label.phone": "เบอร์ติดต่อ",
    "label.next": "ถัดไป",
    "label.petinfo": "รายละเอียดน้อง (สูงสุด 3 ตัว)",
    "label.agree": "ฉันได้อ่านและยอมรับเงื่อนไขการบริการแล้ว",
    "label.pay": "ไปหน้าชำระเงิน",
    "label.deposit": "ชำระมัดจำ 200 บาท ต่อตัว โปรดชำระภายใน 15 นาที",
    "label.notifyline": "แจ้งสลิปทางไลน์ (เปิด LINE OA)",
  },
  en: {
    "btn.grooming": "Grooming & Bath Booking",
    "btn.hotel": "Cat Hotel Reservation",

    "title.booking": "Booking System",
    "label.steps": "Steps",
    "label.name": "Full Name or Nickname",
    "label.phone": "Phone Number",
    "label.next": "Next",
    "label.petinfo": "Pet Details (max 3)",
    "label.agree": "I have read and accept the service terms.",
    "label.pay": "Proceed to Payment",
    "label.deposit": "Deposit 200 THB per pet — please complete within 15 minutes",
    "label.notifyline": "Notify via LINE (Open LINE OA)",
  },
  zh: {
    "btn.grooming": "猫咪美容与洗澡预约",
    "btn.hotel": "猫咪酒店预订",

    "title.booking": "预约系统",
    "label.steps": "步骤",
    "label.name": "姓名或昵称",
    "label.phone": "联系电话",
    "label.next": "下一步",
    "label.petinfo": "宠物资料（最多 3 只）",
    "label.agree": "我已阅读并接受服务条款",
    "label.pay": "前往付款页面",
    "label.deposit": "每只猫需支付定金 200 泰铢，请在15分钟内完成",
    "label.notifyline": "通过 LINE 通知（打开 LINE OA）",
  }
};

