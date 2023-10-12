import './style.css';
import {  createTask } from './tasks';
import { 
    createProject, 
    addProject, 
    addTaskToProject 
} from './projects';
import { addTaskToDOM } from './ui';


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