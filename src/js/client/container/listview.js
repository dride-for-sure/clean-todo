import getBtnBar from '../components/btnBar/btnBar';
import getHeader from '../components/header/header';
import getListsPredefined from '../components/lists/listsPredefined';
import getListsUserDefined from '../components/lists/listsUserDefined';

export default function listView(view, title) {
  return `
  <div class="container" tabindex="0">
    ${getHeader(view, title)}
    ${getListsUserDefined()}
  </div>
  <div class="container fixed-bottom">
    ${getListsPredefined()}
    ${getBtnBar(view)}
  </div>
`;
}
