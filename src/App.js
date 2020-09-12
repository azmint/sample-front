import React from 'react';
import './App.css';
import TopPage from "./components/pages/top/topPage";
import {MuiThemeProvider} from '@material-ui/core/styles'
import {theme} from "./infrastructure/material_ui/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <TopPage/>
      </MuiThemeProvider>
  );
}

export default App;
