/**
 * Return all lists as array
 * @param {Object} data
 * @returns {Array}
 */
export const getAllLists = data => data.listsUser;

/**
 * Return a list object
 * @param {Object} data
 * @param {String/Number} id - predefinedLists number or userList String
 * @returns {Object}
 */
export const getList = (data, id) =>
  Number.isInteger(id)
    ? data.listsPredefined.find(list => list.id === id)
    : data.listsUser.find(list => list.id === id);
