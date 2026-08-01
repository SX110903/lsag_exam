/** Certificado de evaluación mostrado al finalizar el examen. */

import { byId } from "./dom.js";
import { formatElapsed } from "./timer.js";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

/** Fecha y hora de emisión, en el formato del certificado original. */
function formatIssueDate(date) {
  const hours12 = date.getHours() % 12 || 12;
  const meridiem = date.getHours() >= 12 ? "PM" : "AM";
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${date.getDate()} de ${MONTHS[date.getMonth()]} de ${date.getFullYear()} - ${hours12}:${minutes} ${meridiem}`;
}

export function createCertificateView() {
  const elements = {
    section: byId("certSection"),
    studentName: byId("certStudentName"),
    gradeBadge: byId("certGradeBadge"),
    correct: byId("cCorrect"),
    total: byId("cTotal"),
    time: byId("cTime"),
    evaluatorName: byId("certEvaluatorName"),
    date: byId("certDate"),
  };

  return {
    render(result) {
      elements.section.textContent = result.examTitle;
      elements.studentName.textContent = result.candidate;
      elements.evaluatorName.textContent = result.evaluator;

      elements.gradeBadge.textContent = result.passed
        ? `APROBADO - ${result.percent}%`
        : `SUSPENDIDO - ${result.percent}%`;
      elements.gradeBadge.className = `cert-grade ${result.passed ? "grade-pass" : "grade-fail"}`;

      elements.correct.textContent = String(result.correctCount);
      elements.total.textContent = String(result.total);
      elements.time.textContent = formatElapsed(result.elapsedSeconds);

      elements.date.textContent = formatIssueDate(new Date());
    },
  };
}
