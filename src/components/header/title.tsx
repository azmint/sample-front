import React from "react";
import Typography from '@material-ui/core/Typography';
import {createStyles, StyleRules, Theme, withStyles, WithStyles} from "@material-ui/core/styles";

const styles = (theme: Theme): StyleRules =>
    createStyles({
        title: {
            flexGrow: 1,
        },
    });

export interface Props extends WithStyles<typeof styles> {
    value: string;
}

class Title extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Typography variant="h6" className={this.props.classes.title}>
                {this.props.value}
            </Typography>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Title);
