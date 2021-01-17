import composeListPredefined from './listPredefined';
import composeListUser from './listUser';

/**
 * Return html for list with specific id
 * @param {Object} data
 * @param {String} id
 * @param {Boolean} complete
 */
export default function composeList(data, id, complete) {
  let composed;
  if (Number.isInteger(id)) {
    // Predefined Lists
    composed = composeListPredefined(data, id, complete);
  } else {
    // User Lists
    composed = composeListUser(data, id, complete);
  }
  return `<div class="list">${composed}</div>`;
}
