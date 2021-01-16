import listPredefined from './listPredefined';
import listUser from './listUser';

/**
 * Return html for list with specific id
 * @param {Object} data
 * @param {String} id
 * @param {Boolean} complete
 */
export default function list(data, id, complete) {
  let output;
  if (Number.isInteger(id)) {
    // Predefined Lists
    output = listPredefined(data, id, complete);
  } else {
    // User Lists
    output = listUser(data, id, complete);
  }
  return `<div class="list">${output}</div>`;
}
