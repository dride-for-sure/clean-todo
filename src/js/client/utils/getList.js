/**
 * Return all lists as array
 * @param {Object} data
 * @returns {Array}
 */
export const getAllLists = data => data.lists;

/**
 * Return a list object
 * @param {Object} data
 * @param {String} id
 * @returns {Object}
 */
export const getList = (data, id) => data.lists.find(list => list.id === id);

export const getPredefinedLists = data => {
  console.log(data);
};
