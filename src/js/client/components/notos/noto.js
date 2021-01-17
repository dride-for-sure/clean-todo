import getAssets from '../../assets/assets';
import composeNotoDescription from './notoDesc';

/**
 * Compose the noto for notos view
 * @param {Object} noto
 */
export default function composeNoto(noto) {
  const toggleAsset = noto.complete ? 'done' : 'undone';
  const toggleClass = noto.complete ? 'done' : '';
  return `
    <div class="list-item noto ${toggleClass}">
      <img class="btn" src="${getAssets(toggleAsset, false)}" />
      <div>
        <h3>${noto.title}</h3>
        <h4>${composeNotoDescription(noto)}</h4>
      </div>
      <img class="btn" src="${getAssets('arrowRight', false)}" />
    </div>
  `;
}
