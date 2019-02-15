import React, { Component } from "react";
import NewCharCard from "./components/CharCard/NewCharCard.js";
import CarouselArrow from "./components/Carousel/CarouselArrow.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 10,
      starwarsChars: {},
      nextChar: {},
      prevChar: {}
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/${this.state.index}/`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data });
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
    const char = Object.keys(this.state.starwarsChars).length ? (
      <NewCharCard
        char={this.state.starwarsChars}
        key={this.state.starwarsChars.url}
      />
    ) : (
      "Loading..."
    );
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h2 className="charHeader">Characters</h2>
        <div className="charContainer">{char}</div>
      </div>
    );
  }
}

export default App;
