import './styles/index.scss';

import Controller from './controller/controller';
import Model from './model/model';
import View from './view/view';

/**
 * Init the MVC
 */
const app = new Controller(new Model(), new View());
