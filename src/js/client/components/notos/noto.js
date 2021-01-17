import getAssets from '../../assets/assets';
import composeNotoDescription from './notoDesc';

/**
 * Compose the noto for notos view
 * @param {Object} noto
 */
export default function composeNoto(noto) {
  const toggleComplete = noto.complete ? 'checked' : 'unchecked';
  return `
    <div class="list-item noto">
      <img class="btn" src="${getAssets(toggleComplete, false)}" />
      <div>
        <h3>${noto.title}</h3>
        <h4>${composeNotoDescription(noto)}</h4>
      </div>
      <img class="btn" src="${getAssets('arrowRight', false)}" />
    </div>
  `;
}
