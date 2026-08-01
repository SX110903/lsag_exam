/** Control de las tres pantallas de la aplicación. */

import { byId } from "./dom.js";

const SCREENS = {
  start: "screen-start",
  exam: "screen-exam",
  result: "screen-result",
};

/** Muestra una pantalla y oculta las demás. */
export function showScreen(name) {
  for (const [key, id] of Object.entries(SCREENS)) {
    byId(id).classList.toggle("is-active", key === name);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
