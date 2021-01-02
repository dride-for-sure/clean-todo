import * as ui from '../components/ui.js';

/**
 * Analyze the cmd and generate HTML output
 * @param {Node} n input
 */
export const analyze = (n) => {
	const dividedBySelection = getSelection(n, n.value);
	const output = dividedBySelection.map((obj) => {
		return matchTypes(obj);
	});
	ui.generateTaskHTML(n, output);
	ui.generateDataAttributes(n, output);
};

/** TODO: Check for uniqueness of due and prio
 * Create Array [string, type]
 * @param {Object} o {string}
 * @returns {Array} [{string, type}]
 */
const matchTypes = (o) => {
	if (o.type === 'selection' || o.type === 'cursor') {
		return [o];
	}

	const arr = o.string.split(' ');
	return arr.map((e) => {
		if (e.startsWith('#') && e.length > 1) {
			return { string: e, type: 'tag' };
		} else if (e.startsWith('due:') && e.length > 4) {
			return { string: e, type: 'due' };
		} else if (e.startsWith('@') && e.length > 1) {
			return { string: e, type: 'assign' };
		} else if (e === 'prio') {
			return { string: 'prio', type: 'prio' };
		} else {
			return { string: e, type: 'string' };
		}
	});
};

/**
 * Add Cursor to Array
 * @param {Node} n input
 * @param {String} s [[string_1,type_1],...,[string_n,type_n]
 * @returns {Array} [{string, selection},{string, selection},{string, selection}]
 */
const getSelection = (n, s) => {
	const selectionStart = n.selectionStart;
	const selectionEnd = n.selectionEnd;

	let output = [];
	output.push({ string: s.substr(0, selectionStart) }); // before
	output.push({
		string: s.substr(selectionStart, selectionEnd - selectionStart),
	});
	output.push({ string: s.substr(selectionEnd) }); // after
	output[1].string === ''
		? (output[1].type = 'cursor')
		: (output[1].type = 'selection'); // selection or cursor

	return output;
};