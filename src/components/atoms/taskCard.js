import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: 140,
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
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography className={classes.details}>
                    {props.details}
                </Typography>
            </CardContent>
        </Card>
    );
}