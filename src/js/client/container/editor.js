import composeBtnBar from '../components/btnBar/btnBar';
import composeHeader from '../components/header/header';

/**
 * Returns editor view
 * @param {Object} data
 * @param {String} view
 */
export default function composeEditor(data, view, id) {
  return `
  <div class="container" tabindex="0">
    ${composeHeader(data, view, id)}
    // Notos
  </div>
  <div class="container fixed-bottom">
    ${composeBtnBar(view)}
  </div>
`;
}
