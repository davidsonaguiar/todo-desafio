export const getTaskListContainer = () => document.getElementById("container-list");
export const getTaskList = () => document.getElementById("task-list");
export const getButtonOpenDialogAdd = () => document.getElementById("triggle-dialog-add");
export const getDialogAdd = () => document.getElementById("dialog-add");
export const getInputTaskNameAdd = () => document.getElementById("name");
export const getDialogUpdate = () => document.getElementById("dialog-update");
export const getInputTaskNameUpdate = () => document.getElementById("new-name");
export const getButtonsCloseDialog = () =>  document.querySelectorAll(".dialog-close");
export const getTaskFormAdd = () => document.getElementById("form-add-task");
export const getTaskFormUpdate = () => document.getElementById("form-update-task");
export const getTaskNameUpdateError = () => document.getElementById("form-update-task-error");
export const getTaskNameAddError = () => document.getElementById("form-add-task-error");
export const getButtonDeleteTask = () => document.getElementById("delete-task");
export const getButtonResetList = () => document.getElementById("button-reset");
export const getButtonTheme = () => document.getElementById("btn-theme");

export function getChildrenButtonTheme(theme) {
    if(theme === "dark") {
        return `
            <span class="sr-only">Modo claro</span>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        `;
    }

    return `
        <span class="sr-only">Modo Escuro</span>
        <svg class="icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    `;
}

export function createTaskElement(task, onToggle, onEdit) {
    const label = document.createElement("label");
    label.htmlFor = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = task.id;
    checkbox.checked = task.done;
    checkbox.addEventListener("change", onToggle);

    label.appendChild(checkbox);

    const span = document.createElement("span");
    span.id = `task-name-${task.id}`;
    span.textContent = task.task;

    label.appendChild(span);

    const button = document.createElement("button");
    button.className = "btn btn-icon btn-ghost";
    button.dataset.id = task.id;
    button.type = "button";
    button.setAttribute("aria-controls",  "dialog-update");
    button.ariaExpanded = "false";
    button.onclick = (event) => onEdit(event);
    button.innerHTML = `
        <span class="sr-only">Editar</span>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#666666" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
    `

    const li = document.createElement("li");
    li.id = `task-${task.id}`;
    li.classList.add("task-list-item");
    li.appendChild(label);
    li.appendChild(button);

    return li;
}

export function createInfoEmptyListElement() {
    const p = document.createElement("p");
    p.classList.add("empty-list");
    p.innerHTML = "Lista vazia. <br> Clique em adicionar tarefa para adicionar uma nova tarefa.";
    return p;
}

export function createTaskListElement() {
    const taskList = document.createElement("ul");
    taskList.id = "task-list";
    taskList.classList.add("task-list");
    return taskList;
}