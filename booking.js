// ------------------------------
// GLOBAL STATE
// ------------------------------
let petCount = 1;
let pets = [];   // [{type:'cat', weight:'m', hair:'long', service:'bathcut', method:'clipper'}]
let heavyUsed = false; // อนุญาตอาบ+ตัดได้แค่ตัวเดียว

// ขั้นตอนเริ่มต้น
document.addEventListener("DOMContentLoaded", () => {
  initPetForm(1);
});

// ------------------------------
// ฟังก์ชัน: ตั้งจำนวนสัตว์
// ------------------------------
function setPetCount(count) {
  petCount = count;
  pets = [];

  // reset กล่องทั้งหมด
  const container = document.getElementById("petForms");
  container.innerHTML = "";

  heavyUsed = false;

  for (let i = 1; i <= count; i++) {
    initPetForm(i);
  }

  document.getElementById("step2").style.display = "block";
}

// ------------------------------
// ฟังก์ชันสร้างฟอร์มของแต่ละตัว
// ------------------------------
function initPetForm(index) {
  const container = document.getElementById("petForms");

  const box = document.createElement("div");
  box.className = "step-card mt-4";
  box.id = `pet-${index}`;

  box.innerHTML = `
    <h3 class="font-bold mb-2 text-xl">น้องตัวที่ ${index}</h3>

    <!-- เลือกชนิด -->
    <label class="font-bold">เลือกชนิดสัตว์</label>
    <select onchange="onSelectPet(${index})" id="petType-${index}" class="w-full p-3 rounded mt-2">
      <option value="">— เลือกสัตว์ —</option>
      <option value="cat">แมว</option>
      <option value="dog">สุนัข</option>
    </select>

    <!-- รูปตารางราคา -->
    <div id="priceTable-${index}" class="hidden mt-4"></div>

    <!-- เลือกน้ำหนัก -->
    <label class="font-bold mt-4 block">เลือกน้ำหนัก</label>
    <select id="weight-${index}" class="w-full p-3 rounded mt-2"></select>

    <!-- ลักษณะขน -->
    <label class="font-bold mt-4 block">เลือกลักษณะขน</label>
    <select id="hair-${index}" class="w-full p-3 rounded mt-2"></select>

    <!-- บริการ -->
    <label class="font-bold mt-4 block">เลือกบริการ</label>
    <select onchange="onSelectService(${index})" id="service-${index}" class="w-full p-3 rounded mt-2">
      <option value="">— เลือกบริการ —</option>
      <option value="bath">อาบน้ำ</option>
      <option value="bathcut">อาบน้ำ + ตัดขน</option>
      <option value="cutonly">ตัดขนอย่างเดียว</option>
    </select>

    <!-- วิธีตัด -->
    <div id="cutMethodBox-${index}" class="hidden mt-3">
      <label class="font-bold">เลือกรูปแบบการตัดขน</label>
      <select id="method-${index}" class="w-full p-3 rounded mt-2">
        <option value="">— เลือกวิธีตัด —</option>
        <option value="clipper">ไถทั้งตัว</option>
        <option value="scissor">กรรไกรทั้งตัว</option>
      </select>
    </div>
  `;

  container.appendChild(box);
}

// ------------------------------
// เมื่อเลือกสัตว์
// ------------------------------
function onSelectPet(i) {
  const type = document.getElementById(`petType-${i}`).value;
  const weightSelect = document.getElementById(`weight-${i}`);
  const hairSelect = document.getElementById(`hair-${i}`);
  const tableBox = document.getElementById(`priceTable-${i}`);

  // reset ช่องอื่นก่อน
  weightSelect.innerHTML = "";
  hairSelect.innerHTML = "";
  tableBox.classList.add("hidden");

  if (!type) return;

  // --------------------------
  // 1) โหลดรูปตารางราคา
  // --------------------------
  if (type === "cat") {
    tableBox.innerHTML = `<img src="img/price-cat.png" class="w-full rounded-lg">`;
  } else {
    tableBox.innerHTML = `<img src="img/price-dog.png" class="w-full rounded-lg">`;
  }

  tableBox.classList.remove("hidden");

  // --------------------------
  // 2) โหลดน้ำหนัก
  // --------------------------
  if (type === "cat") {
    weightSelect.innerHTML = `
      <option value="">— เลือกน้ำหนัก —</option>
      <option value="xs">ต่ำกว่า 1–1.4 กก.</option>
      <option value="s">1.5–2.9 กก.</option>
      <option value="m">3–4.4 กก.</option>
      <option value="l">4.5–4.9 กก.</option>
      <option value="xl">5–7 กก.</option>
    `;
  } else {
    weightSelect.innerHTML = `
      <option value="">— เลือกน้ำหนัก —</option>
      <option value="xs">ต่ำกว่า 1–1.9 กก.</option>
      <option value="s">2–3.9 กก.</option>
      <option value="m">4–6.4 กก.</option>
      <option value="l">6.5–9.9 กก.</option>
      <option value="xl">10–15 กก.</option>
    `;
  }

  // --------------------------
  // 3) โหลดลักษณะขน
  // --------------------------
  if (type === "cat") {
    hairSelect.innerHTML = `
      <option value="">— เลือกลักษณะขน —</option>
      <option value="short">ขนสั้นชั้นเดียว (แมวไทย)</option>
      <option value="medium">ขนสั้นหนา / ขนยาวชั้นเดียว</option>
      <option value="long">ขนยาวหนาพิเศษ</option>
    `;
  } else {
    hairSelect.innerHTML = `
      <option value="">— เลือกลักษณะขน —</option>
      <option value="short">ขนสั้น / ขนชั้นเดียว</option>
      <option value="medium">ขนกลาง / ขนสั้นสองชั้น</option>
      <option value="long">ขนยาว / ขนสองชั้น / ขนหนาพิเศษ</option>
    `;
  }
}

