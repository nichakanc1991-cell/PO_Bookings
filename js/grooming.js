// ---------------------------------------------
// GLOBAL STATE
// ---------------------------------------------
let petCount = 1;
let pets = [];
let heavyUsed = false;

// Google Sheet URL
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1xhS3Yl5BpTkTSjEKT_nMM6G7qgCf7-m7vkFZjiWaGmE/gviz/tq?tqx=out:json&gid=0";

// เวลาเปิดให้เลือก
const ALL_SLOTS = ["12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

// โหลดตอนเปิดหน้า
document.addEventListener("DOMContentLoaded", () => {
  initPetForm(1);
});

// ---------------------------------------------
// SET PET COUNT
// ---------------------------------------------
function setPetCount(count) {
  petCount = count;
  pets = [];
  heavyUsed = false;

  const container = document.getElementById("petForms");
  container.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    initPetForm(i);
  }
  document.getElementById("step2").style.display = "block";
}

// ---------------------------------------------
// INIT PET FORM
// ---------------------------------------------
function initPetForm(index) {
  const container = document.getElementById("petForms");

  const box = document.createElement("div");
  box.className = "step-card mt-4";
  box.id = `pet-${index}`;

  box.innerHTML = `
    <h3 class="font-bold mb-2 text-xl">น้องตัวที่ ${index}</h3>

    <label class="font-bold">เลือกชนิดสัตว์</label>
    <select onchange="onSelectPet(${index})" id="petType-${index}" class="w-full p-3 rounded mt-2">
      <option value="">— เลือกสัตว์ —</option>
      <option value="cat">แมว</option>
      <option value="dog">สุนัข</option>
    </select>

    <div id="priceTable-${index}" class="hidden mt-4"></div>

    <label class="font-bold mt-4 block">เลือกน้ำหนัก</label>
    <select id="weight-${index}" class="w-full p-3 rounded mt-2"></select>

    <label class="font-bold mt-4 block">เลือกลักษณะขน</label>
    <select id="hair-${index}" class="w-full p-3 rounded mt-2"></select>

    <label class="font-bold mt-4 block">เลือกบริการ</label>
    <select onchange="onSelectService(${index})" id="service-${index}" class="w-full p-3 rounded mt-2">
      <option value="">— เลือกบริการ —</option>
      <option value="bath">อาบน้ำ</option>
      <option value="bathcut">อาบน้ำ + ตัดขน</option>
      <option value="cutonly">ตัดขนอย่างเดียว</option>
    </select>

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

// ---------------------------------------------
// WHEN SELECT PET TYPE
// ---------------------------------------------
function onSelectPet(i) {
  const type = document.getElementById(`petType-${i}`).value;
  const weight = document.getElementById(`weight-${i}`);
  const hair = document.getElementById(`hair-${i}`);
  const tableBox = document.getElementById(`priceTable-${i}`);

  weight.innerHTML = "";
  hair.innerHTML = "";
  tableBox.classList.add("hidden");

  if (!type) return;

  // ตารางราคา
  tableBox.innerHTML = type === "cat"
    ? `<img src="img/price-cat.png" class="w-full rounded-lg">`
    : `<img src="img/price-dog.png" class="w-full rounded-lg">`;
  tableBox.classList.remove("hidden");

  // น้ำหนัก
  if (type === "cat") {
    weight.innerHTML = `
      <option value="">— น้ำหนัก —</option>
      <option value="xs">ต่ำกว่า1–1.4</option>
      <option value="s">1.5–2.9</option>
      <option value="m">3–4.4</option>
      <option value="l">4.5–4.9</option>
      <option value="xl">5–7</option>`;
  } else {
    weight.innerHTML = `
      <option value="">— น้ำหนัก —</option>
      <option value="xs">ต่ำกว่า1–1.9</option>
      <option value="s">2–3.9</option>
      <option value="m">4–6.4</option>
      <option value="l">6.5–9.9</option>
      <option value="xl">10–15</option>`;
  }

  // ขน
  if (type === "cat") {
    hair.innerHTML = `
      <option value="">— ลักษณะขน —</option>
      <option value="short">ขนสั้นชั้นเดียว</option>
      <option value="medium">ขนสั้นหนา / ยาวชั้นเดียว</option>
      <option value="long">ขนยาวหนาพิเศษ</option>`;
  } else {
    hair.innerHTML = `
      <option value="">— ลักษณะขน —</option>
      <option value="short">ชั้นเดียว</option>
      <option value="medium">2 ชั้นกลาง</option>
      <option value="long">ขนยาว/หนาพิเศษ</option>`;
  }
}

// ---------------------------------------------
// SERVICE VALIDATION (HEAVY)
// ---------------------------------------------
function onSelectService(i) {
  const service = document.getElementById(`service-${i}`).value;
  const cutBox = document.getElementById(`cutMethodBox-${i}`);

  if (service === "bathcut") {
    if (heavyUsed && !pets[i - 1]?.heavy) {
      alert("อาบน้ำ+ตัดขนได้ครั้งละ 1 ตัวเท่านั้นค่ะ");
      document.getElementById(`service-${i}`).value = "";
      return;
    }
    heavyUsed = true;
    pets[i - 1] = { heavy: true };
    cutBox.classList.remove("hidden");
  } else {
    pets[i - 1] = { heavy: false };
    cutBox.classList.add("hidden");
  }
}

// ---------------------------------------------
// GOTO TIME STEP
// ---------------------------------------------
function gotoTimeStep() {
  loadAvailableSlots();
  document.getElementById("step3").style.display = "block";
}

// ---------------------------------------------
// LOAD GOOGLE SHEET
// ---------------------------------------------
async function loadAvailableSlots() {
  const resp = await fetch(SHEET_URL);
  const text = await resp.text();

  const json = JSON.parse(text.substring(47, text.length - 2));
  const rows = json.table.rows;

  const today = new Date().toISOString().split("T")[0];

  let booked = {};

  rows.forEach(r => {
    const d = r.c[0]?.v;
    const t = r.c[1]?.v;
    const s = r.c[2]?.v;

    if (!booked[d]) booked[d] = {};
    booked[d][t] = s === true;
  });

  renderSlots(booked[today] || {});
}

// ---------------------------------------------
// RENDER TIME BUTTONS
// ---------------------------------------------
function renderSlots(bookedToday) {
  const grid = document.querySelector("#step3 .grid");
  grid.innerHTML = "";

  ALL_SLOTS.forEach(time => {
    let disabled = bookedToday[time] === true;

    // RULE: 12:00 เฉพาะหมา
    if (time === "12:00") {
      for (let i = 1; i <= petCount; i++) {
        const type = document.getElementById(`petType-${i}`).value;
        if (type !== "dog") disabled = true;
      }
    }

    // RULE: 18:00 ห้าม bathcut
    if (time === "18:00") {
      for (let i = 1; i <= petCount; i++) {
        const s = document.getElementById(`service-${i}`).value;
        if (s === "bathcut") disabled = true;
      }
    }

    const btn = document.createElement("button");
    btn.className =
      "p-3 rounded-xl font-bold " +
      (disabled
        ? "bg-gray-400 text-gray-700"
        : "bg-white text-green-900 hover:bg-yellow-200");

    btn.innerText = time;

    if (!disabled) {
      btn.onclick = () => selectTime(time);
    }

    grid.appendChild(btn);
  });
}

// ---------------------------------------------
// SELECT TIME
// ---------------------------------------------
function selectTime(time) {
  const summary = document.getElementById("summary");

  summary.innerHTML = `
    <p class="text-xl font-bold">คุณเลือกเวลา ${time}</p>
    <p class="mt-2">ยอดมัดจำ: ${calcDeposit()} บาท</p>
  `;

  document.getElementById("step4").style.display = "block";
  document.getElementById("finalButton").style.display = "block";
}

// ---------------------------------------------
// CALC DEPOSIT
// ---------------------------------------------
function calcDeposit() {
  let deposit = 0;

  for (let i = 1; i <= petCount; i++) {
    const type = document.getElementById(`petType-${i}`).value;
    const service = document.getElementById(`service-${i}`).value;
    const weight = document.getElementById(`weight-${i}`).value;

    const isLargeDog = type === "dog" && weight === "xl";

    if (isLargeDog) {
      deposit += 400;
    } else if (service === "bath") {
      deposit += 200;
    } else if (service === "cutonly") {
      deposit += 200;
    } else if (service === "bathcut") {
      deposit += 400;
    }
  }
  return deposit;
}

// ---------------------------------------------
// SEND TO LINE
// ---------------------------------------------
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
    text += `บริการ: ${service}`;
    if (method) text += ` (${method})`;
    text += `\n\n`;
  }

  text += `ยอดมัดจำรวม: ${calcDeposit()} บาท\n\nกรุณาส่งสลิปเพื่อยืนยันคิวค่ะ 💛`;

  const encoded = encodeURIComponent(text);
  window.location.href = `https://line.me/R/ti/p/@POGROOMING?text=${encoded}`;
}
