import * as keys from '../components/keystrokes.js';
import * as helper from '../components/helper.js';
import { init } from './ui.js';

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
			if (
				// When target equal to cmc > input
				e.target.parentNode.tagName === 'DIV' &&
				e.target.parentNode.classList.contains('cmd')
			)
				keys.manageCMDKeys(e);
			else {
				keys.manageDocKeys(e);
			}
		}
	);
};
