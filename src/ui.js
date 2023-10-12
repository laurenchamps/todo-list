import { createTask } from './tasks.js';
import { addTaskToProject} from './projects.js';
import { toDoList } from './index.js';

const enterTask = document.querySelector('.add-task');
const addTask = document.querySelector('#add-btn');
const taskList = document.querySelector('.tasks');

function addTaskToDOM(newTask, project) {
    console.log(newTask.title);
    console.log(`task-${project.tasks.indexOf(newTask)}`);

    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const taskId = `task-${project.tasks.indexOf(newTask)}`;

    li.setAttribute('class', 'task');

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', taskId);

    label.setAttribute('for', taskId);
    label.textContent = newTask.title;

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(createDeleteBtn(newTask));

    taskList.appendChild(li);
}

function createDeleteBtn(task) {
    const deleteBtn = document.createElement('button');

    deleteBtn.setAttribute('aria-label', 'delete');
    deleteBtn.setAttribute('id', task.title);

    const textNode = document.createTextNode('\u00D7');
    deleteBtn.appendChild(textNode);

    return deleteBtn;
}

function clearInput() {
    enterTask.value = '';
}

// Event listeners
addTask.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = createTask(enterTask.value);
    addTaskToProject(newTask, toDoList);
    addTaskToDOM(newTask, toDoList);
    clearInput();
} )

