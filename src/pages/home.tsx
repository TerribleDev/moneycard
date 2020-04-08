import React from 'react';
import { RouteComponentProps, Link } from "@reach/router";

export function Home (props: RouteComponentProps) {
    return (
    <>
      <h1>Home</h1>
      <Link to="/room/1">Enter Game</Link>
    </>
    );
}
