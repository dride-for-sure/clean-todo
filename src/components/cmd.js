import * as ui from "../components/ui.js";

export class CMD {
	constructor() {}

	/**
	 * Analyze the cmd and generate HTML output
	 * @param {Event} e
	 */
	analyze(e) {
		const inputValue = this.extractInputString(e);
		const dividedBySelection = this.getSelection(e, inputValue);
		const output = dividedBySelection.map((obj) => {
			return this.matchTypes(obj);
		});
		ui.outputHTML(e, output);
	}

	/**
	 * Extract string from INPUT/DIV
	 * @param {Event} e
	 * @returns {string} string
	 */
	extractInputString(e) {
		return e.target.value;
	}

	/**
	 * Create Array [string, type]
	 * @param {Object} o {string}
	 * @returns {Array} [{string, type}]
	 */
	matchTypes(o) {
		if (o.type === "selection" || o.type === "cursor") {
			return [o];
		}

		const arr = o.string.split(" ");
		return arr.map((e) => {
			if (e.startsWith("#") && e.length > 1) {
				return { string: e, type: "tag" };
			} else if (e.startsWith("due:") && e.length > 4) {
				return { string: e, type: "due" };
			} else if (e.startsWith("@") && e.length > 1) {
				return { string: e, type: "assign" };
			} else if (e === "prio") {
				return { string: "prio", type: "prio" };
			} else {
				return { string: e, type: "string" };
			}
		});
	}

	/**
	 * Add Cursor to Array
	 * @param {Event} e
	 * @param {String} s [[string_1,type_1],...,[string_n,type_n]
	 * @returns {Array} [{string, selection},{string, selection},{string, selection}]
	 */
	getSelection(e, s) {
		const selectionStart = e.target.selectionStart;
		const selectionEnd = e.target.selectionEnd;

		let output = [];
		output.push({ string: s.substr(0, selectionStart) }); // before
		output.push({
			string: s.substr(selectionStart, selectionEnd - selectionStart),
		});
		output.push({ string: s.substr(selectionEnd) }); // after
		output[1].string === ""
			? (output[1].type = "cursor")
			: (output[1].type = "selection"); // selection or cursor

		return output;
	}

	/**
	 * Check if data-uuid is available, else create uuidv4
	 * @param {Event} e
	 * @returns {string} uuidv4
	 */
	uuidv4(e) {
		const uuid = e.target.getAttribute("data-uuid");
		if (typeof uuid === true) {
			return uuid;
		} else {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
				/[xy]/g,
				function (c) {
					var r = (Math.random() * 16) | 0,
						v = c == "x" ? r : (r & 0x3) | 0x8;
					return v.toString(16);
				}
			);
		}
	}
}
