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

	// Toggle Invisible Class if before & after selection/caret are empty
	toggleInvisibleClass(e, a, outputWithTags);

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

// TODO: REMOVE and check empty of input field
/**
 * Toggle invisible class on label when input is empty
 * @param {Event} e 
 * @param {Array} a 
 * @param {Array} outputWithTags 
 */
const toggleInvisibleClass = (e, a, outputWithTags) => {
	if (outputWithTags[0][0] === '' && a[1][0].type === 'cursor' && outputWithTags[2][0] === '') {
		helper.modifyClassList(
			e.target.parentNode.nextElementSibling,
			false,
			'invisible',
			true
		);
	} else {
		helper.modifyClassList(
			e.target.parentNode.nextElementSibling,
			false,
			'invisible',
			false
		);
	}
}