// ================== НАСТРОЙКИ ДОСТУПА ==================
const CORRECT_LOGIN = "chosenone";
const CORRECT_PASS  = "kabachok2026";

// ================== НАСТРОЙКИ ИГРЫ ==================
const MAX_ROUNDS = 100;
let round = Number(localStorage.getItem("round") || 0);

// 🥒 картинка обычного кабачка
const KABACHOK_IMG =
  "https://twemoji.maxcdn.com/v/latest/72x72/1f952.png";

// ================== 50 ПРЕДМЕТОВ ==================
const items = [
  { text: "банку кабачковой икры", img: "https://twemoji.maxcdn.com/v/latest/72x72/1fad9.png" },
  { text: "тапок Аллы", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f97e.png" },
  { text: "тухлый кабачок", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9eb.png" },
  { text: "повестку в армию", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4dc.png" },
  { text: "один носок", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9e6.png" },
  { text: "чек без возврата", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9fe.png" },
  { text: "ключ неизвестно от чего", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f511.png" },
  { text: "пустую коробку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4e6.png" },
  { text: "старый телефон", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4f1.png" },
  { text: "подозрительную флешку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4be.png" },

  { text: "порванный пакет", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9f3.png" },
  { text: "сломанный зонт", img: "https://twemoji.maxcdn.com/v/latest/72x72/2602.png" },
  { text: "карандаш без грифеля", img: "https://twemoji.maxcdn.com/v/latest/72x72/270f.png" },
  { text: "пустую кружку", img: "https://twemoji.maxcdn.com/v/latest/72x72/2615.png" },
  { text: "грязную тарелку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f37d.png" },
  { text: "пульт без батареек", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4fa.png" },
  { text: "чужую зарядку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f50c.png" },
  { text: "обрывок инструкции", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4c4.png" },
  { text: "старый будильник", img: "https://twemoji.maxcdn.com/v/latest/72x72/23f0.png" },
  { text: "одну перчатку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9e4.png" },

  { text: "пакет с пакетами", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f45c.png" },
  { text: "сломанные наушники", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f3a7.png" },
  { text: "пластиковую вилку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f374.png" },
  { text: "мятую салфетку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9fb.png" },
  { text: "чек трёхлетней давности", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9fe.png" },
  { text: "бесполезный купон", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f3f7.png" },
  { text: "сломанный USB-кабель", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f9ef.png" },
  { text: "старый пропуск", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4db.png" },
  { text: "пыльный брелок", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f511.png" },
  { text: "пустой кошелёк", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f45b.png" },

  { text: "ненужную бумажку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4c3.png" },
  { text: "странный болт", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f529.png" },
  { text: "крышку без банки", img: "https://twemoji.maxcdn.com/v/latest/72x72/1fad9.png" },
  { text: "пластиковую карту", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4b3.png" },
  { text: "старый CD-диск", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4bf.png" },
  { text: "непонятную кнопку", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f518.png" },
  { text: "потерянную мелочь", img: "https://twemoji.maxcdn.com/v/latest/72x72/1fa99.png" },
  { text: "чужой билет", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f3ab.png" },
  { text: "лист без текста", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4c4.png" },
  { text: "пакетик с воздухом", img: "https://twemoji.maxcdn.com/v/latest/72x72/1f4e6.png" }
];

// ================== ЛОГИКА ==================

function auth() {
  if (
    loginInput.value === CORRECT_LOGIN &&
    passInput.value === CORRECT_PASS
  ) {
    login.classList.add("hidden");
    game.classList.remove("hidden");
    buildField();
    updateUI();
  } else {
    error.innerText = "❌ Доступ отклонён. Кабачки против.";
  }
}

function buildField() {
  field.innerHTML = "";
  for (let i = 0; i < 30; i++) {
    const img = document.createElement("img");
    img.src = KABACHOK_IMG;
    img.className = "kabachok";
    img.onclick = pick;
    field.appendChild(img);
  }
}

function pick() {
  if (round >= MAX_ROUNDS) return;

  round++;
  localStorage.setItem("round", round);
  updateUI();

  if (round >= MAX_ROUNDS) {
    showModal(
      "❌ За 100 раундов ты не нашёл золотой кабачок.\nАлла не примет тебя в друзья.",
      KABACHOK_IMG
    );
    return;
  }

  const item = items[Math.floor(Math.random() * items.length)];
  showModal(
    "Ты не нашёл золотой кабачок,\nно ты нашёл " + item.text + ".",
    item.img
  );
}

function updateUI() {
  roundText.innerText = `Раунд: ${round} / ${MAX_ROUNDS}`;
}

function showModal(text, img) {
  modal.classList.remove("hidden");
  modalText.innerText = text;
  modalImg.src = img;
}

function closeModal() {
  modal.classList.add("hidden");
}
