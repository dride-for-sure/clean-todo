/**
 * @class Task
 *
 * A single task
 */
export default class Task {
  constructor(id, text, complete = false) {
    this.id = id;
    this.text = text;
    this.complete = complete;
  }
}
