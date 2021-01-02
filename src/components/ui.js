import * as data from '../components/data.js';
import * as cmd from './cmd.js';

/** REFACTOR: Extract the HTML Part to item class with getter?
 * Init the view
 * Read LocalStorage and generate Output
 */
export const init = () => {
	// Get localStorageObject
	const localStorage = data.getLocalStorage();

	// ForEach Obj in localStorage
	// Create new DOM Element
	// Add Data Attributes and input value
	// Append as child to #container-tasks
	localStorage.forEach((obj) => {
		const task = document.createElement('DIV');
		task.classList.add(
			'row','justify-content-center', 'align-items-center', 'pt-2'
		);
		task.innerHTML = `
			<div class="col">
				<div class="position-relative">
					<div class="m-0 cmd cmd-secondary due">
						<input class="border-0" type="text" data-task-id="${obj.id}">
						<p></p>
					</div>
				</div>               
			</div>`;
		const input = task.querySelector('input');
		input.value = obj.desc;
		cmd.analyze(input);
		document.querySelector('#container-tasks').appendChild(task);

	});
};

/** TODO: PRIO REFACTOR: Extract the HTML Part to item class with getter?
 * Refresh the current view
 */
export const refresh = () => {

};

/**
 * Generate task HTML
 * @param {Node} n input
 * @param {Array} a [[{string_1,type_1}],[{selection/cursor}],[{string_n,type_n}]
 */
export const generateTaskHTML = (n, a) => {
	const arr = a.map((arr) => {
		return arr.map((obj) => {
			return insertHTMLTags(obj);
		});
	});

	const html = arr[0].join(' ') + arr[1].join(' ') + arr[2].join(' ');

	// Set innerHTML for p element
	n.nextElementSibling.innerHTML = html;
};

/** TODO: PRIO Refactor generateDataAttribues with cmd.matchTypes
 * Generate HTML Data Attributes
 * @param {Node} n
 * @param {Array} a [[{string_1,type_1}],[{selection/cursor}],[{string_n,type_n}]
 */
export const generateDataAttributes = (n, a) => {
	let tags = '';
	a.forEach((arr) => {
		arr.forEach((obj) => {
			if (obj.type === 'due') {
				n.setAttribute('data-task-due', obj.string);
			}
			if (obj.type === 'prio') {
				n.setAttribute('data-task-prio', true);
			}
			if (obj.type === 'assign') {
				n.setAttribute('data-task-assign', obj.string.substr(1));
			}
			if (obj.type === 'tag') {
				tags === '' ? tags = obj.string.substr(1) : tags += ', ' + obj.string.substr(1);
			}
		});
	});

	n.setAttribute('data-task-tags', tags);

};

/**
 * Generate HTML Types
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
