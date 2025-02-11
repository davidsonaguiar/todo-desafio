export function taskNameValidation(taskName) {
    return !(!taskName || taskName.length < 3);
}