import getAssets from '../../assets/assets';
import { getDateToday } from '../../utils/dates';
import { getAllLists } from '../../utils/lists';
import { filterNotos, getNotosWithinRange } from '../../utils/notos';
import composeListsDescription from './listsDesc';

/**
 * Returns predefined User Lists
 * @returns {string}
 */
export default function composeListsUser(data) {
  const listsUserDefined = getAllLists(data);
  let compsed = '';

  listsUserDefined.forEach(list => {
    const filteredNotos = filterNotos(list.notos, false);
    const dueNotos = getNotosWithinRange(filteredNotos, getDateToday());
    const composedMeta = composeListsDescription(filteredNotos, dueNotos);

    compsed += `
        <div class="list-item">
          <div>
            <h3>${list.title}</h3>
            ${composedMeta}
          </div>
          <img class="btn" src="${getAssets('arrowRight', true)}" />
        </div>
    `;
  });

  return `<div class="list"><h2>Your lists</h2>${compsed}</div>`;
}
