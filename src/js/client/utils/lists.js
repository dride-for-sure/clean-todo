/**
 * Return all lists as array
 * @param {Object} data
 * @returns {Array}
 */
export const allLists = data => data.listsUser;

/**
 * Return a list object
 * @param {Object} data
 * @param {String} id
 * @returns {Object}
 */
export const aList = (data, id) => {
  if (Number.isInteger(id)) {
    return data.listsPredefined.find(list => list.id === id);
  }
  return data.listsUser.find(list => list.id === id);
};
