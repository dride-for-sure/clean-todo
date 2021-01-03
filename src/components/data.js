import { Item } from "./item.js";
import * as helper from '../components/helper.js';

/**
 * # Datastructure
 * ## LocalStorage:
 * key: tasks
 * val: [{item_1},...,{item_n}] 
 * Details see '../components/item.js'
 * {id: {uuid}, desc: {string}, due: {null/date}, assign: {string}, prio: {boolean}, status: {boolean} (active/done)}
 * 
 * ## HTML Element Attributes:
 * id -> data-task-id
 * desc -> value
 * due -> data-task-due
 * assign -> data-task-assign
 * prio -> data-task-prio
 * status -> data-task-status
 */

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
 * Create a new task Object
 * @param {Node} n - activeCMD
 * @returns
 */
export const createTaskObject = (n) => {
    // Return new task obj
    return new Item(
		getUuidv4(n),
		getDesc(n), 
		getTags(n),
		getDue(n),
		getAssign(n),
		getPrio(n),
		getStatus(n)
	);
};

/**
 * Get the task description from HTML
 * @param {Node} n 
 * @returns {string} 
 */
const getDesc = (n) => {
    return n.children[0].value;
} ;

/**
 * Get the due date from HTML
 * @param {Node} n 
 * @returns {Date}
 */
const getDue = (n) => {
    return n.children[0].getAttribute('data-task-due') || null;
};

/**
 * Get the due date from HTML
 * @param {Node} n 
 * @returns {String}
 */
const getTags = (n) => {
    return n.children[0].getAttribute('data-task-tags') || '';
};

/**
 * Get the assign status from HTML
 * @param {Node} n 
 * @returns {boolean}
 */
const getAssign = (n) => {
    return n.children[0].getAttribute('data-task-assign') || null;

};

/**
 * Get the prio status from HTML
 * @param {Node} n 
 * @returns {boolean}
 */
const getPrio = (n) => {
    return n.children[0].getAttribute('data-task-prio') || false;

};

/**
 * Get the status from HTML
 * @param {Node} n 
 * @returns {boolean} active/done 
 */
const getStatus = (n) => {
    return n.children[0].getAttribute('data-task-status') || true;
};

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
 * Get the localStorage JSON Object
 * @returns {Array}
 */
export const getLocalStorage = () => {
	if (localStorageAvailable()) {
		return helper.parse(localStorage.getItem('tasks')) || [];
	}
};

/**
 * Set the localStorage JSON Object
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