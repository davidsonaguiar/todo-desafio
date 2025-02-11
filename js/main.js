import {
    getButtonDeleteTask,
    getButtonOpenDialogAdd, getButtonResetList,
    getButtonsCloseDialog, getButtonTheme,
    getTaskFormAdd,
    getTaskFormUpdate
} from "./components.js";
import {
    createTask,
    updateTask,
    closeDialog,
    deleteTask,
    renderList,
    openDialogAdd,
    resetList,
    toggleTheme, loadTheme
} from "./events.js";

window.addEventListener("load", () => {
    loadTheme();
    renderList();
    getButtonOpenDialogAdd().onclick = openDialogAdd;
    getButtonsCloseDialog().forEach((button) => button.onclick = event => closeDialog(event));
    getTaskFormAdd().onsubmit = createTask;
    getTaskFormUpdate().onsubmit = updateTask;
    getButtonDeleteTask().onclick = deleteTask;
    getButtonResetList().onclick = resetList;
    getButtonTheme().onclick = toggleTheme;
});
