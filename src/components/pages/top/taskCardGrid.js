import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TaskCard from "../../atoms/taskCard";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function TaskCardGrid() {
    const [spacing] = React.useState(2);
    const classes = useStyles();
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
        <Container>
            <Grid container className={classes.root} justify="center" spacing={spacing}>
                {tasks.map((task) => (
                    <Grid item xs={12}>
                        <TaskCard title={task.title} details={task.details} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}