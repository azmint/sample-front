import React from 'react';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {theme} from "./infrastructure/material_ui/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/header";
import TaskCardGrid from "./components/task/taskCardGrid";
import TopPage from "./pages/topPage";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline/>
                <Header value="SampleFront"/>
                <Switch>
                    <Route exact path="/" component={TopPage}/>
                    <Route path="/task/list" component={TaskCardGrid}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
}

export default App;
