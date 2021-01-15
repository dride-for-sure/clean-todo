/**
 * @class Task
 *
 * A single task
 * @param {String} id - uuidv4
 * @param {String} list - userList or undefined
 * @param {String} text
 * @param {String} due - date
 * @param {Array} tags
 * @param {Array} assigns
 * @param {Boolean} complete
 */
export default class Task {
  constructor(id, list, title, noto, due, tags, assigns, complete) {
    this.id = id;
    this.list = list || undefined;
    this.title = title;
    this.noto = noto || undefined;
    this.due = due || undefined;
    this.tags = Array.isArray(tags) ? tags : []; // Check explicit if array
    this.assigns = Array.isArray(assigns) ? assigns : []; // Check explicit if array
    this.complete = complete || false;
  }
}
