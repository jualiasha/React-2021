import { Component } from "react";
import "./App.css";
import Circle from "./Components/Circle";
import Gameover from "./Components/Gameover";
import startsound from "./sounds/no-mozart.mp3";
import endsound from "./sounds/GAME-OVER.mp3";

let gameStartSound = new Audio(startsound);
let gameEndSound = new Audio(endsound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
      { id: 5, color: "black" },
      { id: 6, color: "white" },
    ],
    showGameOver: false,
    score: 0,
    current: 0,
    rounds: 0,
    gameStart: false,
  };
  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log("wow, you clicked a circle" + id);
    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 6);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    console.log("Round:" + this.state.rounds);
    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("active circle is", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({
      gameStart: true,
    });
    gameStartSound.play();
  };

  endHandler = () => {
    gameStartSound.pause();
    gameEndSound.play();
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.color}
          color={c.color}
          click={() => this.clickHandler(c.id)}
          active={this.state.current === c.id}
          disabled={this.state.gameStart}
        />
      );
    });
    return (
      <div className="center">
        <h1>Speedtest</h1>
        <p>Your score is: {this.state.score}</p>
        <section id="circles">{circlesList}</section>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>
          Start
        </button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOver && <Gameover score={this.state.score} />}
      </div>
    );
  }
}

export default App;
