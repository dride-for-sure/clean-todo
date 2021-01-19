import { composeListDate, getDateToday } from '../../utils/dates';
import composeNoto from './noto';

/**
 * Compose a continuous list block
 * @param {Array} notos
 */
export default function listBlockDueFuture(notos) {
  const notosDueFuture = notos.filter(noto => noto.due > getDateToday());

  let composed = '';
  notosDueFuture.forEach((noto, i) => {
    if (i === 0) {
      composed += `<h2>${composeListDate(noto.due)}</h2>`;
    } else if (notosDueFuture[i].due !== notosDueFuture[i - 1].due) {
      composed += `<h2>${composeListDate(noto.due)}</h2>`;
    }
    composed += `${composeNoto(noto)}`;
  });

  return composed;
}
