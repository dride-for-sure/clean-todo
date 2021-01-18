import { composeListDate, getDateToday } from '../../utils/dates';
import { filterNotos, getNotos, getNotosWithinRange, sortNotosByDate } from '../../utils/notos';
import composeNoto from './noto';

/**
 * Return html for predefined list with specific id
 * @param {Object} data
 * @param {Number} listId
 * @param {Boolean} complete
 * @returns {String}
 */
export default function composeListPredefined(data, listId, complete) {
  const notos = getNotos(data);
  let results;
  if (listId === 1) {
    // Today
    // filter Notos for complete?
    // Range end today
    const filteredNotos = complete ? notos : filterNotos(notos, complete);
    results = getNotosWithinRange(filteredNotos, getDateToday());
  } else if (listId === 2) {
    // Priority
    // filter notos for complete?
    // filter notos for meta {priority: true}
  } else if (listId === 3) {
    // Within a week
    // filter notos for complete?
    //
  } else if (listId === 4) {
    // Without due date
  } else if (listId === 5) {
    // All Notos
  }

  const sort = sortNotosByDate(results);

  console.log(sort);
  let composed = '';
  sort.forEach((obj, i) => {
    if (i === 0) {
      // if obj.due = today -> 'today' else listDate(obj.due)
      const date = composeListDate(obj.due);
      composed += `<h2>${date}</h2>${composeNoto(obj)}`;
    } else if (sort[i - 1].due !== sort[i].due) {
      const date = composeListDate(obj.due);
      composed += `<h2>${date}</h2>${composeNoto(obj)}`;
    } else {
      composed += `${composeNoto(obj)}`;
    }
  });
  return composed;
}
