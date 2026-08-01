/** Pantalla de rendición: enunciado, alternativas y navegación. */

import { OPTION_LABELS } from "../core/config.js";
import { byId, clear, createElement } from "./dom.js";

/**
 * @param {{onAnswer:(optionIndex:number)=>void, onNavigate:(questionIndex:number)=>void, onSubmit:()=>void, onNext:()=>void}} handlers
 */
export function createExamView({ onAnswer, onNavigate, onSubmit, onNext }) {
  const elements = {
    examInfo: byId("examInfo"),
    progressFill: byId("progressFill"),
    qNumber: byId("qNumber"),
    qText: byId("qText"),
    options: byId("optionsContainer"),
    grid: byId("qGrid"),
    btnNext: byId("btnNext"),
  };

  function renderOptions(item) {
    clear(elements.options);

    item.options.forEach((option, optionIndex) => {
      const button = createElement("button", { className: "opt-btn", attrs: { type: "button" } }, [
        createElement("span", { className: "letter", text: OPTION_LABELS[optionIndex] }),
        createElement("span", { text: option.text }),
      ]);

      button.classList.toggle("selected", item.selectedIndex === optionIndex);
      button.addEventListener("click", () => onAnswer(optionIndex));
      elements.options.append(button);
    });
  }

  function renderGrid(session) {
    clear(elements.grid);

    session.items.forEach((item, index) => {
      const dot = createElement("button", {
        className: "q-dot",
        text: String(index + 1),
        attrs: { type: "button", "aria-label": `Ir a la pregunta ${index + 1}` },
      });

      dot.classList.toggle("answered", item.selectedIndex !== null);
      dot.classList.toggle("current", index === session.currentIndex);
      dot.addEventListener("click", () => onNavigate(index));
      elements.grid.append(dot);
    });
  }

  // En la última pregunta el botón pasa a ser el de entrega. Se asigna con
  // `onclick` para reemplazar el manejador anterior sin acumular listeners.
  function renderNextButton(session) {
    const button = elements.btnNext;

    if (session.isLast) {
      button.textContent = "Enviar Examen";
      button.className = "nav-btn btn-submit";
      button.onclick = onSubmit;
    } else {
      button.textContent = "Siguiente";
      button.className = "nav-btn btn-next";
      button.onclick = onNext;
    }
  }

  return {
    /** Texto de la barra superior: postulante y examen en curso. */
    setExamInfo(candidate, examTitle) {
      elements.examInfo.textContent = `${candidate} | ${examTitle}`;
    },

    /** Vuelca el estado de la rendición en pantalla. */
    render(session) {
      elements.qNumber.textContent = `Pregunta ${session.currentIndex + 1} de ${session.total}`;
      elements.qText.textContent = session.currentItem.text;
      elements.progressFill.style.width = `${((session.currentIndex + 1) / session.total) * 100}%`;

      renderOptions(session.currentItem);
      renderGrid(session);
      renderNextButton(session);
    },
  };
}
