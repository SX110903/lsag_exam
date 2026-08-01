/** Ayudantes mínimos para trabajar con el DOM. */

/** Busca un elemento por id y falla de inmediato si no existe. */
export function byId(id) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`No se encontró el elemento #${id} en el documento.`);
  }
  return element;
}

/**
 * Crea un elemento.
 * @param {string} tag
 * @param {{className?:string, text?:string, attrs?:Record<string,string>}} options
 * @param {Node[]} children
 */
export function createElement(tag, options = {}, children = []) {
  const element = document.createElement(tag);
  const { className, text, attrs } = options;

  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  if (attrs) {
    for (const [name, value] of Object.entries(attrs)) {
      element.setAttribute(name, value);
    }
  }
  element.append(...children);

  return element;
}

/** Vacía el contenido de un elemento. */
export function clear(element) {
  element.replaceChildren();
}
