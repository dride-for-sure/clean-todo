import getAsset from '../../assets/assets';
import getList from './getList';
import { getNoto } from './getNotos';

/**
 * Returns the header
 * @param {String} view - header for which view [lists, notos, editor, settings]
 * @returns {String}
 */
export default function getHeader(data, view, id = 1) {
  let btnLeft;
  let btnRight;
  let h1;
  if (view === 'lists') {
    btnLeft = getAsset('logo', true);
    btnRight = getAsset('settingsGlobal', true);
    h1 = 'Make it so';
  } else if (view === 'notos') {
    btnLeft = getAsset('arrowLeft', false);
    btnRight = getAsset('settingsLocal', false);
    h1 = getList(data, id).title;
  } else if (view === 'editor') {
    btnLeft = getAsset('arrowLeft', false);
    h1 = getNoto(data, id).title;
  } else if (view === 'settings') {
    btnLeft = getAsset('arrowDown', false);
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
