import composeListPredefined from './listPredefined';
import composeListUser from './listUser';

/**
 * Return html for list with specific id
 * @param {Object} data
 * @param {String} listId
 * @param {Boolean} complete
 */
export default function composeList(data, listId, complete) {
  let composed;
  if (Number.isInteger(listId)) {
    // Predefined Lists
    composed = composeListPredefined(data, listId, complete);
  } else {
    // User Lists
    composed = composeListUser(data, listId, complete);
  }
  return `<div class="list">${composed}</div>`;
}
