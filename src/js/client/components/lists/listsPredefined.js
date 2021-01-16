import assets from '../../assets/assets';
import { endOfThisWeek, startOfThisWeek, todayEvening } from '../../utils/dates';
import { allNotos, notosIncomplete, notosWithinRange, notosWithMeta } from '../../utils/notos';
import listsDesc from './listsDesc';

/**
 * Returns the fixed-bottom predefined lists
 * @param {Object} data
 * @returns {String}
 */

export default function listsPredefined(data) {
  // Check settings for available predefined lists
  const lists = data.listsPredefined.filter(list => list.enabled === true);
  let output = '';

  lists.forEach(list => {
    let meta;
    const incomplete = notosIncomplete(allNotos(data));

    if (list.id === 1) {
      // Today
      const dues = notosWithinRange(incomplete, todayEvening());
      meta = listsDesc(dues);
    } else if (list.id === 2) {
      // Priority
      const allPriority = notosWithMeta(incomplete, { priority: true });
      const duePriority = notosWithinRange(allPriority, todayEvening());
      meta = listsDesc(duePriority, allPriority);
    } else if (list.id === 3) {
      // Within a week
      const allWeek = notosWithinRange(incomplete, endOfThisWeek(), startOfThisWeek());
      const dueWeek = notosWithinRange(allWeek, todayEvening(), startOfThisWeek());
      meta = listsDesc(dueWeek, allWeek);
    } else if (list.id === 4) {
      // Without due date
      const withoutDue = notosWithMeta(incomplete, { due: undefined });
      meta = listsDesc('', withoutDue);
    } else if (list.id === 5) {
      // All Notos
      const dues = notosWithinRange(incomplete, todayEvening());
      meta = listsDesc(dues, incomplete);
    }

    output += `
    <div class="list list-predefined">
      <div class="list-item">
        <div>
          <h3>${list.title}</h3>
          ${meta}
        </div>
        <img class="btn" src="${assets('arrowRight', true)}" />
      </div>
    </div>
    `;
  });

  return output;
}
