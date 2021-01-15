import getAsset from '../../assets/assets';

/**
 * Returns the fixed-bottom button bar
 * @param {string} dest - [list, listEditing, notoEditor, modal]
 * @returns {string}
 */
export default function btnBar(dest) {
  let btns = [];
  let light = true;
  if (dest === 'list') {
    btns = ['plus', 'search', 'edit'];
  } else if (dest === 'listEditing') {
    btns = ['plus', 'checked'];
  } else if (dest === 'notoEditor') {
    btns = ['plus', 'settingsLocal', 'share', 'delete'];
    light = false;
  } else if (dest === 'modal') {
    btns = ['back', 'delete'];
  }

  let output = '';
  btns.forEach(el => {
    output += `<img class="btn" src="${getAsset(el, light)}">`;
  });

  return `<div class="btn-bar">${output}</div>`;
}
