import { Component } from "react";
import "./App.css";
import Circle from "./Components/Circle";

class App extends Component {
  state = {
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
    ],
  };
  render() {
    return (
      <div className="center">
        <h1>Speedtest</h1>
        <p>Your score is:</p>
        <section id="circles">
          {this.state.circles.map((c) => {
            return <Circle id={c.id} color={c.color} key={c.id} />;
          })}
        </section>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default App;
