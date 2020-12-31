import * as cmd from '../components/cmd.js';
import * as keys from '../components/keystrokes.js';
import * as helper from '../components/helper.js';

export const eventListener = () => {
	/**
	 * Input, Select & Click
	 * Analyze input
	 */
	helper.addEventListenerMulti(
		'.cmd > input',
		['input', 'select', 'click'],
		(e) => helper.setTimeoutFunction(cmd.analyze(e), 20)
	);

	/**
	 * Keystrokes
	 * ArrowKeys, Enter, Shift+N
	 */
	helper.addEventListenerMulti('.cmd > input', ['keydown'], (e) => {
		keys.manageKeystrokes(e);
	});
};
