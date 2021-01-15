import Controller from './controller/controller';
import Model from './model/model';
import './styles/index.scss';
import listView from './view/listview';
import View from './view/view';

/**
 * Init the MVC
 */
// eslint-disable-next-line import/prefer-default-export
const app = new Controller(new Model(), new View());
console.log(listView());
console.log(app);
