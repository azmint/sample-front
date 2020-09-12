import React from 'react';
import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles'
import {theme} from "./infrastructure/material_ui/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/header";
import TaskCardGrid from "./components/task/taskCardGrid";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header value="SampleFront"/>
          <TaskCardGrid />
      </MuiThemeProvider>
  );
}

export default App;
