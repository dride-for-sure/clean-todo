import listView from '../container/listview';
import { createElement, getElements } from '../utils/helper';

/**
 * Represent the model visually
 * @class View
 */
export default class View {
  constructor() {
    [this.body] = getElements('body');
  }

  /**
   * Display the view
   * @param {Array} tasks
   * @param {String} view - lists, notos, editor, settings, search
   */
  displayView(tasks) {
    const view = createElement('div', '#view .wrapper');
    view.innerHTML = listView();
    this.body.append(view);
  }

  clearView() {
    // Clear the page
    this.body.removeChild(this.body.childNodes[0]);
  }
}
