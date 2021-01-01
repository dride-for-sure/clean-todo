export class Item {
    constructor(id, desc, due = null, assign = null, priority = false, status = true) {
        this.id = id;
        this.desc = desc;
        this.due = due;
        this.assign = assign;
        this.priority = priority;
        this.status = status;
    }
}