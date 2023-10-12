import { createTask } from './tasks.js';
import { addTaskToProject, removeTask } from './projects.js';
import { toDoList } from './index.js';

const enterTask = document.querySelector('.add-task');
const addTask = document.querySelector('#add-btn');
const taskList = document.querySelector('.tasks');

function addTaskToDOM(newTask, project) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const taskId = getTaskId(newTask, project);

    li.setAttribute('class', 'task');

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', taskId.id);

    label.setAttribute('for', taskId.id);
    label.textContent = newTask.title;

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(createDeleteBtn(newTask, project));

    taskList.appendChild(li);
}

function getTaskId(task, project) {
    return { 
        id: `task-${project.tasks.indexOf(task) + 1}`,
        task: task,
        project: project,
    }
}

function createDeleteBtn(task, project) {
    const deleteBtn = document.createElement('button');
    
    deleteBtn.setAttribute('aria-label', `delete ${task.title}`);
    deleteBtn.setAttribute('id', task.title);
    
    const textNode = document.createTextNode('\u00D7');
    deleteBtn.appendChild(textNode);
    
    const taskId = getTaskId(task, project);
    deleteBtn.addEventListener('click', () => {
        clearTask(taskId);
    });

    return deleteBtn;
}

function addFeedback(taskTitle) {
    let liveRegion = document.querySelector('[role="status"]');
    liveRegion.textContent = `${taskTitle} added`;
}

function clearTask(taskId) {
    const inputElement = document.getElementById(taskId.id);
    inputElement.parentNode.remove();
    removeTask(taskId.task, taskId.project);
}

function inputIsValid() {
    if (enterTask.value) {
        return true;
    }
    return false;
}

function clearInput() {
    enterTask.value = '';
}

// Event listeners
export const eventListener = addTask.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = createTask(enterTask.value);

    if (!inputIsValid()) {
        alert('Task cannot be blank');
        return;
    }

    addTaskToProject(newTask, toDoList);
    addTaskToDOM(newTask, toDoList);
    clearInput();
    addFeedback(newTask.title);
} )

