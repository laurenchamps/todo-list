import { toDoList, project1 } from './index.js';

export const projectList = [];

export function createProject(name) {
    return { name, tasks: [] };
}

export function addProject(project) {
    projectList.push(project);
    return projectList;
}

export function addTaskToProject(task, project) {
    project.tasks.push(task);
    task.project  = project.name;

    return project;
}

export function displayTasks(project) {
    project.tasks.forEach(task => console.log(task));
}

export function removeTask(task, project) {
    let arrIndex = '';
    project.tasks.forEach((item, index) => {
        if (item === task) {
            arrIndex = index;
        }
    });

    project.tasks.splice(arrIndex, 1);

    return project;
}

