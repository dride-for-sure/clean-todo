import { composeListDate } from '../../utils/dates';
import { getList } from '../../utils/lists';
import { filterNotos, sortNotosByDate } from '../../utils/notos';
import composeNoto from './noto';

/**
 * Return html for list with specific id
 * @param {Object} data
 * @param {String} id
 * @param {Boolean} complete
 * @returns {String}
 */
export default function composeListUser(data, id, complete) {
  const { notos } = getList(data, id);
  const filteredNotos = complete ? notos : filterNotos(notos, complete);
  const sort = sortNotosByDate(filteredNotos);

  let composed = '';
  sort.forEach((obj, i) => {
    if (i === 0) {
      composed += `<h2>Today</h2>${composeNoto(obj)}`;
    } else if (sort[i - 1].due !== sort[i].due) {
      const date = composeListDate(obj.due);
      composed += `<h2>${date}</h2>${composeNoto(obj)}`;
    } else {
      composed += `${composeNoto(obj)}`;
    }
  });
  return composed;
}
