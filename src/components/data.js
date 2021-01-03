import { Item } from "./item.js";
import * as helper from '../components/helper.js';

/**
 * Update existing or create a new task
 * @param {Node} n - activeCMD
 * @returns {Array} LocalStorageArray
 */
export const updateLocalStorage = (n) => {
    const data = getLocalStorage();
	const obj = createTaskObject(n);
    // Find possible index of exiting task
    const index = data.findIndex(el => el.id === obj.id);
    if (index !== -1) { // data includes id -> update task
        data[index] = obj;
    } else { // data doesnt include id -> create new task
		data.unshift(obj);
    }
	return setLocalStorage(data);
};

/** TODO:
 * Delete a task
 * @param {Node} n - activeCMD
 * @returns
 */
export const deleteTask = (n) => {};


/**
 * Create a new task object
 * @param {Node} n - activeCMD
 * @returns {Object} - task object
 */
export const createTaskObject = (n) => {
    // Return new task obj
    return new Item(
		getDataAttributes(n, 'id'),
		getDataAttributes(n, 'desc'),
		getDataAttributes(n, 'tags'),
		getDataAttributes(n, 'due'),
		getDataAttributes(n, 'assign'),
		getDataAttributes(n, 'prio'),
		getDataAttributes(n, 'status')
	);
};


/**
 * Get Data Attributes from HTML
 * @param {Node} n - activeCMD
 * @param {String} s - attributes
 */
const getDataAttributes = (n, s) => {
	if (s === 'desc') {
		return n.children[0].value;
	} else if (s === 'id') {
		return getUuidv4(n);
	} else {
		return n.children[0].getAttribute(`data-task-${s}`);
	}
}

/**
 * Check if data-uuid is available, else create uuidv4
 * @param {Node} n
 * @returns {string} uuidv4
 */
const getUuidv4 = (n) => {
	const uuid = n.children[0].getAttribute('data-task-id');
	if (uuid) {
		return uuid;
	} else {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
			/[xy]/g,
			function (c) {
				var r = (Math.random() * 16) | 0,
					v = c == 'x' ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			}
		);
	}
};

/**
 * Get localStorage object
 * @returns {Array}
 */
export const getLocalStorage = () => {
	if (localStorageAvailable()) {
		return helper.parse(localStorage.getItem('tasks')) || [];
	}
};

/**
 * Set localStorage object
 * @param {Array}
 * @returns {Array}
 */
const setLocalStorage = (arr) => {
	localStorage.setItem('tasks', helper.stringify(arr));
	return helper.parse(localStorage.getItem('tasks'));
};


/**
 * Check if localStorage is avaiable
 * @return {true}
 */
const localStorageAvailable = () => {
	try {
		const x = '__storage_test___';
		localStorage.setItem(x, x);
		localStorage.removeItem(x);
		return true;
	} catch {
		console.error('localStorageAvailable: false');
	}
};