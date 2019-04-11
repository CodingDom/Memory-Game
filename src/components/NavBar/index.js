import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav class="navbar navbar-light">
      <span class="navbar-brand mb-0 h1">Memory Game</span>
      <span>{props.result}</span>
      <span>Score: {props.score}</span>
    </nav>
  );
}

export default NavBar;
