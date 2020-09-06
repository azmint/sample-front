import React from 'react';
import './App.css';
import TopPage from "./components/pages/topPage";
import {MuiThemeProvider} from '@material-ui/core/styles'
import {theme} from "./infrastructure/material_ui/theme";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <TopPage/>
      </MuiThemeProvider>
  );
}

export default App;
