export class Item {
    constructor(id, desc, due = null, assign = null, priority = false, status = true) {
        this.id = id;
        this.desc = desc;
        this.due = due;
        this.assign = assign;
        this.priority = priority;
        this.status = status;
    }

    get html() {
        const html = `
            <div class="col">
                <div class="position-relative">
                    <div class="m-0 cmd cmd-secondary due">
                        <input class="border-0" type="text"
                            data-task-id="${obj.id}"
                            data-task-desc="${obj.desc}"
                            data-task-due="${obj.due}"
                            data-task-assign="${obj.assign}"
                            data-task-priority="${obj.priority}"
                            >
                        <p></p>
                    </div>
                </div>               
            </div>`
    }
}