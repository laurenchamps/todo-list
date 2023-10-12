import './style.css';
import { formatDistance, subDays } from 'date-fns'; 
import { addTaskToList, createTask } from './tasks.js';
import { createProject, addProject, projectList, addTaskToProject } from './projects.js';
import './ui.js';
import { addTaskToDOM } from './ui.js';

export const toDoList = createProject('toDoList');

export function renderPage() {
    addProject(toDoList);

    const finishProject = createTask('Finish project');
    const cookDinner = createTask('Cook dinner');
    const run = createTask('Go for a run');

    addTaskToProject(finishProject, toDoList);
    addTaskToProject(cookDinner, toDoList);
    addTaskToProject(run, toDoList);

    addTaskToDOM(finishProject, toDoList);
    addTaskToDOM(cookDinner, toDoList);
    addTaskToDOM(run, toDoList);
}

renderPage();