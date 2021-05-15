import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Menu from "./components/Menu";
import characters from "./characters.json";
import "./App.css";

const defaultMsg = "Click on a character to begin!";

let component;

class App extends Component {
  state = {
    characters,
    alreadyChosen: [],
    result: defaultMsg,
    score: 0,
    highScore: 0,
    height: 0,
    logoHeight: 0
  };

  componentDidMount() {
    component = this;
    // window.onresize = () => this.rescale();
    // this.rescale();
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
  };

  rescale() {
    // const logo = document.getElementById("logo");

    // component.setState({
    //   height: (logo.parentElement.offsetHeight - logo.offsetHeight)+"px",
    //   logoHeight: logo.offsetHeight + "px"
    // });
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
    const color = this.state.highScore > 0 ? {color: currColor} : {};
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-3">
              <Menu rescale={this.rescale} height={this.state.Height} logo={this.state.logoHeight} score={this.state.score} highScore={this.state.highScore} result={this.state.result} color={color} />
            </div>
            <div className="col-12 col-sm-9">
              <div className="row row-cols-3 row-cols-sm-4">
                {characterList}
              </div>
            </div>
          </div>  
        </div>
    );
  };  
}

export default App;
