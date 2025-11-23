/* ===========================
   i18n.js — Multi-language
   =========================== */

const translations = {
  th: {
    /* --- ปุ่มหน้า Home --- */
    "btn.price": "ประเมินค่าบริการสุนัข–แมว",
    "btn.grooming": "จองคิวอาบน้ำ–ตัดขน",
    "btn.hotel": "จองห้องพักโรงแรมแมว",

    /* --- Booking Header --- */
    "title.booking": "ระบบจองคิว",

    /* --- Wizard Steps --- */
    "wizard.step1": "เลือกวัน–เวลา",
    "wizard.step2": "ข้อมูลผู้จอง",
    "wizard.step3": "รายละเอียดสัตว์เลี้ยง",
    "wizard.step4": "เงื่อนไขการให้บริการ",
    "wizard.step5": "ชำระมัดจำ",

    /* --- Customer Info --- */
    "label.custname": "ชื่อผู้จอง",
    "label.custphone": "เบอร์ติดต่อ",
    "label.next": "ถัดไป",

    /* --- Pet Info --- */
    "label.petlist": "รายละเอียดน้อง (สูงสุด 3 ตัว)",
    "label.petname": "ชื่อน้อง",
    "label.pettype": "ประเภท",
    "label.petbreed": "สายพันธุ์",
    "label.petservice": "ประเภทบริการ",
    "label.petaddon": "บริการเสริมเพิ่มเติม (ถ้ามี)",
    "label.petnote": "ข้อควรระวัง",

    "label.addpet": "+ เพิ่มน้อง",
    "label.toTerms": "ถัดไป",

    /* --- Terms --- */
    "label.agree": "ฉันได้อ่านและยอมรับเงื่อนไขการบริการแล้ว",
    "label.toPayment": "ไปหน้าชำระเงิน",

    /* --- Payment --- */
    "label.deposit.title": "ชำระมัดจำ",
    "label.deposit.remark": "โปรดชำระภายใน 15 นาทีเพื่อรักษาคิว",
    "label.notifyline": "แจ้งสลิปทางไลน์",

    /* --- Calendar --- */
    "calendar.free": "ว่าง",
    "calendar.partial": "บางช่วง",
    "calendar.full": "เต็ม",

    /* --- Booking message (Line OA) --- */
    "line.header": "📌 แจ้งจองคิวจากหน้าเว็บ",
    "line.petdetail": "• รายละเอียดน้อง:",
    "line.sentfrom": "— ส่งจากระบบจองคิว PO Grooming —"
  },

  /* ==================== ENGLISH ===================== */
  en: {
    "btn.price": "Price Estimator (Dogs & Cats)",
    "btn.grooming": "Book Grooming Appointment",
    "btn.hotel": "Book Cat Hotel Room",

    "title.booking": "Booking System",

    "wizard.step1": "Select Date & Time",
    "wizard.step2": "Customer Info",
    "wizard.step3": "Pet Details",
    "wizard.step4": "Terms & Conditions",
    "wizard.step5": "Deposit Payment",

    "label.custname": "Full Name",
    "label.custphone": "Phone Number",
    "label.next": "Next",

    "label.petlist": "Pet Details (up to 3 pets)",
    "label.petname": "Pet Name",
    "label.pettype": "Type",
    "label.petbreed": "Breed",
    "label.petservice": "Service Type",
    "label.petaddon": "Add-on Services (optional)",
    "label.petnote": "Notes / Cautions",

    "label.addpet": "+ Add Pet",
    "label.toTerms": "Next",

    "label.agree": "I have read and accepted the terms.",
    "label.toPayment": "Go to Payment",

    "label.deposit.title": "Deposit Payment",
    "label.deposit.remark": "Please pay within 15 minutes to secure your booking.",
    "label.notifyline": "Notify via LINE",

    "calendar.free": "Free",
    "calendar.partial": "Partial",
    "calendar.full": "Full",

    "line.header": "📌 Booking request from website",
    "line.petdetail": "• Pet details:",
    "line.sentfrom": "— Sent from PO Grooming Booking System —"
  },

  /* ====================== CHINESE ===================== */
  zh: {
    "btn.price": "美容价格估算（犬｜猫）",
    "btn.grooming": "预约美容服务",
    "btn.hotel": "预约猫咪酒店",

    "title.booking": "预约系统",

    "wizard.step1": "选择日期与时间",
    "wizard.step2": "客户资料",
    "wizard.step3": "宠物资料",
    "wizard.step4": "服务条款",
    "wizard.step5": "支付订金",

    "label.custname": "姓名",
    "label.custphone": "联系电话",
    "label.next": "下一步",

    "label.petlist": "宠物资料（最多3只）",
    "label.petname": "宠物名字",
    "label.pettype": "种类",
    "label.petbreed": "品种",
    "label.petservice": "服务类型",
    "label.petaddon": "额外服务（可选）",
    "label.petnote": "注意事项",

    "label.addpet": "+ 添加宠物",
    "label.toTerms": "下一步",

    "label.agree": "我已阅读并同意服务条款",
    "label.toPayment": "前往支付",

    "label.deposit.title": "支付订金",
    "label.deposit.remark": "请在15分钟内完成支付以保留名额",
    "label.notifyline": "通过 LINE 通知",

    "calendar.free": "空闲",
    "calendar.partial": "部分空闲",
    "calendar.full": "已满",

    "line.header": "📌 来自网站的预约请求",
    "line.petdetail": "• 宠物资料：",
    "line.sentfrom": "— 来自 PO Grooming 预约系统 —"
  }
};


/* =====================================================
      APPLY LANGUAGE
===================================================== */
function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[lang] && translations[lang][key]){
      el.innerText = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

/* โหลดภาษาอัตโนมัติ */
document.addEventListener("DOMContentLoaded", ()=>{
  const lang = localStorage.getItem("lang") || "th";
  setLang(lang);
});
