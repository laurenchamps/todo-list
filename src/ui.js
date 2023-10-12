import { createTask } from './tasks.js';
import { addTaskToProject, removeTask, projectList } from './projects.js';
import { toDoList } from './index.js';

const enterTask = document.querySelector('.add-task');
const addBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('.tasks');

export function addTaskToDOM(newTask, project) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');

    li.setAttribute('class', 'task');

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `task-${newTask.id}`);

    input.addEventListener('click', (e) => {
        setDone(e, newTask, project);
    });

    label.setAttribute('for', `task-${newTask.id}`);
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

function setDone(e, task, project) { 
    const taskArr = project.tasks;

    taskArr.forEach((item) => {
        if (item.id === task.id) {
            item.done = e.target.checked;
        } 
    });
    console.log(project);
}

function createDeleteBtn(task, project) {
    const deleteBtn = document.createElement('button');
    
    deleteBtn.setAttribute('aria-label', `delete ${task.title}`);
    deleteBtn.setAttribute('id', task.title);
    
    const textNode = document.createTextNode('\u00D7');
    deleteBtn.appendChild(textNode);
    
    deleteBtn.addEventListener('click', () => {
        clearTask(task.id, task, project);
    });

    return deleteBtn;
}

function addFeedback(taskTitle) {
    let liveRegion = document.querySelector('[role="status"]');
    liveRegion.textContent = `${taskTitle} added`;
}

function clearTask(taskId, task, project) {
    const inputElement = document.getElementById(`task-${taskId}`);
    inputElement.parentNode.remove();
    removeTask(task, project);
    setFocus();
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

function setFocus() {
    if (taskList.firstChild) {
        document.querySelector('ul input').focus();
    } else {
        document.querySelector('#todos-label').focus();
    }
}


// Event listeners
export const eventListener = addBtn.addEventListener('click', (e) => {
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
})

