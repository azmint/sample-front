import {AxiosPromise} from 'axios';

import client from '../axiosClient';
import {Task} from "./model";

export interface TaskListResponse {
    tasks: Task[];
}

export const fetchTasks = (): AxiosPromise<TaskListResponse> => client.get(`/task/list`);
