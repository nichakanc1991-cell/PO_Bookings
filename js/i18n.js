const translations = {
  th: {
    "btn.price": "ประเมินค่าบริการสุนัข–แมว",
    "btn.grooming": "จองคิวอาบน้ำ–ตัดขน",
    "btn.hotel": "จองห้องพักโรงแรมแมว",

    "highlight.private": "✓ ร้าน Private ไม่อยู่รวมกับน้อง ๆ บ้านอื่น",
    "highlight.watch": "✓ ลูกค้าเฝ้าน้องได้ตลอดการกรูมมิ่ง",
    "highlight.experience": "✓ ประสบการณ์มากกว่า 10,000 เคส ทั้งสุนัขและแมว"
  },

  en: {
    "btn.price": "Price Estimator (Dogs & Cats)",
    "btn.grooming": "Book Grooming Appointment",
    "btn.hotel": "Book Cat Hotel Room",

    "highlight.private": "✓ Private grooming — no mixing with other pets",
    "highlight.watch": "✓ Owners can stay and supervise throughout",
    "highlight.experience": "✓ Over 10,000 grooming cases for both dogs and cats"
  },

  zh: {
    "btn.price": "估算美容价格（犬｜猫）",
    "btn.grooming": "预约洗澡・造型",
    "btn.hotel": "预约猫咪酒店",

    "highlight.private": "✓ 私密式美容，不与其他家庭的宠物混在一起",
    "highlight.watch": "✓ 主人可全程陪同、安心看护",
    "highlight.experience": "✓ 超过 10,000 只犬猫的专业护理经验"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "th";
  setLang(lang);
});
