/** Pantalla de rendición: enunciado, alternativas y navegación. */

import { OPTION_LABELS } from "../core/config.js";
import { byId, clear, createElement } from "./dom.js";

/**
 * @param {{onAnswer:(optionIndex:number)=>void, onNavigate:(questionIndex:number)=>void}} handlers
 */
export function createExamView({ onAnswer, onNavigate }) {
  const elements = {
    examTitle: byId("exam-title"),
    progress: byId("exam-progress"),
    progressBar: byId("exam-progress-bar"),
    questionNumber: byId("question-number"),
    questionText: byId("question-text"),
    optionList: byId("option-list"),
    navigator: byId("question-navigator"),
    error: byId("exam-error"),
    buttonPrevious: byId("btn-previous"),
    buttonNext: byId("btn-next"),
  };

  function renderOptions(item) {
    clear(elements.optionList);

    item.options.forEach((option, optionIndex) => {
      const inputId = `option-${optionIndex}`;

      const input = createElement("input", {
        attrs: { type: "radio", name: "option", id: inputId, value: String(optionIndex) },
      });
      input.checked = item.selectedIndex === optionIndex;
      input.addEventListener("change", () => onAnswer(optionIndex));

      const label = createElement("label", { className: "option", attrs: { for: inputId } }, [
        input,
        createElement("span", { className: "option__label", text: OPTION_LABELS[optionIndex] }),
        createElement("span", { className: "option__text", text: option.text }),
      ]);

      elements.optionList.append(label);
    });
  }

  function renderNavigator(session) {
    clear(elements.navigator);

    session.items.forEach((item, index) => {
      const button = createElement("button", {
        className: "nav-chip",
        text: String(index + 1),
        attrs: { type: "button", "aria-label": `Ir a la pregunta ${index + 1}` },
      });

      button.classList.toggle("is-answered", item.selectedIndex !== null);
      button.classList.toggle("is-current", index === session.currentIndex);
      button.addEventListener("click", () => onNavigate(index));

      elements.navigator.append(button);
    });
  }

  return {
    /** Vuelca el estado de la rendición en pantalla. */
    render(session) {
      const { currentIndex, total, answeredCount } = session;

      elements.examTitle.textContent = session.examTitle;
      elements.progress.textContent = `Pregunta ${currentIndex + 1} de ${total} · ${answeredCount} respondidas`;
      elements.progressBar.style.width = `${(answeredCount / total) * 100}%`;

      elements.questionNumber.textContent = `Pregunta ${currentIndex + 1}`;
      elements.questionText.textContent = session.currentItem.text;

      renderOptions(session.currentItem);
      renderNavigator(session);

      elements.buttonPrevious.disabled = session.isFirst;
      elements.buttonNext.disabled = session.isLast;
    },

    showError(message) {
      elements.error.textContent = message;
    },

    clearError() {
      elements.error.textContent = "";
    },
  };
}
