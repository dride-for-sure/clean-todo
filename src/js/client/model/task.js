/**
 * @class Task
 *
 * A single task
 * @param {String} id - uuidv4
 * @param {String} list - userList or undefined
 * @param {String} text
 * @param {String} due - date
 * @param {Array} tags
 * @param {Array} assign
 * @param {Boolean} complete
 */
export default class Task {
  constructor(
    id,
    list = undefined,
    title,
    noto = undefined,
    due = undefined,
    tags = [],
    assign = [],
    complete = false,
  ) {
    this.id = id;
    this.list = list;
    this.title = title;
    this.noto = noto;
    this.due = due;
    this.tags = tags;
    this.assign = assign;
    this.complete = complete;
  }
}
