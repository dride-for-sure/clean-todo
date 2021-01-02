import * as keys from '../components/keystrokes.js';
import * as helper from '../components/helper.js';
import * as ui from './ui.js';

export const eventListener = () => {
	/**
	 * Init the view
	 */
	window.addEventListener('load', () => ui.refresh());

	/** 
	 * Keystrokes
	 */
	helper.addEventListenerMulti(
		'',
		['input', 'click', 'keydown'],
		(e) => {
			keys.manageKeys(e);
		}
	);
};
