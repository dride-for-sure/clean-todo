/**
 * Delay function call
 * @param {Function} fct
 * @param {number} delay - ms
 */
export const setTimeoutFunction = (fct, delay) => {
	setTimeout(fct, delay);
};

/**
 * EventListener for multiple events on elements or document
 * @param {querySelectorAll} elements '' === document
 * @param {Array} eventNames
 * @param {Function} listener
 */

export const addEventListenerMulti = (elements, eventNames, listener) => {
	if (elements) {
		document.querySelectorAll(elements).forEach((el) => {
			eventNames.forEach((event) => {
				el.addEventListener(event, listener, false);
			});
		});
	} else {
		eventNames.forEach((event) => {
			document.addEventListener(event, listener, false);
		});
	}	
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
	if (elements) {
		base.querySelectorAll(elements).forEach((e) => {
			remove ? e.classList.remove(classes) : e.classList.add(classes);
		});
	} else {
		remove ? base.classList.remove(classes) : base.classList.add(classes);
	}
};

/**
 * Toggle editable class on CMD
 * @param {DOMElement} element
 * @param {String} classes - class
 */
export const toggleClass = (element, classes) => {
	element.classList.toggle(classes);
};

/**
 * Parse JSON Object
 * @param {JSON} j
 * @returns {Array}
 */
export const parse = (j) => {
	try {
		return JSON.parse(j);
	} catch {
		console.error('Parse: not a json object');
	}
};

/**
 * Convert to JSON Object
 * @param {Array} a
 * @returns {JSON}
 */
export const stringify = (a) => {
	try {
		return JSON.stringify(a);
	} catch {
		console.error('Stringify: didnt work out');
	}
};