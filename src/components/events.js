import { CMD } from '../components/cmd.js';
import * as ui from '../components/ui.js';
import * as helper from '../components/helper.js';

export const eventListener = () => {
	// Initialize cmd class
	const cmd = new CMD();

	/**
	 * Analyze input
	 * on input, select & click
	 */
	helper.addEventListenerMulti(
		'.cmd > input',
		['input', 'select', 'click'],
		(e) => helper.setTimeoutFunction(cmd.analyze(e), 20)
	);
};
