import getAsset from '../../assets/assets';

/**
 * Returns the header
 * @param {String} view - header for which view [lists, notos, editor, settings]
 * @returns {String}
 */
export default function getHeader(view, title) {
  let btnLeft;
  let btnRight;
  let h1 = title;
  if (view === 'lists') {
    btnLeft = getAsset('logo', true);
    btnRight = getAsset('settingsGlobal', true);
  } else if (view === 'notos') {
    btnLeft = getAsset('arrowLeft', false);
    btnRight = getAsset('settingsLocal', false);
  } else if (view === 'editor') {
    btnLeft = getAsset('arrowLeft', false);
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
