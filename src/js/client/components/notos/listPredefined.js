import { getDateWithinAWeekEnd, getDateYesterday } from '../../utils/dates';
import { filterNotos, getNotos, getNotosWithinRange, getNotosWithMeta } from '../../utils/notos';
import listBlockDueFuture from './listBlockDueFuture';
import listBlockDueToday from './listBlockDueToday';
import listBlockWithoutDue from './listBlockWithoutDue';

/**
 * Compose predefined list with specific id
 * @param {Object} data
 * @param {Number} listId
 * @param {Boolean} complete
 * @returns {String}
 */
export default function composeListPredefined(data, listId, complete) {
  const notos = getNotos(data);
  const filteredNotos = complete ? notos : filterNotos(notos, complete);

  let composed = '';
  if (listId === 1) {
    // Today
    // Range end today
    composed += listBlockDueToday(filteredNotos, complete);
  } else if (listId === 2) {
    // Priority
    // filter notos for meta {priority: true}
    const priorityNotos = getNotosWithMeta(filteredNotos, { priority: true });
    composed += listBlockWithoutDue(priorityNotos);
    composed += listBlockDueToday(priorityNotos, complete);
    composed += listBlockDueFuture(priorityNotos);
  } else if (listId === 3) {
    // Within a week
    composed += listBlockDueToday(filteredNotos, complete);
    // Filter notos up to one week in future
    const withinAWeekNotos = getNotosWithinRange(
      filteredNotos,
      getDateWithinAWeekEnd(),
      getDateYesterday(),
    );
    composed += listBlockDueToday(withinAWeekNotos, complete);
    composed += listBlockDueFuture(withinAWeekNotos);
  } else if (listId === 4) {
    // Without due date
    composed += listBlockWithoutDue(filteredNotos, false);
  } else if (listId === 5) {
    // All Notos
    composed += listBlockWithoutDue(filteredNotos, true);
    composed += listBlockDueToday(filteredNotos, complete);
    composed += listBlockDueFuture(filteredNotos);
  }

  return composed;
}
