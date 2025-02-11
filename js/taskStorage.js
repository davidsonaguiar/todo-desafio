const key = "tasks"

export const taskStorage = {
    tasks: JSON.parse(localStorage.getItem(key) ?? "[]"),

    save() {
        localStorage.setItem(key, JSON.stringify(this.tasks));
    },

    create(task) {
        this.tasks.push(task);
        this.save();
    },

    get(id) {
        return this.tasks.find(task => task.id === id) || null;
    },

    getAll() {
        return this.tasks;
    },

    update(id, task) {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks[index] = task;
        this.save();
    },

    remove(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(index, 1);
        this.save();
    },

    removeAll() {
        this.tasks = [];
        this.save();
    }
}