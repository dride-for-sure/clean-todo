import header from '../components/header/header';

/**
 * Returns settings view
 * @param {Object} data
 * @param {String} view
 */
export default function settings(data, view) {
  return `
  <div class="container" tabindex="0">
    ${header(data, view)}
    // Settings
  </div>
`;
}
