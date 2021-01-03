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
		e.preventDefault();
		moveFocus(e);
	} else if (e.shiftKey && e.code === 'KeyN') {
		e.preventDefault();
		newCMD(e);
	} else if (e.key === 'Escape') {
		removeFocus(e.target);
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
 * Move focus up or down
 * @param {Event} e - ArrowUp || ArrowDown
 */
const moveFocus = (e) => {
	const activeCMD = helper.getActiveCMD();
	const cmds = document.querySelectorAll('.cmd');

	if (activeCMD) {
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
	} else {
		// KeyUp -> Move focus to last cmd
		if (e.key === 'ArrowUp') {
			setFocus(cmds[cmds.length - 1].children[0]);
		}

		// KeyDown -> Move focus to first cmd
		if (e.key === 'ArrowDown') {
			setFocus(cmds[0].children[0]);
		}
	}
};

/**
 * Set Focus and move cursor to the end
 * @param {Node} n
 */
const setFocus = (n) => {
	if (n) {
		n.focus();
		helper.setTimeoutFunction(() => {
			n.setSelectionRange(0, 0);
			cmd.analyze(n);
		}, 20);
	}
};

/**
 * Remove focus from active cmd
 * @param {Node} n 
 */
const removeFocus = (n) => {
	if (n) {
		n.blur();
		helper.setTimeoutFunction(() => cmd.analyze(n), 20);
	}
}

/**
 * Submit active cmd 
 * if active cmd has value -> update & refresh
 * else delete
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
				ui.clearCMD(activeCMD);
			}
		} else {
			ui.deleteTask(activeCMD);
		}
	}
};

/**
 * New cmd
 * Submit if value or delete -> set focus on primary cmd
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

	// Get cmd-primary and set focus
	const n = document.querySelector('.cmd.cmd-primary > input');
	setFocus(n);
};
