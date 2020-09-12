import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: 80,
        padding: 10,
    },
    title: {
        fontSize: 14,
    },
    details: {
        fontSize: 10,
    },
});

export default function TaskCard(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} variant="outlined" square>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.title}
            </Typography>
            <Typography className={classes.details}>
                {props.details}
            </Typography>
        </Paper>
    );
}