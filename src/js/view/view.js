import { getElements, createElement } from '../lib';

/**
 * Represent the model visually
 * @class View
 */
export default class View {
  constructor() {
    // Task html
    [this.app] = getElements('body');
    this.container = createElement('div', 'container-fluid p-5');
    this.title = createElement('h1');
    this.title.innerText = '... .. .';
    this.taskList = createElement('div', 'container-fluid');
    this.container.append(this.title, this.taskList);
    this.app.prepend(this.container);
  }

  /**
     * Display the Tasks
     * @param {Array} tasks
     */
  displayTasks(tasks) {
    // Clear the task list
    while (this.taskList.firstChild) {
      this.taskList.removeChild(this.taskList.firstChild);
    }

    // Display the taskList
    if (tasks.length > 0) {
      // Create ordered list
      const list = createElement('ol');

      // Iterate over tasks array
      tasks.forEach((task) => {
        // Create list item
        const li = createElement('li');
        // Create textarea
        const txt = createElement('textarea');
        txt.innerText = task.text;

        // Append
        li.append(txt);
        list.append(li);
      });
      // Append ordered list to tasklist
      this.taskList.append(list);
    }
  }
}
