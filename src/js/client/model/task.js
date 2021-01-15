/**
 * @class Task
 *
 * A single task
 * @param {string} id - uuidv4
 * @param {string} text
 * @param {string} due - date
 * @param {boolean} complete
 */
export default class Task {
  constructor(id, text, due = undefined, complete = false) {
    this.id = id;
    this.text = text;
    this.due = due;
    this.complete = complete;
  }
}
