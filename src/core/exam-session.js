/**
 * Modelo de una rendición de examen.
 *
 * Concentra toda la lógica de negocio (armado del examen, navegación, registro
 * de respuestas, tiempo empleado y calificación). No conoce el DOM.
 */

import { PASSING_PERCENT, SHUFFLE_OPTIONS, SHUFFLE_QUESTIONS } from "./config.js";
import { getExams } from "./question-bank.js";
import { shuffle } from "./random.js";

/**
 * Convierte una pregunta del banco en un ítem de la rendición.
 *
 * Las alternativas se barajan y cada una conserva su marca `isCorrect`, de modo
 * que la corrección no depende de la posición original (la clave del documento
 * es casi siempre la letra B: sin barajar, el examen sería adivinable).
 */
function buildItem(question) {
  const options = question.options.map((text, index) => ({
    text,
    isCorrect: index === question.correctIndex,
  }));

  return {
    text: question.text,
    options: SHUFFLE_OPTIONS ? shuffle(options) : options,
    selectedIndex: null,
  };
}

export class ExamSession {
  /**
   * @param {string} candidate Nombre del postulante.
   * @param {string} evaluator Nombre del evaluador que toma el examen.
   * @param {{id:number,title:string,questions:Array}} exam Examen elegido.
   */
  constructor(candidate, evaluator, exam) {
    this.candidate = candidate;
    this.evaluator = evaluator;
    this.examId = exam.id;
    this.examTitle = exam.title;

    const questions = SHUFFLE_QUESTIONS ? shuffle(exam.questions) : exam.questions;
    this.items = questions.map(buildItem);
    this.currentIndex = 0;
    this.startedAt = Date.now();
  }

  /** Crea una rendición sobre el examen indicado por su posición en el banco. */
  static start(candidate, evaluator, examIndex) {
    const exams = getExams();
    const exam = exams[examIndex] ?? exams[0];
    return new ExamSession(candidate, evaluator, exam);
  }

  get total() {
    return this.items.length;
  }

  get currentItem() {
    return this.items[this.currentIndex];
  }

  get isFirst() {
    return this.currentIndex === 0;
  }

  get isLast() {
    return this.currentIndex === this.total - 1;
  }

  /** Cantidad de preguntas sin responder. */
  get unansweredCount() {
    return this.items.filter((item) => item.selectedIndex === null).length;
  }

  /** Segundos transcurridos desde el inicio de la rendición. */
  get elapsedSeconds() {
    return Math.floor((Date.now() - this.startedAt) / 1000);
  }

  goTo(index) {
    if (index >= 0 && index < this.total) {
      this.currentIndex = index;
    }
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  previous() {
    this.goTo(this.currentIndex - 1);
  }

  /** Registra la alternativa elegida para la pregunta actual. */
  answerCurrent(optionIndex) {
    this.currentItem.selectedIndex = optionIndex;
  }

  /**
   * Corrige la rendición y devuelve el resultado con el detalle por pregunta.
   * Las preguntas sin responder cuentan como incorrectas.
   */
  grade() {
    const review = this.items.map((item, index) => {
      const correctIndex = item.options.findIndex((option) => option.isCorrect);
      return {
        number: index + 1,
        text: item.text,
        options: item.options,
        selectedIndex: item.selectedIndex,
        correctIndex,
        isAnswered: item.selectedIndex !== null,
        isCorrect: item.selectedIndex === correctIndex,
      };
    });

    const correctCount = review.filter((entry) => entry.isCorrect).length;
    const unansweredCount = review.filter((entry) => !entry.isAnswered).length;
    const percent = Math.round((correctCount / this.total) * 100);

    return {
      candidate: this.candidate,
      evaluator: this.evaluator,
      examTitle: this.examTitle,
      correctCount,
      wrongCount: this.total - correctCount - unansweredCount,
      unansweredCount,
      total: this.total,
      percent,
      passed: percent >= PASSING_PERCENT,
      elapsedSeconds: this.elapsedSeconds,
      review,
    };
  }
}
