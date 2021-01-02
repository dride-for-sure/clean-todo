import * as helper from '../components/helper.js';
import * as cmd from '../components/cmd.js';
import * as data from '../components/data.js';
import * as ui from '../components/ui.js';

/**
 * Keystroke Logic for Document
 * ArrowUp, ArrowDown, ALT+N
 * @param {Event} e // target === document node
 */
export const manageDocKeys = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
		moveFocusUpDown(e);
	} else if (e.altKey && e.code === 'KeyN') {
		newCMD(e);
	}
}

/**
 * Keystroke Logic for CMD
 * Input, select, click, keydown (ArrowLeft/ArrowRight)
 * @param {Event} e // target === cmd > input
 */
export const manageCMDKeys = (e) => {
	if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
		moveCursor(e);
	} else if (e.key === 'Enter') {
		submit(e);
	} else { // Others keys, select or click
        helper.setTimeoutFunction(() => cmd.analyze(e.target), 20);
    }
};

/**
 * Move cursor left or right
 * @param {Event} e - e.key === ArrowLeft || ArrowRight
 */
const moveCursor = (e) => {
	helper.setTimeoutFunction(cmd.analyze(e.target), 20);
};

/**
 * Move focus
 * @param {Event} e - ArrowUp || ArrowDown
 */
const moveFocusUpDown = (e) => {
	const activeCMD = helper.getActiveCMD();
    const cmds = document.querySelectorAll('.cmd');
    
	// Iterate over NodeList
	for (let i = 0; i < cmds.length; i++) {
		if (cmds[i] === activeCMD) {
			// Move up only when its not the last element
			if (e.key === 'ArrowUp' && i > 0) {
				cmds[i - 1].children[0].focus();
			}
			// Move down only when its not the first element
			if (e.key === 'ArrowDown' && i + 1 < cmds.length) {
				cmds[i + 1].children[0].focus();
			}
		}
	}
};

/**
 * Submit if value === '' on Enter
 * @param {Event} e - e.key === Enter
 */
const submit = (e) => {
    const activeCMD = helper.getActiveCMD();

    // Input has value (Remove unwanted whitespace)
    if (activeCMD.children[0].value.trim() !== '') {
		data.updateTask(activeCMD);
		ui.refresh();
    }
};

/** REVIEW:
 * New Task - Move focus to cmd-primary and set cursor
 * @param {Event} e - e.shiftKey === true && e.key === D
 */
const newCMD = (e) => {
    const activeCMD = helper.getActiveCMD();
    
    // Check if there is something to submit
    if (activeCMD.children[0].value.trim() !== '') {
        data.updateTask(activeCMD); // Update the task

    } else if (activeCMD.children[0].value.trim() === '') {
        data.deleteTask(activeCMD); // Delete the empty task
    }

    // Get cmd-primary and move focus
    const cmd = document.querySelector('.cmd.cmd-primary');
    helper.setTimeoutFunction(() => cmd.children[0].focus(), 20);
};