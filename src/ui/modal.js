/** Modal de confirmación previo a entregar el examen. */

import { byId } from "./dom.js";

/**
 * @param {() => void} onConfirm Se ejecuta al confirmar la entrega.
 */
export function createConfirmModal(onConfirm) {
  const overlay = byId("confirmModal");
  const message = byId("modalMsg");

  function hide() {
    overlay.classList.add("hidden");
  }

  byId("btnModalCancel").addEventListener("click", hide);
  byId("btnModalConfirm").addEventListener("click", () => {
    hide();
    onConfirm();
  });

  return {
    show(text) {
      message.textContent = text;
      overlay.classList.remove("hidden");
    },
    hide,
  };
}
