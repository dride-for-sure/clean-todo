// Todo item
export class Item {
    constructor(title, note, due, priority = 0, status = true, uuid) {
        this.title = title;
        this.note = note;
        this.due = due;
        this.priority = priority;
        this.status = status;
        this.uuid = uuid;
    }
}