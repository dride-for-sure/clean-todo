/**
 * Compose the description with assignments & tags
 * @param {Object} noto
 * @return {String}
 */
export default function composeNotoDescription(noto) {
  let composed = '';
  if (noto.assigns.length) {
    noto.assigns.forEach(assign => {
      composed += `@${assign} `;
    });
  }
  if (noto.tags.length) {
    noto.tags.forEach(tag => {
      composed += `#${tag} `;
    });
  }
  return composed;
}
