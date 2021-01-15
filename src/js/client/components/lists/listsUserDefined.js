import getAsset from '../../assets/assets';

/**
 * Returns predefined User Lists
 * TODO: get listsUserDefined
 * @returns {string}
 */
export default function getListsUserDefined() {
  const listsUserDefined = [];
  let output = '';
  listsUserDefined.forEach(list => {
    const toggle = list.dues > 0 ? 'due' : 'noDue'; // <-- Add SCSS Classes
    const meta =
      list.dues > 0
        ? `${list.dues} of ${list.tasks.length} are due`
        : 'everything seems fine';
    output += `
      <div class="list">
        <h2>Your lists</h2>
        <div class="list-item">
          <img class="btn" src="${getAsset('drag', true)}" />
          <div>
            <h3>${list.name}</h3>
            <h4 class="${toggle}">${meta}</h4>
          </div>
          <img class="btn" src="${getAsset('arrowRight', true)}" />
        </div>
      </div>
    `;
  });
  return output;
}
