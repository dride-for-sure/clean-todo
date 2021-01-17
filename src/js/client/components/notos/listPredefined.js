import { composeListDate, getDateToday } from '../../utils/dates';
import { filterNotos, getAllNotos, getNotosWithinRange, sortNotosByDate } from '../../utils/notos';
import composeNoto from './noto';

/**
 * Return html for predefined list with specific id
 * @param {Object} data
 * @param {Number} id
 * @param {Boolean} complete
 * @returns {String}
 */
export default function composeListPredefined(data, id, complete) {
  const notos = getAllNotos(data);
  let results;
  if (id === 1) {
    // Today
    const filtered = complete ? notos : filterNotos(notos, complete);
    results = getNotosWithinRange(filtered, getDateToday());
  } else if (id === 2) {
    // Priority
  } else if (id === 3) {
    // Within a week
  } else if (id === 4) {
    // Without due date
  } else if (id === 5) {
    // All Notos
  }

  const sort = sortNotosByDate(results);

  // all Tasks due
  // <h2>today<h2>noto1 noto2...
  // all Tasks not due
  // <h2>noto.due</h2> ...

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
