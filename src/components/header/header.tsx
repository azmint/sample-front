import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {createStyles, StyleRules, Theme, withStyles, WithStyles} from "@material-ui/core/styles";
import {ElevationScroll} from "./elevationScroll";
import Menu from "./menu";
import Title from "./title";

const styles = (theme: Theme): StyleRules =>
    createStyles({
        appBar: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    });

export interface Props extends WithStyles<typeof styles> {
    title: string;
}

class Header extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ElevationScroll {...this.props}>
                    <AppBar className={this.props.classes.appBar}>
                        <Toolbar>
                            <Menu/>
                            <Title value={this.props.title}/>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar/>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Header);
