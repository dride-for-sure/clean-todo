/**
 * Generate HTML
 * @param {Event} e
 * @param {Array} a [[{string_1,type_1}],[{selection/cursor}],[{string_n,type_n}]
 */
export const outputHTML = (e, a) => {
	const outputWithTags = a.map((arr) => {
		return arr.map((obj) => {
			return insertHTMLTags(obj);
		});
	});

	const html =
		outputWithTags[0].join(' ') +
		outputWithTags[1].join(' ') +
		outputWithTags[2].join(' ');

	if (outputWithTags[0][0] === '' && outputWithTags[2][0] === '') {
		toggleEmptyClass(e, true);
	} else {
		toggleEmptyClass(e, false);
	}
	e.target.nextElementSibling.innerHTML = html;
};

/**
 * Insert HTML Elements
 * @param {Object} o {string_1, type_1}
 */
export const insertHTMLTags = (o) => {
	if (o.type === 'string') {
		return o.string;
	} else if (o.type === 'selection') {
		return `<div class="selection focus">${o.string}</div>`;
	} else if (o.type === 'cursor') {
		return '<div class="cursor focus"> </div>';
	} else {
		return `<div class="${o.type}">${o.string}</div>`;
	}
};

/**
 * Toggle editable class on CMD
 * @param {Event} e
 */
export const editable = (e) => {
	e.target.parentNode.classList.toggle('editable');
};

/**
 * Remove focus class on cursor/selection
 * in case of blur
 * @param {Event} e
 */
export const focus = (e) => {
	e.target.nextElementSibling
		.querySelectorAll('.cursor, .selection')
		.forEach((e) => e.classList.remove('focus'));
};

// TODO: See Readme.md
const toggleEmptyClass = (e, b) => {
	b
		? e.target.parentNode.nextElementSibling.classList.remove('visible')
		: e.target.parentNode.nextElementSibling.classList.add('visible');
};
