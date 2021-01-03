import * as keys from '../components/keystrokes.js';
import * as helper from '../components/helper.js';
import * as ui from './ui.js';

export const eventListener = () => {
	/**
	 * Init the view
	 */
	window.addEventListener('load', () => ui.refreshList());

	/** 
	 * Keystrokes
	 */
	helper.addEventListenerMulti(
		'',
		['click', 'keydown'],
		(e) => {
			console.log(e);
			keys.manageKeys(e);
		}
	);
};
