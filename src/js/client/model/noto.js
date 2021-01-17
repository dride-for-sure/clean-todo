/**
 * @class Noto
 *
 * A single noto
 * @param {String} id - uuidv4
 * @param {String} list - userList or undefined
 * @param {String} title
 * @param {String} noto
 * @param {Number} due - timestamp
 * @param {String} priority
 * @param {Array} tags
 * @param {Array} assigns
 * @param {Boolean} complete
 */
export default class Noto {
  constructor(id, list, title, noto, due, priority, tags, assigns, complete) {
    this.id = id;
    this.list = list || undefined;
    this.title = title;
    this.noto = noto || undefined;
    this.due = due || undefined;
    this.priority = priority || false;
    this.tags = Array.isArray(tags) ? tags : []; // Check explicit if array
    this.assigns = Array.isArray(assigns) ? assigns : []; // Check explicit if array
    this.complete = complete || false;
  }
}
