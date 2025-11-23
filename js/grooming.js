//------------------------------------
// CONFIG
//------------------------------------
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1xhS3Yl5BpTkTSjEKT_nMM6G7qgCf7-m7vkFZjiWaGmE/gviz/tq?tqx=out:json&gid=0";

const TIME_SLOTS = ["12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

// กำหนดชั่วโมงที่บริการใช้
const SERVICE_DURATION = {
  bath: 2,
  cutonly: 2,
  bathcut: 3,
};

//------------------------------------
// GLOBAL STATE
//------------------------------------
let calendarData = [];       // [{date:"2025-11-01", time:"14:00", status:true}]
let selectedDate = null;
let selectedTime = null;

let petCount = 1;
let pets = [];    // เก็บข้อมูลสัตว์แต่ละตัว
let heavyUsed = false;

//------------------------------------
// LOAD GOOGLE SHEET
//------------------------------------
async function loadCalendar() {
  const res = await fetch(SHEET_URL);
  const text = await res.text();

  const json = JSON.parse(text.substring(47, text.length - 2));

  let rows = json.table.rows.map(r => ({
    date: r.c[0]?.v,
    time: r.c[1]?.v,
    status: r.c[2]?.v === true || r.c[2]?.v === "TRUE"
  }));

  calendarData = rows;
}

//------------------------------------
// สร้างปฏิทินวัน (กล่องวันที่)
//------------------------------------
function renderCalendarDays() {
  const box = document.getElementById("calendarDays");
  box.innerHTML = "";

  const uniqueDates = [...new Set(calendarData.map(r => r.date))];

  uniqueDates.forEach(d => {
    const btn = document.createElement("button");
    btn.className =
      "p-3 bg-white text-green-900 rounded-xl font-bold hover:bg-yellow-200 w-full mb-2";
    btn.innerText = d;
    btn.onclick = () => selectDate(d);

    box.appendChild(btn);
  });
}

//------------------------------------
// เมื่อเลือกวันที่
//------------------------------------
function selectDate(date) {
  selectedDate = date;
  selectedTime = null;

  document.getElementById("calendarTimes").innerHTML = "";

  renderTimesForDate(date);
}

//------------------------------------
// แสดงเวลาให้เลือก
//------------------------------------
function renderTimesForDate(date) {
  const box = document.getElementById("calendarTimes");
  box.innerHTML = "";

  TIME_SLOTS.forEach(slot => {
    const row = calendarData.find(
      r => r.date === date && r.time === slot
    );

    const isFree = row?.status === true;

    const btn = document.createElement("button");
    btn.innerText = slot;

    btn.className =
      "p-3 rounded-xl font-bold w-full mb-2 " +
      (isFree ? "bg-white hover:bg-yellow-200 text-green-900" : "bg-gray-400 text-gray-700");

    btn.disabled = !isFree;

    if (isFree) btn.onclick = () => selectTime(slot);

    box.appendChild(btn);
  });
}

//------------------------------------
// ตรวจสอบกฎเวลา
//------------------------------------
function validateTimeRules(slot) {
  let errors = [];

  // RULE 1 : 12:00 รับเฉพาะสุนัข
  if (slot === "12:00") {
    for (let i = 1; i <= petCount; i++) {
      let t = document.getElementById(`petType-${i}`).value;
      if (t !== "dog") errors.push("เวลา 12:00 รับเฉพาะสุนัขค่ะ");
    }
  }

  // RULE 2 : 18:00 ห้ามอาบ+ตัด
  if (slot === "18:00") {
    for (let i = 1; i <= petCount; i++) {
      let s = document.getElementById(`service-${i}`).value;
      if (s === "bathcut")
        errors.push("รอบ 18:00 ไม่รับอาบน้ำ+ตัดขนนะคะ");
    }
  }

  // RULE 3 : คำนวณทับซ้อน
  let neededSlots = [];

  for (let i = 1; i <= petCount; i++) {
    let s = document.getElementById(`service-${i}`).value;
    let dur = SERVICE_DURATION[s];
    if (!dur) continue;

    neededSlots.push(dur);
  }

  const maxDur = Math.max(...neededSlots);

  const slotIndex = TIME_SLOTS.indexOf(slot);

  for (let i = 1; i < maxDur; i++) {
    let nextSlot = TIME_SLOTS[slotIndex + i];
    if (!nextSlot) continue;

    const row = calendarData.find(
      r => r.date === selectedDate && r.time === nextSlot
    );

    if (row && !row.status) {
      errors.push(`ช่วงเวลา ${slot} → ${nextSlot} ไม่ว่าง ไม่สามารถรับงานนี้ได้`);
    }
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }

  return true;
}

//------------------------------------
// เลือกเวลา
//------------------------------------
function selectTime(slot) {
  if (!validateTimeRules(slot)) return;

  selectedTime = slot;

  document.getElementById("selectedTime").value = slot;

  document.getElementById("step4").style.display = "block";
  renderSummary();
}

//------------------------------------
// สรุปยอด + มัดจำ
//------------------------------------
function renderSummary() {
  let box = document.getElementById("summary");
  box.innerHTML = "";

  let html = `<p>วัน: <b>${selectedDate}</b></p>`;
  html += `<p>เวลา: <b>${selectedTime}</b></p><hr class="my-2">`;

  let dep = calcDeposit();

  html += `<p>ยอดมัดจำรวม: <b>${dep} บาท</b></p>`;

  box.innerHTML = html;

  document.getElementById("finalButton").style.display = "block";
}

//------------------------------------
// คำนวณยอดมัดจำ
//------------------------------------
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

//------------------------------------
// ส่งเข้า LINE
//------------------------------------
function sendToLINE() {
  let text = "รายละเอียดการจองคิว:\n\n";

  text += `วันที่: ${selectedDate}\nเวลา: ${selectedTime}\n\n`;

  for (let i = 1; i <= petCount; i++) {
    const type = document.getElementById(`petType-${i}`).value;
    const w = document.getElementById(`weight-${i}`).value;
    const h = document.getElementById(`hair-${i}`).value;
    const s = document.getElementById(`service-${i}`).value;
    const m = document.getElementById(`method-${i}`).value;

    text += `ตัวที่ ${i}:\n`;
    text += `ชนิด: ${type}\nน้ำหนัก: ${w}\nขน: ${h}\nบริการ: ${s}${m ? " (" + m + ")" : ""}\n\n`;
  }

  text += `ยอดมัดจำรวม: ${calcDeposit()} บาท\n`;
  text += `\nกรุณาส่งสลิปเพื่อยืนยันคิวค่ะ 💛`;

  const encoded = encodeURIComponent(text);
  window.location.href = `https://line.me/R/ti/p/@POGROOMING?text=${encoded}`;
}

//------------------------------------
// STARTUP
//------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  await loadCalendar();
  renderCalendarDays();
});
