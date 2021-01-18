import composeBtnBar from '../components/btnBar/btnBar';
import composeHeader from '../components/header/header';

/**
 * Returns editor view
 * @param {Object} data
 * @param {String} view
 * @param {String} notosId
 */
export default function composeEditor(data, view, notosId) {
  return `
  <div class="container" tabindex="0">
    ${composeHeader(data, view, notosId)}
    // Notos
  </div>
  <div class="container fixed-bottom">
    ${composeBtnBar(view)}
  </div>
`;
}
