import * as data from '../components/data.js';
import * as cmd from './cmd.js';
import { Item } from './item.js';

/**
 * Refresh the current view
 * @param {Array} a - LocalStorageArray
 */
export const refresh = () => {
	// Get localStorageObject
	const localStorage = data.getLocalStorage();

	// Get all DOM ids
	let ids = [];
	document.querySelectorAll('[data-task-id').forEach(cmd => ids.push(cmd.getAttribute('data-task-id')));
	
	// If DOM doesnt contain an id from localStorage -> add
	localStorage.forEach(obj => {
		if (!ids.includes(obj.id)) {
			addToDOM(obj, false);
		}
	})
};

/**
 * Add task to DOM
 * @param {Object} o taskObj
 * @param {boolean} append false -> prepend
 */
const addToDOM = (o, append) => {
	const taskObj = new Item(
		o.id,
		o.desc,
		o.tags,
		o.due,
		o.assign,
		o.prio,
		o.status
	);
	const task = document.createElement('DIV');
	task.classList.add(...taskObj.containerClasses);
	task.innerHTML = taskObj.boilerplate;
	
	const input = task.querySelector('input');
	input.value = taskObj.desc;
	
	cmd.analyze(input); // Analyze before! prepend
	append 
		? document.querySelector('#container-tasks').append(task)
		: document.querySelector('#container-tasks').prepend(task);
}

/**
 * Generate single task HTML
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

/** TODO: PRIO REFACTOR: Refactor generateDataAttribues with cmd.matchTypes
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

/** FIXME: Focus lost. Is it better to leave the focus on primary? Alternative ALT+N
 * Clear the primary cmd
 */
export const clearPrimaryCMD = () => {
	const n = document.querySelector('.cmd-primary');
	n.children[0].value = '';
	n.children[0].blur();
	n.children[1].innerHTML = '';
}