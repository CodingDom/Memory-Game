import React from "react";
import "./style.css";
const menuStyle = {
  width:"100%", 
  position:"absolute", 
  bottom: "10%", 
  left: "50%", 
  transform: "translate(-50%, 0)", 
  textAlign:"center", 
  fontSize:"32px", 
  color: "#5a4827"
}

function Menu({height, logo, score, highScore, result, color, rescale}) {
  return (
    <div id="menu">
      <img id="logo" src="./images/sign.png" alt="logo" style={{ width:"110%", position:"absolute", left:"-5%", top:"0" }} onLoad={() => rescale()}/>
      <img src="./images/sign2.png" alt="menu" style={{height: "100%", width: "100%"}} />
      <div id="logo-text" style={{width: "100%", height: logo, position: "absolute", top: "0", left: "0", fontSize: "20px", textAlign:"center", paddingTop:"12%", color:"white"}}>
        <h1 style={{ fontSize: "2.5em" }}>Lion King</h1>
        <h3 style={{ fontSize: "1.75em" }}>Memory Game</h3>
      </div>
      <div id="menu-text" style={{...menuStyle,...{height: height}}}>
        <br />
        <p style={{...color, padding: "0 20%"}}>{result}</p>
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
