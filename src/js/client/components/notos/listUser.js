import { composeListDate, getDateToday, getDateYesterday } from '../../utils/dates';
import { getList } from '../../utils/lists';
import { filterNotos, getNotosWithinRange, getNotosWithMeta, sortNotosByDate } from '../../utils/notos';
import composeNoto from './noto';

/**
 * Return html for list with specific id
 * @param {Object} data
 * @param {String} listId
 * @param {Boolean} complete
 * @returns {String}
 */
export default function composeListUser(data, listId, complete) {
  const { notos } = getList(data, listId);
  const filteredNotos = complete ? notos : filterNotos(notos, complete);
  const dueUndefinedNotos = getNotosWithMeta(filteredNotos, { due: undefined });
  const dueUpToTodayNotos = sortNotosByDate(getNotosWithinRange(filteredNotos, getDateToday()));
  const dueAfterTodayNotos = sortNotosByDate(
    filteredNotos.filter(noto => {
      if (dueUndefinedNotos.find(el => el.id === noto.id)) {
        return false;
      }
      if (dueUpToTodayNotos.find(el => el.id === noto.id)) {
        return false;
      }
      return true;
    }),
  );

  let composed = '';
  dueUndefinedNotos.forEach((noto, i) => {
    if (i === 0) {
      composed += `<h2>Without due date</h2>${composeNoto(noto)}`;
    } else {
      composed += `${composeNoto(noto)}`;
    }
  });
  // Add if case for without complete:
  if (!complete) {
    dueUpToTodayNotos.forEach((noto, i) => {
      if (i === 0) {
        composed += `<h2>Today</h2>${composeNoto(noto)}`;
      } else {
        composed += `${composeNoto(noto)}`;
      }
    });
  } else if (complete) {
    // If complete notos are included
    const completeNotos = getNotosWithMeta(filteredNotos, { complete });
    // due up to yesterday
    const completeDueUpToYesterdayNotos = sortNotosByDate(
      getNotosWithinRange(completeNotos, getDateYesterday()),
    );

    completeDueUpToYesterdayNotos.forEach((noto, i) => {
      if (i === 0) {
        composed += `<h2>${composeListDate(noto.due)}</h2>`;
      } else if (
        completeDueUpToYesterdayNotos[i].due !== completeDueUpToYesterdayNotos[i - 1].due
      ) {
        composed += `<h2>${composeListDate(noto.due)}</h2>`;
      }
      composed += `${composeNoto(noto)}`;
    });

    // complete notos today + all incomplete up to today
    const todayNotos = dueUpToTodayNotos.filter(
      noto => !completeDueUpToYesterdayNotos.find(el => el.id === noto.id),
    );
    todayNotos.forEach((noto, i) => {
      if (i === 0) {
        composed += `<h2>Today</h2>${composeNoto(noto)}`;
      } else {
        composed += `${composeNoto(noto)}`;
      }
    });
  }

  dueAfterTodayNotos.forEach((noto, i) => {
    if (i === 0) {
      composed += `<h2>${composeListDate(noto.due)}</h2>`;
    } else if (dueAfterTodayNotos[i].due !== dueAfterTodayNotos[i - 1].due) {
      composed += `<h2>${composeListDate(noto.due)}</h2>`;
    }
    composed += `${composeNoto(noto)}`;
  });
  return composed;
}
