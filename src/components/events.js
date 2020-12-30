import { CMD } from '../components/cmd.js';
import * as ui from '../components/ui.js';
import * as helper from '../components/helper.js';

export const eventListener = () => {
	// Initialize cmd class
	const cmd = new CMD();

	/**
	 * Toggle Editable
	 * on blur & focus
	 */
	helper.addEventListenerMulti('.cmd > input', ['blur', 'focus'], (e) => {
		helper.toggleClass(e.target.parentNode, 'editable');
	});

	/**
	 * Clear focus
	 * on blur
	 */
	helper.addEventListenerMulti('.cmd > input', ['blur'], (e) => {
		helper.modifyClassList(
			e.target.nextElementSibling,
			'.types.type-cursor, .types.type-selection',
			'focus',
			true
		);
	});

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
