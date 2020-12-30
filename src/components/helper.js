/**
 * Delay function call
 * @param {Function} callback
 * @param {number} delay - ms
 */
export const setTimeoutFunction = (callback, delay) => {
    setTimeout(callback, delay);
}

/**
 * EventListener for multiple events
 * @param {querySelectorAll} elements
 * @param {Array} eventNames 
 * @param {Function} listener 
 */

export const addEventListenerMulti = (elements, eventNames, listener) => {
    document.querySelectorAll(elements).forEach(el => {
        eventNames.forEach(event => {
            el.addEventListener(event, listener, false);
        })
    })
}