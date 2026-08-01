/** Parámetros de la evaluación. Cambiar aquí afecta a toda la aplicación. */

/** Duración del examen, en minutos. Al agotarse se entrega automáticamente. */
export const EXAM_DURATION_MINUTES = 20;

/** Porcentaje mínimo de aciertos para aprobar. */
export const PASSING_PERCENT = 70;

/** Barajar el orden de las preguntas dentro del examen elegido. */
export const SHUFFLE_QUESTIONS = true;

/** Barajar el orden de las alternativas de cada pregunta. */
export const SHUFFLE_OPTIONS = true;

/** Letras usadas para rotular las alternativas en pantalla. */
export const OPTION_LABELS = ["A", "B", "C", "D"];

/** Segundos restantes a partir de los cuales el reloj cambia de color. */
export const TIMER_WARN_SECONDS = 300;
export const TIMER_DANGER_SECONDS = 60;
