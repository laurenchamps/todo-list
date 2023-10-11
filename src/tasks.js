export function createTask(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
}

export function addTaskToList(task) {
    toDoList.push(task);
}

