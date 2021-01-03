import * as helper from '../components/helper.js';
import * as cmd from '../components/cmd.js';
import * as data from '../components/data.js';
import * as ui from '../components/ui.js';

/**
 * Keystroke Logic for CMD
 * Input, select, click, keydown (ArrowLeft/ArrowRight)
 * @param {Event} e // target === cmd > input
 */
export const manageKeys = (e) => {
	if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
		moveFocus(e);
	} else if (e.altKey && e.code === 'KeyN') {
		newCMD(e);
	}

	if (e.target.tagName === 'INPUT') {
		if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
			moveCursor(e);
		} else if (e.key === 'Enter') {
			submit(e);
		} else {
			// Others keys, select or click
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

/** REVIEW:
 * Submit if value === '' on Enter
 * @param {Event} e - e.key === Enter
 */
const submit = (e) => {
	const activeCMD = helper.getActiveCMD();

	// Input has value (Remove unwanted whitespace)
	if (activeCMD.children[0].value.trim() !== '') {
		const updatedData = data.updateLocalStorage(activeCMD);
		if (e.target.parentNode.classList.contains('cmd-primary')) {
			ui.refresh();
			ui.clearPrimaryCMD();
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
			// Update the task
			const updatedData = data.updateLocalStorage(activeCMD);
		} else {
			// Delete the empty task
			data.deleteTask(activeCMD);
		}
	}

	// Get cmd-primary and move focus
	const cmd = document.querySelector('.cmd.cmd-primary');
	helper.setTimeoutFunction(() => cmd.children[0].focus(), 20);
};
