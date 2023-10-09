export function createProject(name) {
    return { name, items: [] }
}

export function createDefaultProject() {
    createProject(defaultProject);
}

export const defaultProject = createProject('defaultProject');

export function addTaskToProject(task, project = defaultProject) {
    project.items.push(task);
}

