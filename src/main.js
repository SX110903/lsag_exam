/**
 * Punto de entrada: conecta el modelo (`ExamSession`) con las vistas.
 */

import { ExamSession } from "./core/exam-session.js";
import { getExams } from "./core/question-bank.js";
import { createCertificateView } from "./ui/certificate-view.js";
import { byId, clear, createElement } from "./ui/dom.js";
import { createExamView } from "./ui/exam-view.js";
import { createConfirmModal } from "./ui/modal.js";
import { createReviewView } from "./ui/review-view.js";
import { showExamChrome, showScreen } from "./ui/screens.js";
import { createTimer } from "./ui/timer.js";

/** @type {ExamSession|null} */
let session = null;

const candidateInput = byId("fullName");
const evaluatorInput = byId("evaluatorName");
const versionSelect = byId("versionSelect");
const startError = byId("startError");

const examView = createExamView({
  onAnswer(optionIndex) {
    session.answerCurrent(optionIndex);
    examView.render(session);
  },
  onNavigate(questionIndex) {
    session.goTo(questionIndex);
    examView.render(session);
  },
  onNext() {
    session.next();
    examView.render(session);
  },
  onSubmit: trySubmit,
});

const certificateView = createCertificateView();
const reviewView = createReviewView();
const confirmModal = createConfirmModal(finishExam);
const timer = createTimer(finishExam);

/** Carga las secciones disponibles en el desplegable de inicio. */
function fillVersionSelect() {
  clear(versionSelect);
  getExams().forEach((exam, index) => {
    versionSelect.append(createElement("option", { text: exam.title, attrs: { value: String(index) } }));
  });
}

function startExam() {
  const candidate = candidateInput.value.trim();
  if (!candidate) {
    startError.textContent = "Por favor, introduce tu nombre completo.";
    candidateInput.focus();
    return;
  }

  const evaluator = evaluatorInput.value.trim();
  if (!evaluator) {
    startError.textContent = "Por favor, introduce el nombre del evaluador.";
    evaluatorInput.focus();
    return;
  }

  startError.textContent = "";
  session = ExamSession.start(candidate, evaluator, Number(versionSelect.value));

  examView.setExamInfo(candidate, session.examTitle);
  examView.render(session);
  showScreen("exam");
  showExamChrome(true);
  timer.start();
}

/** Entrega directa si está todo respondido; si no, pide confirmación. */
function trySubmit() {
  const pending = session.unansweredCount;
  if (pending > 0) {
    confirmModal.show(
      `Tienes ${pending} pregunta(s) sin responder. Deseas enviar de todas formas?`,
    );
    return;
  }
  finishExam();
}

function finishExam() {
  if (!session) return;

  timer.stop();
  confirmModal.hide();

  const result = session.grade();
  certificateView.render(result);
  reviewView.render(result);

  showExamChrome(false);
  showScreen("results");
}

fillVersionSelect();

byId("btnStart").addEventListener("click", startExam);
byId("btnPrev").addEventListener("click", () => {
  session.previous();
  examView.render(session);
});
byId("btnReview").addEventListener("click", () => showScreen("review"));
byId("btnBackResults").addEventListener("click", () => showScreen("results"));
byId("btnBackResults2").addEventListener("click", () => showScreen("results"));
byId("btnRestart").addEventListener("click", () => location.reload());

// Permite precargar el nombre desde la URL, como en la versión anterior.
const fullNameParam = new URLSearchParams(window.location.search).get("fullName");
if (fullNameParam) {
  candidateInput.value = fullNameParam;
}

showScreen("start");
showExamChrome(false);
