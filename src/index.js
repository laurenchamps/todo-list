import './style.css';
import { createTask } from './tasks.js';
import { createProject, createDefaultProject, defaultProject, addTaskToProject } from './projects.js';

const task1 = createTask('Cook dinner', 'Prep and cook soup', '14/10/2023', 'low');
const task2 = createTask('Go shopping', 'Buy stuff', '14/10/2023', 'low');

addTaskToProject(task1);
addTaskToProject(task2);

console.log(defaultProject);