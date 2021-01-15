/**
 * Communication between view and model
 * @class Controller
 */
export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Explicit binding of model
    this.model.bindTaskListChanged(this.onTaskListChanged);

    // Explicit binding of view
    // Initialize the view
    this.onTaskListChanged(this.model.tasks);
  }

  /**
   * View notification
   * @param {Array} tasks
   */

  onTaskListChanged = tasks => {
    this.view.displayView(tasks);
  };

  handleAddToTask = taskText => {
    this.model.addTask(taskText);
  };

  handleEditTask = (id, taskText) => {
    this.model.editTask(id, taskText);
  };

  handleDeleteTask = id => {
    this.model.deleteTask(id);
  };

  handleToogleTask = id => {
    this.model.toogleTask(id);
  };
}
