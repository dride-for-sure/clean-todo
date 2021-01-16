/**
 * Return all lists as array
 * @param {Object} data
 * @returns {Array}
 */
export const allLists = data => data.lists;

/**
 * Return a list object
 * @param {Object} data
 * @param {String} id
 * @returns {Object}
 */
export const aList = (data, id) => data.lists.find(list => list.id === id);
