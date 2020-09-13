import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import TaskCard from "../components/task/taskCard";

const useStyles = makeStyles({
    root: {
        padding: 6,
    },
});

export default function TopPage() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <TaskCard title="トップページ" details="後で実装する" />
        </Container>
    );
}