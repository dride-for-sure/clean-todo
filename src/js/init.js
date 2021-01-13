import Controller from './controller';
import Model from './model';
import View from './view';

/**
 * Init the MVC
 */
const app = new Controller(new Model(), new View());
