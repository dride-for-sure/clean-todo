import * as keys from '../components/keystrokes.js';
import * as helper from '../components/helper.js';
import { init, clearPrimaryCMD } from './ui.js';

export const eventListener = () => {
	/**
	 * Init the view
	 */
	window.addEventListener('load', () => init());

	/** 
	 * Keystrokes
	 * ArrowUp, ArrowDown, ALT+N
	 */
	helper.addEventListenerMulti(
		'',
		['input', 'select', 'click', 'keydown', 'focus'],
		(e) => {
			keys.manageKeys(e);
		}
	);
};
