import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Link } from "@reach/router"
import { Home } from './pages/home';


function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
}

export default App;
