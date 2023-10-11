import { toDoList } from './index.js';

export function createProject(name) {
    return { name, tasks: [] };
}

export function addTaskToProject(task, project) {
    project.tasks.push(task);
    // task.project  = project.name;
}

export function displayTasks(project) {
    project.tasks.forEach(task => console.log(task));
}

export function removeTask(task) {
    const project = task.project;

    const taskToRemove = project.tasks.filter((item) => item === task);
    console.log(taskToRemove);
}

