import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    alreadyChosen: [],
    result: "correct",
    score: 0
  };

  checkAnswer = id => {
    if (this.state.alreadyChosen.indexOf(id) !== -1) {
      this.setState({ 
        result: "incorrect",
        score: 0 
      });
    } else {
      this.setState({
        alreadyChosen: this.state.alreadyChosen.concat(id),
        result: "correct",
        score: this.state.score + 1
      });
    }
    console.log(this.state.result);
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Your answer is {this.state.result}</h1>
        <div className="container">
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
