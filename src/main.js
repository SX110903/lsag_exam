/**
 * Punto de entrada: conecta el modelo (`ExamSession`) con las vistas.
 */

import { ExamSession } from "./core/exam-session.js";
import { byId } from "./ui/dom.js";
import { createExamView } from "./ui/exam-view.js";
import { createResultView } from "./ui/result-view.js";
import { showScreen } from "./ui/screens.js";

/** @type {ExamSession|null} */
let session = null;

const examView = createExamView({
  onAnswer(optionIndex) {
    session.answerCurrent(optionIndex);
    examView.clearError();
    examView.render(session);
  },
  onNavigate(questionIndex) {
    session.goTo(questionIndex);
    examView.render(session);
  },
});

const resultView = createResultView();

const startForm = byId("start-form");
const candidateInput = byId("candidate-name");
const startError = byId("start-error");

function startExam(candidate) {
  session = ExamSession.start(candidate);
  examView.clearError();
  examView.render(session);
  showScreen("exam");
}

function finishExam() {
  const pending = session.firstUnansweredIndex();

  if (pending !== -1) {
    session.goTo(pending);
    examView.render(session);
    examView.showError(
      `Debes responder todas las preguntas antes de finalizar. Falta la pregunta ${pending + 1}.`,
    );
    return;
  }

  resultView.render(session.grade());
  showScreen("result");
}

function resetExam() {
  session = null;
  candidateInput.value = "";
  startError.textContent = "";
  showScreen("start");
  candidateInput.focus();
}

startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const candidate = candidateInput.value.trim();

  if (!candidate) {
    startError.textContent = "Ingresa tu nombre y apellidos para comenzar.";
    candidateInput.focus();
    return;
  }

  startError.textContent = "";
  startExam(candidate);
});

byId("btn-previous").addEventListener("click", () => {
  session.previous();
  examView.render(session);
});

byId("btn-next").addEventListener("click", () => {
  session.next();
  examView.render(session);
});

byId("btn-finish").addEventListener("click", finishExam);
byId("btn-restart").addEventListener("click", resetExam);

showScreen("start");
