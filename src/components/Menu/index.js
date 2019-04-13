import React from "react";
import "./style.css";

function Menu({height, logo, score, highScore, result, color}) {
  return (
    <div id="menu">
      <img id="logo" src="/images/sign.png" alt="logo" style={{ width:"110%", position:"absolute", left:"-5%", top:"0" }} />
      <img src="/images/sign2.png" alt="menu" style={{height: "100%", width: "100%"}} />
      <div id="logo-text" style={{width: "100%", height: logo, position: "absolute", top: "0", left: "0", fontSize: "20px", textAlign:"center", paddingTop:"12%", color:"white"}}>
        <h1 style={{ fontSize: "2.5em" }}>Lion King</h1>
        <h3 style={{ fontSize: "1.75em" }}>Memory Game</h3>
      </div>
      <div id="menu-text" style={{height: height}}>
        <br />
        <p style={color}>{result}</p>
        <br />
        <p>Score</p>
        <p>{score}</p>
        <p>High Score</p>
        <p>{highScore}</p>
      </div>
    </div>
  );
}

export default Menu;
