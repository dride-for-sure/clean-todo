import getAsset from '../../assets/assets';
import getDues from '../../utils/getDues';
import { getAllLists } from '../../utils/getList';

/**
 * Returns predefined User Lists
 * TODO: get listsUserDefined
 * @returns {string}
 */
export default function getListsUserDefined(data) {
  const listsUserDefined = getAllLists(data);

  let output = `<div class="list"><h2>Your lists</h2>`;

  listsUserDefined.forEach(list => {
    const count = list.notos.length;
    const dues = getDues(list.notos);
    const toggle = dues.length ? 'due' : '';
    const plural = dues.length > 1 ? 'are' : 'is';
    const meta = dues.length
      ? `${dues.length} of ${count} ${plural} due`
      : 'everything seems fine';

    output += `
        <div class="list-item">
          <div>
            <h3>${list.title}</h3>
            <h4 class="${toggle}">${meta}</h4>
          </div>
          <img class="btn" src="${getAsset('arrowRight', true)}" />
        </div>
    `;
  });

  output += `</div>`;

  return output;
}
