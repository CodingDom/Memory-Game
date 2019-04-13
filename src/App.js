import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import characters from "./characters.json";
import "./App.css";

const defaultMsg = "Click on an image to begin!";

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

class App extends Component {
  state = {
    characters,
    alreadyChosen: [],
    result: "",
    score: 0,
    highScore: 0,
    height: 0,
    logoHeight: 0
  };

  componentDidMount() {
    window.onresize = () => this.rescale();
    this.rescale();
  }

  checkAnswer = id => {
    if (this.state.alreadyChosen.indexOf(id) !== -1) {
      this.setState({ 
        alreadyChosen: [],
        result: "Incorrect!",
        score: 0 
      });
    } else {
      this.setState({
        alreadyChosen: this.state.alreadyChosen.concat(id),
        result: "Correct!",
        score: this.state.score + 1,
        highScore: (this.state.score + 1 >= this.state.highScore ? this.state.score + 1 : this.state.highScore)
      });
    }
    console.log(this.state.result);
  };

  rescale() {
    const logo = document.getElementById("logo");

    this.setState({
      height: (logo.parentElement.offsetHeight - logo.offsetHeight)+"px",
      logoHeight: logo.offsetHeight + "px"
    });

    console.log(this.state.height);
  };

  render() {
    const characterList = this.state.characters.sort(() => (.5 - Math.random())).map((character,index) => (
      <CharacterCard
      checkAnswer={this.checkAnswer}
      id={character.id}
      key={character.id}
      name={character.name}
      image={character.image}
    />
    ));
    const currColor = this.state.result === "Correct!" ? "green" : "red";
    const color = {color: currColor};
    return (
        <div className="container-fluid">
          <div className="row">
            {/* <NavBar result={this.state.score === 0 ? defaultMsg : this.state.result} score={this.state.score} /> */}
          </div>
          <div className="row">
            <div className="col-3">
              <div id="menu">
                <img id="logo" src={`${process.env.PUBLIC_URL}/images/sign.png`} alt="logo" style={{ width:"110%", position:"absolute", left:"-5%", top:"0" }} />
                <img src={`${process.env.PUBLIC_URL}/images/sign2.png`} alt="menu" style={{height: "100%", width: "100%"}} />
                <div id="logo-text" style={{width: "100%", height: this.state.logoHeight, position: "absolute", top: "0", left: "0", fontSize: "20px", textAlign:"center", paddingTop:"12%", color:"white"}}>
                  <h1 style={{ fontSize: "2.5em" }}>Lion King</h1>
                  <h3 style={{ fontSize: "1.75em" }}>Memory Game</h3>
                </div>
                <div id="menu-text" style={{...menuStyle, ...{height: this.state.height}}}>
                  <br />
                  <p style={color}>{this.state.result}</p>
                  <br />
                  <p>Score</p>
                  <p>{this.state.score}</p>
                  <p>High Score</p>
                  <p>{this.state.highScore}</p>
                </div>
              </div>
            </div>
            <div className="col-9" style={{ paddingRight:"35px" }}>
              <div className="row">
                <div className="card-deck">
                  {characterList.slice(0,4)}
                </div>
              </div>
              <div className="row">
                <div className="card-deck">
                  {characterList.slice(4,8)}
                </div>
              </div>
              <div className="row">
                <div className="card-deck">
                  {characterList.slice(8,12)}
                </div>
              </div>
            </div>
          </div>  
        </div>
    );
  };  
}

export default App;
