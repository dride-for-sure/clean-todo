/**
 * Get Elements by class or id
 * @param {String} selector - class or id
 * @returns {NodeList}
 */
export const getElements = selector => document.querySelectorAll(selector);

/**
 * Create Element with/without class or id
 * @param {String} tag
 * @param {String} selectors - class
 * @returns {Node}
 */
export const createElement = (tag, selectors) => {
  const element = document.createElement(tag);
  if (selectors) {
    selectors.split(' ').forEach(selector => {
      element.classList.add(selector);
    });
  }
  return element;
};

/**
 * UUIDv4
 * @returns {string}
 */
export const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise, eqeqeq
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
