import { getUuidv4 } from '../utils/helper';
import Noto from './noto';

/**
 * Data management
 * @class Model
 */
export default class Model {
  constructor() {
    // Get the tasks from localStorage
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  /**
   * Controller notification
   * @param {Function} handler
   */
  bindTaskListChanged(handler) {
    this.onTaskListChanged = handler;
  }

  /**
   * Update localStorage and invoke controller notification
   */
  commit() {
    this.onTaskListChanged(this.tasks);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  /**
   * Add task to tasks
   * @param {String} list
   * @param {String} title
   * @param {String} noto
   * @param {String} due
   * @param {Array} tags
   * @param {Array} assigns
   */
  addTask(list, title, noto, due, tags, assigns) {
    // Initialize new task object with uuidv4
    const id = getUuidv4();
    const taskObj = new Noto(id, list, title, noto, due, tags, assigns);
    // Push to tasks array
    this.tasks.push(taskObj);
    this.commit();
  }

  /**
   * Map through all tasks and update obj with matching id
   * @param {String} id
   * @param {String} list
   * @param {String} title
   * @param {String} noto
   * @param {String} due
   * @param {Array} tags
   * @param {Array} assigns
   * @param {String} complete
   */
  editTask(id, list, title, noto, due, priority, tags, assigns, complete) {
    this.tasks = this.tasks.map(task => {
      if (id === task.id) {
        const taskObj = new Noto(id, list, title, noto, due, priority, tags, assigns, complete);
        return taskObj;
      }
      return task;
    });
    this.commit();
  }

  /**
   * Filter the task and remove task with given id
   * @param {String} id
   */
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.commit();
  }

  /**
   * Toggle task.complete property
   * @param {String} id
   */
  toggleTask(id) {
    this.tasks = this.tasks.map(task => {
      const updatedTask = task;
      if (task.id === id) {
        updatedTask.complete = !updatedTask.complete;
      }
      return updatedTask;
    });
    this.commit();
  }
}
