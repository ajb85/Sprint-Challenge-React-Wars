import React from "react";
//import { Image } from "react-native";
import "./charCard.css";
//props: char (img);
export default function CharCard(props) {
  console.log("props: ", props.char);
  return (
    <div className="charCard">
      <img src={props.char} />
    </div>
  );
}
