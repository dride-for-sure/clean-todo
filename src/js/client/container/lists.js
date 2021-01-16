import btnBar from '../components/btnBar/btnBar';
import header from '../components/header/header';
import listsPredefined from '../components/lists/listsPredefined';
import listsUser from '../components/lists/listsUser';
/**
 * Returns lists view
 * @param {Object} data
 * @param {String} view
 */
export default function lists(data, view) {
  return `
  <div class="container" tabindex="0">
    ${header(data, view)}
    ${listsUser(data)}
  </div>
  <div class="container fixed-bottom">
    ${listsPredefined(data)}
    ${btnBar(view)}
  </div>
`;
}
