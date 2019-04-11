import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

const defaultMsg = "Click on an image to begin!";

class App extends Component {
  state = {
    characters,
    alreadyChosen: [],
    result: "",
    score: 0
  };

  checkAnswer = id => {
    if (this.state.alreadyChosen.indexOf(id) !== -1) {
      this.setState({ 
        result: "You answered incorrectly!",
        score: 0 
      });
    } else {
      this.setState({
        alreadyChosen: this.state.alreadyChosen.concat(id),
        result: "You answered correctly!",
        score: this.state.score + 1
      });
    }
    console.log(this.state.result);
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row navbar-background">
            <NavBar result={this.state.score === 0 ? defaultMsg : this.state.result} score={this.state.score} />
          </div>
          <div className="row">
            {this.state.characters.sort(() => (.5 - Math.random())).map(character => (
              <CharacterCard
              checkAnswer={this.checkAnswer}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
            ))}
          </div>  
        </div>
      </Wrapper>
    );
  };  
}

export default App;
