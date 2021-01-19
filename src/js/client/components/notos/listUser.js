import { getList } from '../../utils/lists';
import { filterNotos } from '../../utils/notos';
import listBlockDueFuture from './listBlockDueFuture';
import listBlockDueToday from './listBlockDueToday';
import listBlockWithoutDue from './listBlockWithoutDue';

/**
 * Compose list with specific id
 * @param {Object} data
 * @param {String} listId
 * @param {Boolean} complete
 * @returns {String}
 */
export default function composeListUser(data, listId, complete) {
  const { notos } = getList(data, listId);
  const filteredNotos = complete ? notos : filterNotos(notos, complete);
  let composed = '';

  composed += listBlockWithoutDue(filteredNotos, true);
  composed += listBlockDueToday(filteredNotos, complete);
  composed += listBlockDueFuture(filteredNotos);

  return composed;
}
