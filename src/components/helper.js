/**
 * Delay function call
 * @param {Function} callback
 * @param {number} delay - ms
 */
export const setTimeoutFunction = (callback, delay) => {
	setTimeout(callback, delay);
};

/**
 * EventListener for multiple events
 * @param {querySelectorAll} elements
 * @param {Array} eventNames
 * @param {Function} listener
 */

export const addEventListenerMulti = (elements, eventNames, listener) => {
	document.querySelectorAll(elements).forEach((el) => {
		eventNames.forEach((event) => {
			el.addEventListener(event, listener, false);
		});
	});
};

/**
 * Add/Remove from classList
 * in case of blur
 * @param {DOMElement} base,
 * @param {querySelectorAll} elements 'element'
 * @param {classList} classes 'this','that'
 * @param {boolean} remove - true: remove, false: add
 */
export const modifyClassList = (base, elements, classes, remove) => {
	base.querySelectorAll(elements).forEach((e) =>
		e.classList.remove(classes)
	);
};


/**
 * Toggle editable class on CMD
 * @param {DOMElement} element 
 * @param {String} classes - class
 */
export const toggleClass = (element, classes) => {
	element.classList.toggle(classes);
};