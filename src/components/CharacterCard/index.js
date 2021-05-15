import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="col">
      <div className="card" id={props.id} onClick={() => props.checkAnswer(props.id)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
