/**
 * Normaliza y valida el banco de preguntas.
 *
 * El resto de la aplicación consume únicamente `getExams()`, que entrega las
 * preguntas ya con `correctIndex` numérico. Así `src/data/exams.js` puede
 * mantenerse legible (respuesta como letra) sin que la lógica dependa de ello.
 */

import { EXAMS } from "../data/exams.js";
import { OPTION_LABELS } from "./config.js";

function letterToIndex(letter) {
  const index = OPTION_LABELS.indexOf(String(letter).trim().toUpperCase());
  if (index === -1) {
    throw new Error(`Respuesta "${letter}" inválida: se esperaba ${OPTION_LABELS.join(", ")}.`);
  }
  return index;
}

function normalizeQuestion(question, examId, position) {
  const { text, options, answer } = question;
  const location = `examen ${examId}, pregunta ${position}`;

  if (!text) {
    throw new Error(`Enunciado vacío en ${location}.`);
  }
  if (!Array.isArray(options) || options.length !== OPTION_LABELS.length) {
    throw new Error(`Se esperaban ${OPTION_LABELS.length} alternativas en ${location}.`);
  }

  const correctIndex = letterToIndex(answer);

  return { text, options: [...options], correctIndex };
}

function normalizeExam(exam) {
  if (!Array.isArray(exam.questions) || exam.questions.length === 0) {
    throw new Error(`El examen ${exam.id} no tiene preguntas.`);
  }

  return {
    id: exam.id,
    title: exam.title,
    questions: exam.questions.map((question, index) =>
      normalizeQuestion(question, exam.id, index + 1),
    ),
  };
}

const NORMALIZED_EXAMS = EXAMS.map(normalizeExam);

/** Todos los exámenes disponibles, listos para usar. */
export function getExams() {
  return NORMALIZED_EXAMS;
}
