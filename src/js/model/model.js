import Task from './task';
import { uuid } from '../lib';

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
     * @param {String} taskText
     */
  addTask(taskText) {
    // Initialize new task object
    const task = new Task(uuid, taskText, false);
    // Push to tasks array
    this.tasks.push(task);
    this.commit();
  }


  /**
     * Map through all tasks and update text
     * @param {String} id
     * @param {String} updatedTaskText
     */
  editTask(id, updatedTaskText) {
    this.tasks = this.tasks.map((task) => {
      const updatedTask = task;
      if (task.id === id) { updatedTask.text = updatedTaskText; }
      return updatedTask;
    });
    this.commit();
  }

  /**
     * Filter the task and remove task with given id
     * @param {String} id
     */
  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.commit();
  }

  /**
     * Toggle task.complete property
     * @param {String} id
     */
  toggleTask(id) {
    this.tasks = this.tasks.map((task) => {
      const updatedTask = task;
      if (task.id === id) { updatedTask.complete = !updatedTask.complete; }
      return updatedTask;
    });
    this.commit();
  }
}
