import getAssets from '../../assets/assets';
import { getDateToday, getDateWeekEnd, getDateWeekStart } from '../../utils/dates';
import { filterNotos, getNotos, getNotosWithinRange, getNotosWithMeta } from '../../utils/notos';
import composeListsDescription from './listsDesc';

/**
 * Returns the fixed-bottom predefined lists
 * @param {Object} data
 * @returns {String}
 */

export default function composeListsPredefined(data) {
  const listsPredefined = data.listsPredefined.filter(list => list.enabled === true);
  const filteredNotos = filterNotos(getNotos(data, false));
  let composed = '';

  listsPredefined.forEach(listPredefined => {
    let composedMeta;

    if (listPredefined.id === 1) {
      // Today
      const dueNotos = getNotosWithinRange(filteredNotos, getDateToday());
      composedMeta = composeListsDescription([], dueNotos);
    } else if (listPredefined.id === 2) {
      // Priority
      const priorityNotos = getNotosWithMeta(filteredNotos, { priority: true });
      const duePriorityNotos = getNotosWithinRange(priorityNotos, getDateToday());
      composedMeta = composeListsDescription(priorityNotos, duePriorityNotos);
    } else if (listPredefined.id === 3) {
      // Within a week
      const weekNotos = getNotosWithinRange(filteredNotos, getDateWeekEnd(), getDateWeekStart());
      const dueWeekNotos = getNotosWithinRange(weekNotos, getDateToday(), getDateWeekStart());
      composedMeta = composeListsDescription(weekNotos, dueWeekNotos);
    } else if (listPredefined.id === 4) {
      // Without due date
      const withoutDueNotos = getNotosWithMeta(filteredNotos, { due: undefined });
      composedMeta = composeListsDescription(withoutDueNotos, []);
    } else if (listPredefined.id === 5) {
      // All Notos
      const dueNotos = getNotosWithinRange(filteredNotos, getDateToday());
      composedMeta = composeListsDescription(filteredNotos, dueNotos);
    }

    composed += `
    <div class="list list-predefined">
      <div class="list-item">
        <div>
          <h3>${listPredefined.title}</h3>
          ${composedMeta}
        </div>
        <img class="btn" src="${getAssets('arrowRight', true)}" />
      </div>
    </div>
    `;
  });

  return composed;
}
