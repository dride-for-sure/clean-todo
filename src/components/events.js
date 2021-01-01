import * as cmd from '../components/cmd.js';
import * as keys from '../components/keystrokes.js';
import * as helper from '../components/helper.js';

export const eventListener = () => {
	/**
	 * Keystrokes for CMD
	 * Input, select, click, keydown (ArrowLeft/ArrowRight)
	 */
	helper.addEventListenerMulti(
		'.cmd > input',
		['input', 'select', 'click', 'keydown'],
		(e) => keys.manageCMDKeys(e)
	);

	/**
	 * Keystrokes for document
	 * ArrowUp, ArrowDown, Shift+N
	 */
	helper.addEventListenerMulti(
		'document', 
		['keydown'], 
		(e) => keys.manageDocKeys(e)
	);
};
