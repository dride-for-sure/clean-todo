/**
 * Return a list object
 * @param {Object} data
 * @param {String} id
 * @returns {Object}
 */
export default function getList(data, id) {
  return data.lists.find(list => list.id === id);
}
