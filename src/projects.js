export function createProject(name) {
    return { name, tasks: [] }
}

export function createDefaultProject() {
    createProject(defaultProject);
}

export const defaultProject = createProject('defaultProject');

export function addTaskToProject(task, project = defaultProject) {
    project.tasks.push(task);
}

