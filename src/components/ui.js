import * as helper from '../components/helper.js';

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
		return `<span class="types type-${o.type} focus">${o.string}</span>`;
	} else if (o.type === 'cursor') {
		return `<span class="types type-${o.type} focus"> </span>`;
	} else {
		return `<span class="types type-${o.type}">${o.string}</span>`;
	}
};