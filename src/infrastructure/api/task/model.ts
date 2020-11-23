export interface Task {
    id: {value: string};
    title: {value: string};
    details: {value: string};
    taskTypeId: {value: string};
    parentTaskId: {value: string};
}

export interface ComposingTask {
    title: string;
    details: string;
}
