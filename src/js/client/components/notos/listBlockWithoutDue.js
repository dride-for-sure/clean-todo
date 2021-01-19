import { getNotosWithMeta } from '../../utils/notos';
import composeNoto from './noto';

/**
 * Compose list block with notos without due
 * @param {Array} notos
 * @param {Boolean} header - with or without heading
 * @return {String}
 */
export default function listBlockWithoutDue(notos, header = true) {
  const dueUndefinedNotos = getNotosWithMeta(notos, { due: undefined });

  let composed = '';
  if (dueUndefinedNotos.length) {
    dueUndefinedNotos.forEach((noto, i) => {
      if (i === 0) {
        if (header) {
          composed += `<h2>Without due date</h2>`;
        }
        composed += composeNoto(noto);
      } else {
        composed += `${composeNoto(noto)}`;
      }
    });
  }

  return composed;
}
