// i18n.js — Version FIXED 100%

const translations = {
  th: {
    /* ---------- HOME ---------- */
    "btn.price": "ประเมินค่าบริการสุนัข–แมว",
    "btn.grooming": "จองคิวอาบน้ำ–ตัดขน",
    "btn.hotel": "จองห้องพักโรงแรมแมว",

    "highlight.private": "✓ ร้าน Private ไม่อยู่รวมกับน้อง ๆ บ้านอื่น",
    "highlight.watch": "✓ ลูกค้าเฝ้าน้องได้ตลอดการกรูมมิ่ง",
    "highlight.experience": "✓ ประสบการณ์มากกว่า 10,000 เคส ทั้งสุนัขและแมว",

    /* ---------- PRICE PAGE ---------- */
    "price.title": "ประเมินค่าบริการ",
    "price.header": "ประเมินค่าบริการสุนัข–แมว",

    "price.step1": "Step 1 — เลือกสัตว์",
    "price.step2": "Step 2 — เลือกน้ำหนัก",
    "price.step3": "Step 3 — เลือกความยาวขน",
    "price.step4": "Step 4 — เลือกบริการ",
    "price.step5": "Step 5 — ราคาโดยประมาณ",

    "price.service.default": "— เลือกบริการ —",
    "price.service.bath": "อาบน้ำ",
    "price.service.bathcut": "อาบน้ำ + ตัดขน",
    "price.service.cutonly": "ตัดขนอย่างเดียว",

    "price.cut.method": "เลือกรูปแบบการตัดขน",
    "price.cut.select": "— เลือกวิธีตัด —",
    "price.cut.clipper": "ไถทั้งตัว",
    "price.cut.scissor": "กรรไกรทั้งตัว",

    "price.result.note": "ราคานี้เป็นเพียงการประเมินเบื้องต้น",

    "price.note.header": "หมายเหตุ",
    "price.note.line1": "ราคาที่แสดงเป็นเพียงการประเมินเบื้องต้นตามน้ำหนัก–ลักษณะขน",
    "price.note.line2": "ราคาจริงอาจแตกต่างตามสภาพขน สภาพผิว พฤติกรรม",
    "price.note.line3": "หากมีบริการเสริม กรุณาแจ้งในขั้นตอนจองคิว",

    "price.book": "จองคิวทันที"
  },

  /* -------------------- ENGLISH -------------------- */
  en: {
    /* HOME */
    "btn.price": "Price Estimator (Dogs & Cats)",
    "btn.grooming": "Book Grooming Appointment",
    "btn.hotel": "Book Cat Hotel Room",

    "highlight.private": "✓ Private grooming — no mixing with other pets",
    "highlight.watch": "✓ Owners can supervise throughout",
    "highlight.experience": "✓ Over 10,000 grooming cases for both dogs and cats",

    /* PRICE PAGE */
    "price.title": "Price Estimator",
    "price.header": "Pet Grooming Price Estimator",

    "price.step1": "Step 1 — Select Pet",
    "price.step2": "Step 2 — Select Weight",
    "price.step3": "Step 3 — Select Coat Type",
    "price.step4": "Step 4 — Select Service",
    "price.step5": "Step 5 — Estimated Price",

    "price.service.default": "— Select Service —",
    "price.service.bath": "Bath Only",
    "price.service.bathcut": "Bath + Haircut",
    "price.service.cutonly": "Haircut Only",

    "price.cut.method": "Choose haircut method",
    "price.cut.select": "— Select Method —",
    "price.cut.clipper": "Clipper Cut",
    "price.cut.scissor": "Full Scissoring",

    "price.result.note": "This is only an estimated price.",

    "price.note.header": "Notes",
    "price.note.line1": "Displayed price is an estimate based on weight & coat type.",
    "price.note.line2": "Actual price may vary by coat condition & behavior.",
    "price.note.line3": "If extra services are needed, please note during booking.",

    "price.book": "Book Now"
  },

  /* -------------------- CHINESE -------------------- */
  zh: {
    /* HOME */
    "btn.price": "估算美容价格（犬｜猫）",
    "btn.grooming": "预约洗澡・造型",
    "btn.hotel": "预约猫咪酒店",

    "highlight.private": "✓ 私密式美容，不与其他家庭宠物混在一起",
    "highlight.watch": "✓ 主人可全程陪同、安心看护",
    "highlight.experience": "✓ 超过 10,000 只犬猫的专业护理经验",

    /* PRICE PAGE */
    "price.title": "美容价格估算",
    "price.header": "犬猫美容价格估算",

    "price.step1": "步骤 1 — 选择宠物",
    "price.step2": "步骤 2 — 选择体重",
    "price.step3": "步骤 3 — 选择毛发类型",
    "price.step4": "步骤 4 — 选择服务",
    "price.step5": "步骤 5 — 预计价格",

    "price.service.default": "— 请选择服务 —",
    "price.service.bath": "洗澡",
    "price.service.bathcut": "洗澡 + 修剪",
    "price.service.cutonly": "仅修剪",

    "price.cut.method": "请选择修剪方式",
    "price.cut.select": "— 请选择 —",
    "price.cut.clipper": "推剪",
    "price.cut.scissor": "手工剪",

    "price.result.note": "此价格仅为预估。",

    "price.note.header": "备注",
    "price.note.line1": "显示价格基于体重与毛发类型，为预估价。",
    "price.note.line2": "实际价格可能因毛发状况与配合度而不同。",
    "price.note.line3": "如需额外服务，请在预约时备注。",

    "price.book": "立即预约"
  }
};

/* -------------------------------------------------- */
/* APPLY LANGUAGE */
/* -------------------------------------------------- */

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
