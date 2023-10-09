import  { defaultProject } from './projects.js'

export function createTask(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
};

export function displayTasks(project = defaultProject) {
    project.tasks.forEach(task => console.log(task));
}

