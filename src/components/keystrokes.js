import * as helper from '../components/helper.js';
import * as cmd from '../components/cmd.js';
import * as data from '../components/data.js';
import * as ui from '../components/ui.js';

/**
 * Keystroke Logic
 * Click and keydown (ArrowKeys/Submit/Shift+N)
 * @param {Event} e // target === cmd > input
 */
export const manageKeys = (e) => {
	// Shortscuts on document
	if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
		moveFocus(e);
	} else if (e.shiftKey && e.code === 'KeyN') {
		// Prevent add to input
		e.preventDefault();
		newCMD(e);
	}

	// Shortcuts on cmd
	if (e.target.tagName === 'INPUT' && !e.altKey) {
		if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
			moveCursor(e);
		} else if (e.key === 'Enter') {
			submit(e);
		} else {
			helper.setTimeoutFunction(() => cmd.analyze(e.target), 20);
		}
	}
};

/**
 * Move cursor left or right
 * @param {Event} e - e.key === ArrowLeft || ArrowRight
 */
const moveCursor = (e) => {
	helper.setTimeoutFunction(() => cmd.analyze(e.target), 20);
};

/**
 * Move focus
 * @param {Event} e - ArrowUp || ArrowDown
 */
const moveFocus = (e) => {
	const activeCMD = helper.getActiveCMD();
	const cmds = document.querySelectorAll('.cmd');

	// Iterate over NodeList
	for (let i = 0; i < cmds.length; i++) {
		if (cmds[i] === activeCMD) {
			// Move up only when its not the last element
			if (e.key === 'ArrowUp' && i > 0) {
				setFocus(cmds[i - 1].children[0]);
			}
			// Move down only when its not the first element
			if (e.key === 'ArrowDown' && i + 1 < cmds.length) {
				setFocus(cmds[i + 1].children[0]);
			}
		}
	}
};

/**
 * Set Focus and move cursor to the end
 * @param {Node} n
 */
const setFocus = (n) => {
	n.focus();
	helper.setTimeoutFunction(() => {
		n.setSelectionRange(0, 0);
		cmd.analyze(n);
	}, 20);
};

/**
 * Submit if value, else delete
 * @param {Event} e - e.key === Enter
 */
const submit = (e) => {
	const activeCMD = helper.getActiveCMD();
	
	if (activeCMD) {
		// Input has value (Remove unwanted whitespace)
		if (activeCMD.children[0].value.trim() !== '') {
			data.updateLocalStorage(activeCMD);
			if (e.target.parentNode.classList.contains('cmd-primary')) {
				ui.refreshList();
				ui.clearPrimaryCMD();
			}
		} else {
			ui.deleteTask(activeCMD);
		}
	}
};

/**
 * New Task - Move focus to cmd-primary and set cursor
 * @param {Event} e - e.shiftKey === true && e.key === D
 */
const newCMD = (e) => {
	const activeCMD = helper.getActiveCMD();

	if (activeCMD) {
		// Check if there is something to submit
		if (activeCMD.children[0].value.trim() !== '') {
			// Update LocalStorage
			data.updateLocalStorage(activeCMD);
		} else {
			// Delete the empty task
			ui.deleteTask(activeCMD);
		}
	}

	// Get cmd-primary and move focus
	const cmd = document.querySelector('.cmd.cmd-primary');
	helper.setTimeoutFunction(() => cmd.children[0].focus(), 20);
};
