import React from 'react';

import './App.css';
import { NavBar } from './components/navbar';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto-mono';
import '@fontsource/roboto';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Roboto Mono',
      fontWeight: 700,
      fontSize: 144,
    },
    h2: {
      fontFamily: 'Roboto Mono',
      fontWeight: 100,
      fontSize: 96,
    },
    h3: {
      fontFamily: 'Roboto'
    }
  },
});

function App() {
  return (
    <div className="my-app">
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
