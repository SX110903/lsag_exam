const EXAMS = Array.from({ length: 8 }, (_, idx) => {
  const version = idx + 1;
  return {
    id: version,
    topic: `Tema placeholder ${version}`,
    questions: [
      {
        q: `[V${version}] Pregunta placeholder 1 (A/B/C/D).`,
        options: [
          "Opción A (placeholder)",
          "Opción B (placeholder)",
          "Opción C (placeholder)",
          "Opción D (placeholder)",
        ],
        correctIndex: 0,
      },
      {
        q: `[V${version}] Pregunta placeholder 2 (A/B/C/D).`,
        options: [
          "Opción A (placeholder)",
          "Opción B (placeholder)",
          "Opción C (placeholder)",
          "Opción D (placeholder)",
        ],
        correctIndex: 1,
      },
      {
        q: `[V${version}] Pregunta placeholder 3 (A/B/C/D).`,
        options: [
          "Opción A (placeholder)",
          "Opción B (placeholder)",
          "Opción C (placeholder)",
          "Opción D (placeholder)",
        ],
        correctIndex: 2,
      },
      {
        q: `[V${version}] Pregunta placeholder 4 (A/B/C/D).`,
        options: [
          "Opción A (placeholder)",
          "Opción B (placeholder)",
          "Opción C (placeholder)",
          "Opción D (placeholder)",
        ],
        correctIndex: 3,
      },
      {
        q: `[V${version}] Pregunta placeholder 5 (A/B/C/D).`,
        options: [
          "Opción A (placeholder)",
          "Opción B (placeholder)",
          "Opción C (placeholder)",
          "Opción D (placeholder)",
        ],
        correctIndex: version % 4,
      },
    ],
  };
});

const state = {
  fullName: "",
  exam: null,
  currentIndex: 0,
  answers: [],
};

const screens = {
  start: document.getElementById("screen-start"),
  exam: document.getElementById("screen-exam"),
  result: document.getElementById("screen-result"),
};

const startForm = document.getElementById("start-form");
const fullNameInput = document.getElementById("fullName");
const nameError = document.getElementById("name-error");
const examError = document.getElementById("exam-error");

const examVersion = document.getElementById("exam-version");
const progress = document.getElementById("progress");
const questionText = document.getElementById("question-text");
const optionsForm = document.getElementById("options-form");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnFinish = document.getElementById("btn-finish");
const btnRestart = document.getElementById("btn-restart");

const resultCard = document.getElementById("result-card");
const resultName = document.getElementById("result-name");
const resultScore = document.getElementById("result-score");
const resultPercent = document.getElementById("result-percent");
const resultStatus = document.getElementById("result-status");

function showScreen(key) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[key].classList.add("active");
}

function pickRandomExam() {
  const randomIndex = Math.floor(Math.random() * EXAMS.length);
  return EXAMS[randomIndex];
}

function startExam(fullName) {
  state.fullName = fullName.trim();
  state.exam = pickRandomExam();
  state.currentIndex = 0;
  state.answers = Array(state.exam.questions.length).fill(null);

  examVersion.textContent = `V${state.exam.id}`;
  renderQuestion();
  showScreen("exam");
}

function renderQuestion() {
  const { questions } = state.exam;
  const currentQuestion = questions[state.currentIndex];

  progress.textContent = `${state.currentIndex + 1}/${questions.length}`;
  questionText.textContent = currentQuestion.q;

  optionsForm.innerHTML = "";
  currentQuestion.options.forEach((optionText, optionIndex) => {
    const optionId = `q${state.currentIndex}-o${optionIndex}`;
    const wrapper = document.createElement("label");
    wrapper.className = "option";
    wrapper.setAttribute("for", optionId);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${state.currentIndex}`;
    input.id = optionId;
    input.value = String(optionIndex);
    input.checked = state.answers[state.currentIndex] === optionIndex;
    input.addEventListener("change", () => {
      state.answers[state.currentIndex] = optionIndex;
      examError.textContent = "";
    });

    const text = document.createElement("span");
    text.textContent = `${String.fromCharCode(65 + optionIndex)}. ${optionText}`;

    wrapper.append(input, text);
    optionsForm.appendChild(wrapper);
  });

  btnPrev.disabled = state.currentIndex === 0;
  btnNext.disabled = state.currentIndex === questions.length - 1;
}

function finalizeExam() {
  const unanswered = state.answers.findIndex((answer) => answer === null);
  if (unanswered !== -1) {
    examError.textContent = `Debes responder todas las preguntas antes de finalizar. Falta la #${unanswered + 1}.`;
    state.currentIndex = unanswered;
    renderQuestion();
    return;
  }

  const total = state.exam.questions.length;
  const hits = state.answers.reduce((sum, answer, idx) => {
    return sum + (answer === state.exam.questions[idx].correctIndex ? 1 : 0);
  }, 0);
  const percent = Math.round((hits / total) * 100);
  const passed = percent >= 50;

  resultName.textContent = state.fullName;
  resultScore.textContent = `${hits}/${total}`;
  resultPercent.textContent = `${percent}%`;
  resultStatus.textContent = passed ? "✅ Aprobado" : "❌ No aprobado";

  resultCard.classList.toggle("pass", passed);
  resultCard.classList.toggle("fail", !passed);
  resultStatus.classList.toggle("pass", passed);
  resultStatus.classList.toggle("fail", !passed);

  showScreen("result");
}

startForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!fullNameInput.value.trim()) {
    nameError.textContent = "El nombre y apellidos es obligatorio.";
    fullNameInput.focus();
    return;
  }

  nameError.textContent = "";
  startExam(fullNameInput.value);
});

btnPrev.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});

btnNext.addEventListener("click", () => {
  if (state.currentIndex < state.exam.questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  }
});

btnFinish.addEventListener("click", finalizeExam);

btnRestart.addEventListener("click", () => {
  state.fullName = "";
  state.exam = null;
  state.currentIndex = 0;
  state.answers = [];
  fullNameInput.value = "";
  examError.textContent = "";
  showScreen("start");
});
