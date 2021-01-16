import getAsset from '../../assets/assets';
import { todayEvening } from '../../utils/dates';
import { allLists } from '../../utils/lists';
import { notosIncomplete, notosWithinRange } from '../../utils/notos';
import listsDesc from './listsDesc';

/**
 * Returns predefined User Lists
 * @returns {string}
 */
export default function listsUser(data) {
  const listsUserDefined = allLists(data);
  let output = '';

  listsUserDefined.forEach(list => {
    const relevantNotos = notosIncomplete(list.notos);
    const dues = notosWithinRange(relevantNotos, todayEvening());
    const meta = listsDesc(dues, relevantNotos);

    output += `
        <div class="list-item">
          <div>
            <h3>${list.title}</h3>
            ${meta}
          </div>
          <img class="btn" src="${getAsset('arrowRight', true)}" />
        </div>
    `;
  });

  return `<div class="list"><h2>Your lists</h2>${output}</div>`;
}
