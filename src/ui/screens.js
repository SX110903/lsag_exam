/** Control de las pantallas y de la barra superior (reloj y progreso). */

import { byId } from "./dom.js";

const SCREENS = {
  start: "startScreen",
  exam: "questionScreen",
  results: "resultsScreen",
  review: "reviewScreen",
};

/** Muestra una pantalla y oculta las demás. */
export function showScreen(name) {
  for (const [key, id] of Object.entries(SCREENS)) {
    byId(id).classList.toggle("hidden", key !== name);
  }
  window.scrollTo({ top: 0 });
}

/** Muestra u oculta el reloj y la barra de progreso. */
export function showExamChrome(visible) {
  byId("timerBar").classList.toggle("hidden", !visible);
  byId("progressWrap").classList.toggle("hidden", !visible);
}
