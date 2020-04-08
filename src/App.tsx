import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Router, Link } from "@reach/router";
import { Home } from "./pages/home";
import { Room } from "./pages/room";

function App() {
  return (
    <>
      <CssBaseline />
      <Container >
        <Router>
          <Home path="/" />
          <Room path="/room/:id" />
        </Router>
      </Container>
    </>
  );
}

export default App;
