import './style.css';
import { createTask, addTaskToList } from './tasks.js';
import { createProject, addTaskToProject, displayTasks, removeTask } from './projects.js';

export const toDoList = [];

const task1 = createTask('Cook dinner', 'Prep and cook soup', '14/10/2023', 'low');
const task2 = createTask('Go shopping', 'Buy stuff', '14/10/2023', 'low');
const task3 = createTask('Walk the dog', 'Take her to the oval', '14/10/2023', 'med');


export const project1 = createProject('project1');

addTaskToProject(task1, project1);
addTaskToProject(task2, project1);
addTaskToProject(task3, project1);

displayTasks(project1);

console.log(task1);
removeTask(task1, project1);

console.log(project1);