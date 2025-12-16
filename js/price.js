let selectedPet = "";

// ราคาแบบตามภาพจริง 100%
const prices = {
  cat: {
    short: {
      xs: { bath: 259, clip: 250, sc: 350, cutMin: 250, cutMax: 450 },
      s:  { bath: 359, clip: 300, sc: 400, cutMin: 300, cutMax: 500 },
      m:  { bath: 409, clip: 300, sc: 400, cutMin: 350, cutMax: 550 },
      l:  { bath: 459, clip: 300, sc: 400, cutMin: 400, cutMax: 600 },
      xl: { bath: 509, clip: 300, sc: 400, cutMin: 450, cutMax: 650 }
    },

    medium: {
      xs: { bath: 359, clip: 250, sc: 350, cutMin: 300, cutMax: 500 },
      s:  { bath: 409, clip: 300, sc: 400, cutMin: 350, cutMax: 550 },
      m:  { bath: 459, clip: 300, sc: 400, cutMin: 400, cutMax: 600 },
      l:  { bath: 509, clip: 300, sc: 400, cutMin: 450, cutMax: 650 },
      xl: { bath: 559, clip: 300, sc: 400, cutMin: 500, cutMax: 700 }
    },

    long: {
      xs: { bath: 409, clip: 250, sc: 350, cutMin: 300, cutMax: 500 },
      s:  { bath: 459, clip: 300, sc: 400, cutMin: 350, cutMax: 550 },
      m:  { bath: 509, clip: 300, sc: 400, cutMin: 400, cutMax: 600 },
      l:  { bath: 559, clip: 300, sc: 400, cutMin: 450, cutMax: 650 },
      xl: { bath: 609, clip: 300, sc: 400, cutMin: 500, cutMax: 700 }
    }
  },

  dog: {
    short: {
      xs: { bath: 259, clip: 250, sc: 350, cutMin: 250, cutMax: 400 },
      s:  { bath: 359, clip: 250, sc: 350, cutMin: 300, cutMax: 500 },
      m:  { bath: 409, clip: 250, sc: 350, cutMin: 350, cutMax: 550 },
      l:  { bath: 459, clip: 300, sc: 400, cutMin: 400, cutMax: 600 },
      xl: { bath: 509, clip: 300, sc: 400, cutMin: 450, cutMax: 650 }
    },

    medium: {
      xs: { bath: 309, clip: 250, sc: 350, cutMin: 250, cutMax: 400 },
      s:  { bath: 409, clip: 250, sc: 350, cutMin: 350, cutMax: 550 },
      m:  { bath: 459, clip: 250, sc: 350, cutMin: 400, cutMax: 600 },
      l:  { bath: 509, clip: 300, sc: 400, cutMin: 450, cutMax: 650 },
      xl: { bath: 559, clip: 300, sc: 400, cutMin: 500, cutMax: 700 }
    },

    long: {
      xs: { bath: 359, clip: 250, sc: 350, cutMin: 250, cutMax: 400 },
      s:  { bath: 459, clip: 250, sc: 350, cutMin: 350, cutMax: 550 },
      m:  { bath: 509, clip: 250, sc: 350, cutMin: 400, cutMax: 600 },
      l:  { bath: 559, clip: 300, sc: 400, cutMin: 450, cutMax: 650 },
      xl: { bath: 609, clip: 300, sc: 400, cutMin: 500, cutMax: 700 }
    }
  }
};

const weightOptions = {
  cat: [
    {v:"xs", t:"<1–1.4 กก."},
    {v:"s", t:"1.5–2.9 กก."},
    {v:"m", t:"3–4.4 กก."},
    {v:"l", t:"4.5–4.9 กก."},
    {v:"xl",t:"5–7 กก."}
  ],
  dog: [
    {v:"xs", t:"<1–1.9 กก."},
    {v:"s", t:"2–3.9 กก."},
    {v:"m", t:"4–6.4 กก."},
    {v:"l", t:"6.5–9.9 กก."},
    {v:"xl",t:"10–15 กก."}
  ]
};

const hairOptions = {
  cat: [
    {v:"short", t:"ขนสั้นชั้นเดียว"},
    {v:"medium",t:"ขนสั้นหนา/ยาวชั้นเดียว"},
    {v:"long", t:"ขนยาวหนาพิเศษ"}
  ],
  dog: [
    {v:"short", t:"ขนสั้น/ชั้นเดียว"},
    {v:"medium",t:"ขนกลาง/สองชั้น"},
    {v:"long", t:"ขนยาว/หนาพิเศษ"}
  ]
};


// เลือกสัตว์
function selectPet(pet){
  selectedPet = pet;

  // show next step
  document.getElementById("step2").style.display="block";

  // load weight
  const w = document.getElementById("weight");
  w.innerHTML = "";
  weightOptions[pet].forEach(x=>{
    w.innerHTML += `<option value="${x.v}">${x.t}</option>`;
  });

  // load hair
  const h = document.getElementById("hair");
  h.innerHTML = "";
  hairOptions[pet].forEach(x=>{
    h.innerHTML += `<option value="${x.v}">${x.t}</option>`;
  });
}


// การเปลี่ยนทุกค่า → อัปเดตราคา
document.querySelectorAll("select").forEach(sel=>{
  sel.addEventListener("change", updateAll);
});


function updateAll(){
  const weight = document.getElementById("weight").value;
  const hair = document.getElementById("hair").value;
  const service = document.getElementById("service").value;

  if(weight) document.getElementById("step3").style.display="block";
  if(weight && hair) document.getElementById("step4").style.display="block";


  // ถ้าบริการเป็นอาบน้ำ+ตัดขน → ต้องถามต่อ
  if(service === "bathcut"){
    document.getElementById("cutMethodBox").style.display="block";
  } else {
    document.getElementById("cutMethodBox").style.display="none";
  }

  calculatePrice();
}


function calculatePrice(){
  const pet = selectedPet;
  const weight = document.getElementById("weight").value;
  const hair = document.getElementById("hair").value;
  const service = document.getElementById("service").value;
  const method = document.getElementById("cutMethod")?.value;

  if(!pet || !weight || !hair || !service){
    return;
  }

  let price = "—";

  const p = prices[pet][hair][weight];

  if(service === "bath"){
    price = p.bath;
  }
  else if(service === "bathcut"){
    if(method==="clipper") price = p.bath + p.clip;
    if(method==="scissor") price = p.bath + p.sc;
  }
  else if(service === "cutonly"){
    price = p.clip + " – " + p.sc;
  }

  if(price !== "—"){
    document.getElementById("step5").style.display="block";
    document.getElementById("step6").style.display="block";
    document.getElementById("bookButton").style.display="block";
  }

  document.getElementById("result").innerText = price+" บาท";
}