// ------------------------------
// ห้าม heavy grooming มากกว่า 1 ตัว
// ------------------------------
function onSelectService(i) {
  const service = document.getElementById(`service-${i}`).value;
  const cutBox = document.getElementById(`cutMethodBox-${i}`);

  // แสดงช่องเลือกวิธีตัดเฉพาะ bathcut
  if (service === "bathcut") {
    cutBox.classList.remove("hidden");
  } else {
    cutBox.classList.add("hidden");
  }

  // ตรวจสอบ heavy grooming
  if (service === "bathcut") {
    if (heavyUsed && !pets[i - 1]?.heavy) {
      alert("สามารถรับงานอาบน้ำ + ตัดขนได้ครั้งละ 1 ตัวเท่านั้นค่ะ");
      document.getElementById(`service-${i}`).value = "";
      cutBox.classList.add("hidden");
      return;
    }
    heavyUsed = true;
    pets[i - 1] = { heavy: true };
  } else {
    pets[i - 1] = { heavy: false };
  }
}

// ------------------------------
// กดต่อเพื่อเลือกเวลา
// ------------------------------
function gotoTimeStep() {
  document.getElementById("step3").style.display = "block";
}

// ------------------------------
// ตรวจสอบเวลา 12:00 / 18:00
// ------------------------------
function validateTime(slot) {
  let errors = [];

  // 12:00 — เฉพาะสุนัข
  if (slot === "12:00") {
    for (let i = 1; i <= petCount; i++) {
      const type = document.getElementById(`petType-${i}`).value;
      if (type !== "dog") {
        errors.push(`รอบเวลา 12:00 รับเฉพาะสุนัขเท่านั้น`);
      }
    }
  }

  // 18:00 — ห้ามอาบ+ตัด
  if (slot === "18:00") {
    for (let i = 1; i <= petCount; i++) {
      const service = document.getElementById(`service-${i}`).value;
      if (service === "bathcut") {
        errors.push(`รอบเวลา 18:00 ไม่สามารถรับอาบน้ำ + ตัดขนได้ค่ะ`);
      }
    }
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }

  return true;
}

// ------------------------------
// คำนวณมัดจำใหม่
// ------------------------------
function calcDeposit() {
  let deposit = 0;

  for (let i = 1; i <= petCount; i++) {
    const type = document.getElementById(`petType-${i}`).value;
    const service = document.getElementById(`service-${i}`).value;

    const weight = document.getElementById(`weight-${i}`).value;
    const isLargeDog = type === "dog" && weight === "xl";

    if (isLargeDog) {
      deposit += 400;
      continue;
    }

    if (service === "bath") deposit += 200;
    if (service === "bathcut") deposit += 400;
    if (service === "cutonly") deposit += 200;
  }

  return deposit;
}

// ------------------------------
// ส่งเข้าไลน์
// ------------------------------
function sendToLINE() {
  let text = "รายละเอียดการจองคิว:\n\n";

  for (let i = 1; i <= petCount; i++) {
    const type = document.getElementById(`petType-${i}`).value;
    const weight = document.getElementById(`weight-${i}`).value;
    const hair = document.getElementById(`hair-${i}`).value;
    const service = document.getElementById(`service-${i}`).value;
    const method = document.getElementById(`method-${i}`).value;

    text += `ตัวที่ ${i}:\n`;
    text += `สัตว์: ${type}\n`;
    text += `น้ำหนัก: ${weight}\n`;
    text += `ขน: ${hair}\n`;
    text += `บริการ: ${service}${method ? " (" + method + ")" : ""}\n\n`;
  }

  const deposit = calcDeposit();
  text += `ยอดมัดจำรวม: ${deposit} บาท\n\n`;
  text += `กรุณาส่งสลิปเพื่อยืนยันคิวค่ะ 💛`;

  const encoded = encodeURIComponent(text);
  window.location.href = `https://line.me/R/ti/p/@POGROOMING?text=${encoded}`;
}

