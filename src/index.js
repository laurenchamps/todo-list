import './style.css';
import { formatDistance, subDays } from 'date-fns'; 
import { createTask } from './tasks.js';
import { createProject, addProject, projectList } from './projects.js';
import './ui.js';

export const toDoList = createProject('toDoList');

console.log(toDoList);
addProject(toDoList);

console.log(projectList);

// const task1 = createTask('Cook dinner', 'Prep and cook soup', new Date(2023, 9, 14), 'low');
// const task2 = createTask('Go shopping', 'Buy stuff', new Date(2023, 9, 14), 'low');
// const task3 = createTask('Walk the dog', 'Take her to the oval', new Date(2023, 9, 14), 'med');