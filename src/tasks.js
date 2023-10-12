export function createTask(title, description='', dueDate='', priority='', done=false) {
    return { title, description, dueDate, priority, done };
}

export function addTaskToList(task) {
    toDoList.push(task);
}
