import React from "react";
import "./style.css";

function Menu({height, logo, score, highScore, result, color, rescale}) {
  return (
    <div id="menu">
      <img id="logo" src="./assets/images/sign.png" alt="logo"/>
      <img id="logo-background" src="./assets/images/sign2.png" alt="menu"/>
      <img id="logo-background-mobile" src="./assets/images/sign2-rotate.png" alt="menu"/>
      <div id="logo-text">
        <h1>Lion King</h1>
        <h3>Memory Game</h3>
      </div>
      <div id="menu-text">
        <div className="row">
          <div className="col-1 d-sm-none p-0" style={{width: "6%"}}></div>
          <div className="col-5 col-sm-12">
            <br className="d-none d-sm-block"/>
            <p style={{...color}}>{result}</p>
            <br className="d-none d-sm-block"/>
          </div>
          <div className="col-2 col-sm-12">
            <p>Score</p>
            <p>{score}</p>
          </div>
          <div className="col-4 col-sm-12">
            <p>High Score</p>
            <p>{highScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
