/**
 * Modelo de una rendición de examen.
 *
 * Concentra toda la lógica de negocio (asignación del examen, navegación,
 * registro de respuestas y calificación). No conoce el DOM.
 */

import { PASSING_PERCENT, SHUFFLE_OPTIONS, SHUFFLE_QUESTIONS } from "./config.js";
import { getExams } from "./question-bank.js";
import { pickRandom, shuffle } from "./random.js";

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
   * @param {{id:number,title:string,questions:Array}} exam Examen asignado.
   */
  constructor(candidate, exam) {
    this.candidate = candidate;
    this.examId = exam.id;
    this.examTitle = exam.title;

    const questions = SHUFFLE_QUESTIONS ? shuffle(exam.questions) : exam.questions;
    this.items = questions.map(buildItem);
    this.currentIndex = 0;
  }

  /** Crea una rendición con un examen elegido al azar entre los disponibles. */
  static start(candidate) {
    return new ExamSession(candidate, pickRandom(getExams()));
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

  /** Cantidad de preguntas ya respondidas. */
  get answeredCount() {
    return this.items.filter((item) => item.selectedIndex !== null).length;
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

  /** Índice de la primera pregunta sin responder, o `-1` si están todas. */
  firstUnansweredIndex() {
    return this.items.findIndex((item) => item.selectedIndex === null);
  }

  /** Corrige la rendición y devuelve el resultado con el detalle por pregunta. */
  grade() {
    const review = this.items.map((item, index) => {
      const correctIndex = item.options.findIndex((option) => option.isCorrect);
      return {
        number: index + 1,
        text: item.text,
        options: item.options,
        selectedIndex: item.selectedIndex,
        correctIndex,
        isCorrect: item.selectedIndex === correctIndex,
      };
    });

    const correctCount = review.filter((entry) => entry.isCorrect).length;
    const percent = Math.round((correctCount / this.total) * 100);

    return {
      candidate: this.candidate,
      examTitle: this.examTitle,
      correctCount,
      total: this.total,
      percent,
      passed: percent >= PASSING_PERCENT,
      review,
    };
  }
}
