/* ===== i18n.js — ระบบแปลภาษา 3 ภาษา (ไทย / อังกฤษ / จีน) ===== */

const translations = {
  th: {
    // ปุ่มหลัก
    "btn.grooming": "จองคิวอาบน้ำ–ตัดขน",
    "btn.hotel": "จองห้องพักโรงแรมแมว",

    // หน้า Booking
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
    "label.customerinfo": "ข้อมูลผู้จอง",
    "label.addpet": "+ เพิ่มตัวที่ 2/3",
    "label.confirmterms": "ยืนยันเงื่อนไข",
    "label.payment": "ชำระมัดจำ & แจ้งสลิป",
    "label.calendarstatus": "สถานะคิว",
    "label.available": "ว่างทุกเวลา",
    "label.partial": "ว่างบางเวลา",
    "label.full": "เต็ม",
    "label.closed": "ปิด",
    "label.selecttime": "เลือกเวลา",
    "label.bookinfo": "รายละเอียดการจอง",
    // === หน้า HOTEL ===
    "hotel.title": "P.O. CAT HOTEL | Private & Premium Stay for Cats",
    "hotel.name": "P.O. CAT HOTEL",
    "hotel.subtitle": "Private & Premium Stay for Cats",
    "hotel.facilitiesTitle": "สิ่งอำนวยความสะดวกภายในโรงแรม",
    "hotel.about": "โรงแรมแมว P.O. Cat Hotel ให้บริการที่พักแมวแบบ Private ทุกห้องแยกส่วนตัว ไม่เล่นรวมกับแมวบ้านอื่น ทุกห้องมีวิวท้องฟ้า อากาศถ่ายเท ปลอดภัย อบอุ่นเหมือนอยู่บ้าน พร้อมดูแลโดยเจ้าของร้านเองตลอดการเข้าพัก เพื่อให้มั่นใจว่าน้องจะได้รับความรัก และความสบายสูงสุด 💛",
    "hotel.fac1": "เครื่องปรับอากาศและฟอกอากาศในทุกห้อง",
    "hotel.fac2": "พัดลมหมุนเวียนอากาศ ระบบฆ่าเชื้อโรค และทำความสะอาดทุกวัน",
    "hotel.fac3": "พื้นที่ส่วนกลางมีของเล่น และที่ปีนป่ายสำหรับน้อง",
    "hotel.fac4": "บริการอาหารเสริม ขนม และการดูแลรายวันโดยเจ้าของร้าน",
    "hotel.fac5": "กล้องวงจรปิดส่วนตัวสำหรับผู้ต้องการดูน้องแบบเรียลไทม์",
    "hotel.roomTitle": "ประเภทห้องพัก",
    "hotel.standardTitle": "Standard Room",
    "hotel.standardDesc": "ห้องพักขนาด 60×60×110 ซม. สำหรับ 1 ตัว ตกแต่งด้วยไม้ธรรมชาติ มีระบบหมุนเวียนอากาศและแสงธรรมชาติพอดี ราคาคืนละ 250 บาท (ไม่รวมกล้องวงจรปิด)",
    "hotel.suiteTitle": "Suite Room",
    "hotel.suiteDesc": "ห้องพักขนาด 150×120×220 ซม. โปร่ง มีระเบียงและมุมชมวิว รองรับแมวสูงสุด 3 ตัว (ตัวที่ 2 และ 3 เพิ่ม 200 บาท / คืน) ราคาคืนละ 500 บาท (ไม่รวมกล้องวงจรปิด)",
    "hotel.cameraNote": "บริการกล้องวงจรปิดส่วนตัว เพิ่ม 100 บาท/คืน ดูน้องได้ตลอด 24 ชั่วโมง",
    "hotel.bookNow": "จองห้องพักกับเรา",
    "hotel.bookingtitle": "จองห้องพักโรงแรมแมว",
    "hotel.formtitle": "กรอกรายละเอียดการจอง",
    "form.name": "ชื่อผู้จอง / Name",
    "form.phone": "เบอร์ติดต่อ / Phone",
    "form.roomtype": "เลือกประเภทห้องพัก",
    "form.catcount": "จำนวนแมวที่เข้าพัก",
    "form.checkin": "วันเช็กอิน",
    "form.checkout": "วันเช็กเอาท์",
    "form.cctv": "ต้องการกล้องวงจรปิด (+฿100/คืน)",
    "form.total": "ยอดรวม",
    "form.deposit": "มัดจำ 50%",
    "form.confirm": "ยืนยันการจอง",
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
    "label.customerinfo": "Customer Information",
    "label.addpet": "+ Add 2nd/3rd Pet",
    "label.confirmterms": "Confirm Terms",
    "label.payment": "Deposit & Slip Notification",
    "label.calendarstatus": "Slot Status",
    "label.available": "Available",
    "label.partial": "Partially Available",
    "label.full": "Full",
    "label.closed": "Closed",
    "label.selecttime": "Select Time",
    "label.bookinfo": "Booking Details",
    // === HOTEL PAGE ===
    "hotel.title": "P.O. CAT HOTEL | Private & Premium Stay for Cats",
    "hotel.name": "P.O. CAT HOTEL",
    "hotel.subtitle": "Private & Premium Stay for Cats",
    "hotel.facilitiesTitle": "Hotel Facilities",
    "hotel.about": "P.O. Cat Hotel offers private rooms for every cat. Each suite is separate — no shared spaces with other cats. Every room has sky views and natural airflow, ensuring comfort and safety just like home, under the gentle care of the owner.",
    "hotel.fac1": "Air conditioning and air purifier in every room",
    "hotel.fac2": "Air circulation fan, sterilization system, and daily cleaning",
    "hotel.fac3": "Play area and climbing zone for cats",
    "hotel.fac4": "Supplementary meals, treats, and daily care by the owner",
    "hotel.fac5": "Private CCTV for real-time monitoring",
    "hotel.roomTitle": "Room Types",
    "hotel.standardTitle": "Standard Room",
    "hotel.standardDesc": "Room size 60×60×110 cm for 1 cat. Wooden interior with proper airflow and lighting. Rate: 250 THB/night (CCTV not included).",
    "hotel.suiteTitle": "Suite Room",
    "hotel.suiteDesc": "Room size 150×120×220 cm with private balcony and sky view. Accommodates up to 3 cats (extra 200 THB/night per additional cat). Rate: 500 THB/night (CCTV not included).",
    "hotel.cameraNote": "Optional private CCTV available at 100 THB/night (24-hour access).",
    "hotel.bookNow": "Book Your Stay",
    "hotel.bookingtitle": "Cat Hotel Booking",
    "hotel.formtitle": "Fill in your booking details",
    "form.name": "Name",
    "form.phone": "Phone Number",
    "form.roomtype": "Room Type",
    "form.catcount": "Number of Cats",
    "form.checkin": "Check-in Date",
    "form.checkout": "Check-out Date",
    "form.cctv": "Add CCTV (+฿100/night)",
    "form.total": "Total",
    "form.deposit": "Deposit 50%",
    "form.confirm": "Confirm Booking"
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
    "label.customerinfo": "预约人资料",
    "label.addpet": "+ 添加第2/3只",
    "label.confirmterms": "确认条款",
    "label.payment": "支付定金并上传凭证",
    "label.calendarstatus": "档期状态",
    "label.available": "可预约",
    "label.partial": "部分可预约",
    "label.full": "已满",
    "label.closed": "休息",
    "label.selecttime": "选择时间",
    "label.bookinfo": "预约详情",
     // === HOTEL PAGE ===
    "hotel.title": "P.O. CAT HOTEL | 私人高端猫咪旅馆",
    "hotel.name": "P.O. CAT HOTEL",
    "hotel.subtitle": "私人高端猫咪住宿体验",
    "hotel.facilitiesTitle": "酒店设施",
    "hotel.about": "P.O. Cat Hotel 提供每只猫独立的私人房间，不与其他猫共用空间。每个房间都能看到天空，空气流通安全舒适，由店主亲自照顾，让每位主子都能安心入住。",
    "hotel.fac1": "每个房间均配备空调与空气净化器",
    "hotel.fac2": "循环风扇、杀菌系统及每日清洁",
    "hotel.fac3": "公共游戏区与猫咪攀爬区",
    "hotel.fac4": "提供加餐、零食及店主每日照料",
    "hotel.fac5": "专属监控摄像头，可实时查看猫咪"   
    "hotel.roomTitle": "房型介绍",
    "hotel.standardTitle": "标准房",
    "hotel.standardDesc": "房间尺寸 60×60×110 厘米，适合 1 只猫。木质装饰，自然采光与通风。价格：每晚 250 泰铢（不含监控）。",
    "hotel.suiteTitle": "套房",
    "hotel.suiteDesc": "房间尺寸 150×120×220 厘米，带阳台和观景窗，可容纳最多 3 只猫（第 2、3 只猫加收 200 泰铢/晚）。价格：每晚 500 泰铢（不含监控）。",
    "hotel.cameraNote": "可选私人监控服务，每晚 100 泰铢，可 24 小时查看。",
    "hotel.bookNow": "立即预订",
    "hotel.bookingtitle": "猫咪酒店预订",
    "hotel.formtitle": "填写预订资料",
    "form.name": "姓名",
    "form.phone": "联系电话",
    "form.roomtype": "房型选择",
    "form.catcount": "入住猫咪数量",
    "form.checkin": "入住日期",
    "form.checkout": "退房日期",
    "form.cctv": "需要摄像头服务 (+฿100/晚)",
    "form.total": "总价",
    "form.deposit": "预付 50%",
    "form.confirm": "确认预订"
  }
};

let currentLang = localStorage.getItem("lang") || "th";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // แนบภาษาปัจจุบันในลิงก์ทั้งหมด
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
