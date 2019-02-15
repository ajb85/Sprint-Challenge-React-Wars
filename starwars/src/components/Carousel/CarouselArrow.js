import React from "react";
import "./carousel.css";

export default function CaroselArrow(props) {
  const carrot = props.operation ? ">" : "<";
  return <div className="arrow">{carrot}</div>;
}
