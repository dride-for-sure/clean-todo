import { aList } from '../../utils/lists';

/**
 * Return html for list with specific id
 * @param {Object} data
 * @param {String} id
 * @param {Boolean} complete
 * @returns {String}
 */
export default function listUser(data, id, complete) {
  // All complete? notos within list with id
  const list = aList(data, id);
  console.log(list);
}
