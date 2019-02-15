import React, { Component } from "react";
import NewCharCard from "./components/CharCard/NewCharCard.js";
import CarouselArrow from "./components/Carousel/CarouselArrow.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 10,
      currentChar: {},
      nextChar: {},
      prevChar: {}
    };
  }

  componentDidMount() {
    this.getCharacters(
      `https://dog.ceo/api/breeds/image/random`,
      "currentChar"
    );
    //this.getCharacters(`https://swapi.co/api/people/10/`, "prevChar");
    //this.getCharacters(`https://swapi.co/api/people/2/`, "nextChar");
  }
  cycleChars = operation => {
    //   let { prevChar, currentChar, nextChar } = this.state;
    //   const { index } = this.state;
    //   const prevIndex = index - 1 <= 0 ? 10 : index - 1;
    //   const nextIndex = index + 1 >= 10 ? 0 : index + 1;
    //
    //   if (operation) {
    //     prevChar = currentChar;
    //     currentChar = nextChar;
    //     this.getCharacters(
    //       `https://swapi.co/api/people/${nextIndex}/`,
    //       "nextChar"
    //     );
    //   } else {
    //     nextChar = currentChar;
    //     currentChar = prevChar;
    //     this.getCharacters(
    //       `https://swapi.co/api/people/${prevIndex}/`,
    //       "prevChar"
    //     );
    //   }
    //   this.setState({ prevChar, currentChar, nextChar });
    // };
    // updateIndex = operation => {
    //   let { index } = this.state;
    //   index += operation;
    //   this.setState({ index }, () => this.cycleChars());

    this.getCharacters(
      `https://dog.ceo/api/breeds/image/random`,
      "currentChar"
    );
  };

  getCharacters = (URL, state) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ [state]: data.message });
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  };

  render() {
    // const chars = this.state.starwarsChars.map((char, i) => (
    //   <NewCharCard char={char} key={char.url} />
    // ));
    const char = Object.keys(this.state.currentChar).length ? (
      <NewCharCard
        char={this.state.currentChar}
        key={this.state.currentChar.url}
      />
    ) : (
      "Loading..."
    );
    return (
      <div className="App">
        <h1 className="Header">LOOK AT THESE DOGS!</h1>
        <h2 className="charHeader">LOOK AT THEM!</h2>
        <div className="charContainer">
          {char}
          <CarouselArrow updateIndex={this.cycleChars} operation={1} />
        </div>
      </div>
    );
  }
}

export default App;
