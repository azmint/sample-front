import React, {useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {TableContainer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Task} from "../../infrastructure/api/task/model";
import {fetchTasks, TaskListResponse} from "../../infrastructure/api/task/client";

export const Tasks: React.FC = () => {
    const [taskList, setTaskList] = useState<Task[] | undefined>([]);

    const fetchTasksReq = async () => {
        try {
            const response: AxiosResponse<TaskListResponse> = await fetchTasks();
            const data: TaskListResponse = response.data;
            return data.tasks;
        } catch (e) {
            console.log(e);
        }
    };

    const useStyles = makeStyles({
        button: {
            backgroundColor: 'green'
        },
        table: {
            minWidth: 650,
        },
    });

    useEffect(() => {
        const data: Promise<Task[] | undefined> = fetchTasksReq();
        data.then(tasks => {
            console.log(tasks);
            setTaskList(tasks);
        });
    }, []);

    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">タイトル</TableCell>
                            <TableCell align="right">内容</TableCell>
                            <TableCell align="right">タスクタイプID</TableCell>
                            <TableCell align="right">親タスクID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskList && taskList.map((task) => (
                            <TableRow key={task.id.value}>
                                <TableCell align="right">{task.id.value}</TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    {task.title.value}
                                </TableCell>
                                <TableCell align="right">{task.details.value}</TableCell>
                                <TableCell align="right">{task.taskTypeId.value}</TableCell>
                                <TableCell align="right">{task.parentTaskId.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button className={classes.button}>新規作成</Button>
        </div>
    );
};

export default Tasks;
