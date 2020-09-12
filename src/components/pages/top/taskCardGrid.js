import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TaskCard from "../../atoms/taskCard";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 6,
    },
}));

export default function TaskCardGrid() {
    const classes = useStyles();
    // APIから取得するように変更する
    const tasks = [
        {
            "title": "title1",
            "details": "details1",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
        {
            "title": "title2",
            "details": "details2",
        },
    ];

    return (
        <Container className={classes.root}>
            <Grid container className={classes.root}>
                {tasks.map((task) => (
                    <Grid item xs={12}>
                        <TaskCard title={task.title} details={task.details} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}