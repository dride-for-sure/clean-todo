import composeHeader from '../components/header/header';

/**
 * Returns settings view
 * @param {Object} data
 * @param {String} view
 */
export default function composeSettings(data, view) {
  return `
  <div class="container scroll" tabindex="0">
    ${composeHeader(data, view)}
    // Settings
  </div>
`;
}
