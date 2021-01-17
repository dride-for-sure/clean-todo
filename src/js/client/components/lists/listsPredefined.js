import getAssets from '../../assets/assets';
import { getDateToday, getDateWeekEnd, getDateWeekStart } from '../../utils/dates';
import { filterNotos, getAllNotos, getNotosWithinRange, getNotosWithMeta } from '../../utils/notos';
import composeListsDescription from './listsDesc';

/**
 * Returns the fixed-bottom predefined lists
 * @param {Object} data
 * @returns {String}
 */

export default function composeListsPredefined(data) {
  // Check settings for available predefined lists
  const listsPredefined = data.listsPredefined.filter(list => list.enabled === true);
  const filteredNotos = filterNotos(getAllNotos(data, false));
  let composed = '';

  listsPredefined.forEach(listPredefined => {
    let composedMeta;

    if (listPredefined.id === 1) {
      // Today
      const dueNotos = getNotosWithinRange(filteredNotos, getDateToday());
      composedMeta = composeListsDescription(dueNotos);
    } else if (listPredefined.id === 2) {
      // Priority
      const allPriority = getNotosWithMeta(filteredNotos, { priority: true });
      const duePriority = getNotosWithinRange(allPriority, getDateToday());
      composedMeta = composeListsDescription(duePriority, allPriority);
    } else if (listPredefined.id === 3) {
      // Within a week
      const allWeek = getNotosWithinRange(filteredNotos, getDateWeekEnd(), getDateWeekStart());
      const dueWeek = getNotosWithinRange(allWeek, getDateToday(), getDateWeekStart());
      composedMeta = composeListsDescription(dueWeek, allWeek);
    } else if (listPredefined.id === 4) {
      // Without due date
      const withoutDue = getNotosWithMeta(filteredNotos, { due: undefined });
      composedMeta = composeListsDescription('', withoutDue);
    } else if (listPredefined.id === 5) {
      // All Notos
      const dueNotos = getNotosWithinRange(filteredNotos, getDateToday());
      composedMeta = composeListsDescription(dueNotos, filteredNotos);
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
