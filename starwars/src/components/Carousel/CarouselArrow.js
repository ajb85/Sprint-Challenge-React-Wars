import React from "react";
import "./carousel.css";
// updateIndex={this.updateIndex} operation={-1}
export default function CaroselArrow(props) {
  //const carrot = props.operation > 0 ? ">" : "<";
  return (
    <button
      onClick={() => props.updateIndex(props.operation)}
      className="arrow"
    >
      NEW DOG
    </button>
  );
}
