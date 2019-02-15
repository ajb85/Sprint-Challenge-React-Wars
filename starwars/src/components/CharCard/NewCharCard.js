import React from "react";
import "./charCard.css";

export default function CharCard(props) {
  return (
    <div className="charCard">
      <h2>Name:</h2> <p>{props.char.name}</p>
      <h2>Gender:</h2> <p>{props.char.gender}</p>
      <h2>Height:</h2> <p>{props.char.height} cm</p>
      <h2>Weight:</h2> <p>{props.char.mass} kg</p>
      <h2>Birth Year:</h2> <p>{props.char.birth_year}</p>
    </div>
  );
}
