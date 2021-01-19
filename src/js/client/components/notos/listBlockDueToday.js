import { composeListDate, getDateToday, getDateYesterday } from '../../utils/dates';
import { getNotosWithinRange, getNotosWithMeta, sortNotosByDate } from '../../utils/notos';
import composeNoto from './noto';

/**
 * Compose
 * @param {Array} notos
 * @param {Boolean} complete
 * @returns {String}
 */

export default function listBlockDueToday(notos, complete) {
  const dueUpToTodayNotos = sortNotosByDate(getNotosWithinRange(notos, getDateToday()));

  let composed = '';
  if (!complete) {
    // without complete
    dueUpToTodayNotos.forEach((noto, i) => {
      if (i === 0) {
        composed += `<h2>Today</h2>${composeNoto(noto)}`;
      } else {
        composed += `${composeNoto(noto)}`;
      }
    });
  } else if (complete) {
    // with complete
    const completeNotos = getNotosWithMeta(notos, { complete });
    // due up to yesterday
    const completeDueUpToYesterdayNotos = sortNotosByDate(
      getNotosWithinRange(completeNotos, getDateYesterday()),
    );

    // complete notos up to yesteray
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

    // complete notos for today + all incomplete up to today
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

  return composed;
}
