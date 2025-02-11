import { taskStorage } from "./taskStorage.js";
import {
    createInfoEmptyListElement,
    createTaskElement,
    createTaskListElement, getButtonDeleteTask, getButtonTheme, getChildrenButtonTheme,
    getDialogAdd, getDialogUpdate, getInputTaskNameAdd, getInputTaskNameUpdate,
    getTaskFormUpdate, getTaskList, getTaskListContainer, getTaskNameAddError, getTaskNameUpdateError
} from "./components.js";
import { taskNameValidation } from "./validation.js";
import {themeStorage} from "./themeStorage.js";

export function openDialogAdd(event) {
    event.currentTarget.ariaExpanded = true;
    getDialogAdd().showModal();
}

export function closeDialog(event) {
    const dialog = event.target.closest("dialog");
    const id = dialog.id
    const triggle = document.querySelector(`[aria-controls="${id}"]`);
    dialog.close()
    triggle.ariaExpanded = false;
}

export function createTask(event) {
    event.preventDefault();
    const taskName = getInputTaskNameAdd().value.trim();
    if(!taskNameValidation(taskName)) {
        getTaskNameAddError().textContent = "O Campo tarefa é obrigatório e deve ter no mínimo 3 caracteres";
        return;
    }
    getTaskNameAddError().textContent = "";
    const task = {
        id: crypto.randomUUID(),
        task: getInputTaskNameAdd().value,
        done: false
    }
    taskStorage.create(task);
    event.currentTarget.reset()
    if(taskStorage.getAll().length === 1) return renderList();
    getTaskList().appendChild(createTaskElement(task, toggleTask, openEditDiolog));
    getInputTaskNameAdd().focus();
}

export function renderList() {
    const tasks = taskStorage.getAll();
    const container = getTaskListContainer();
    container.innerHTML = "";

    if(Array.isArray(tasks) && tasks.length > 0) {
        const taskList = createTaskListElement();
        tasks.forEach(task => {
            const taskElement = createTaskElement(task, toggleTask, openEditDiolog);
            taskList.appendChild(taskElement);
        });
        container.appendChild(taskList);
    }
    else {
        const voidElement = createInfoEmptyListElement();
        container.appendChild(voidElement);
    }
}

export function updateTask(event) {
    event.preventDefault();
    const newName = getInputTaskNameUpdate().value.trim();
    if(!taskNameValidation(newName)) {
        getTaskNameUpdateError().textContent = "O Campo tarefa é obrigatório e deve ter no mínimo 3 caracteres";
        return;
    }
    getTaskNameUpdateError().textContent = "";
    const id = event.target.dataset.id;
    const task = taskStorage.get(id);
    task.task = newName;
    taskStorage.update(id, task);
    const span = document.getElementById(`task-name-${id}`);
    span.textContent = newName;
    getDialogUpdate().close();
    event.target.reset();
}

export function toggleTask(event) {
    const checkbox = event.target;
    const task = taskStorage.get(checkbox.id);
    task.done = checkbox.checked;
    taskStorage.update(task.id, task);
}

export function deleteTask(event) {
    const id = event.currentTarget.dataset.id;
    const task = document.getElementById(`task-${id}`);
    taskStorage.remove(id);
    task.remove();
    getDialogUpdate().close();
    if(taskStorage.getAll().length === 0) renderList();
}

export function resetList() {
    taskStorage.removeAll();
    getTaskListContainer().innerHTML = "";
    renderList();
}

export function openEditDiolog(event) {
    event.currentTarget.ariaExpanded = true;
    const task = taskStorage.get(event.currentTarget.dataset.id);
    getDialogUpdate().showModal();
    getInputTaskNameUpdate().value = task.task;
    getTaskFormUpdate().dataset.id = task.id;
    getButtonDeleteTask().dataset.id = task.id;
}

export function loadTheme() {
    themeStorage.get() === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");

    getButtonTheme().innerHTML = getChildrenButtonTheme(themeStorage.get());
}

export function toggleTheme(event) {
    document.documentElement.classList.toggle("dark");
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    themeStorage.set(currentTheme);
    event.currentTarget.innerHTML = getChildrenButtonTheme(currentTheme);
}
