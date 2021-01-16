import assets from '../../assets/assets';
import { aList } from '../../utils/lists';
import { aNoto } from '../../utils/notos';

/**
 * Returns the header
 * @param {String} view - header for which view [lists, notos, editor, settings]
 * @returns {String}
 */
export default function header(data, view, id = 1) {
  let btnLeft;
  let btnRight;
  let h1;

  if (view === 'lists') {
    btnLeft = assets('logo', true);
    btnRight = assets('settingsGlobal', true);
    h1 = 'Make it so';
  } else if (view === 'notos') {
    btnLeft = assets('arrowLeft', false);
    btnRight = assets('settingsLocal', false);
    h1 = aList(data, id).title;
  } else if (view === 'editor') {
    btnLeft = assets('arrowLeft', false);
    h1 = aNoto(data, id).title;
  } else if (view === 'settings') {
    btnLeft = assets('arrowDown', false);
    h1 = 'Settings';
  }

  let output = `
    <div class="header">
      <img class="btn" src="${btnLeft}" />
      <h1>${h1}</h1>
  `;
  output += btnRight ? `<img class="btn" src="${btnRight}" /></div>` : `</div>`;
  return output;
}
