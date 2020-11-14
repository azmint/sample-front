import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {createStyles, StyleRules, Theme, withStyles, WithStyles} from "@material-ui/core/styles";

const styles = (theme: Theme): StyleRules =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
    });

export interface Props extends WithStyles<typeof styles> {

}

class Menu extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <IconButton edge="start" className={this.props.classes.menuButton} color="inherit"
                        aria-label="menu">
                <MenuIcon/>
            </IconButton>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Menu);
