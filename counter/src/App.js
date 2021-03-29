import "./App.css";
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = {
    counter: 1000,
  };
  addone = () => {
    console.log("add");
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  removeone = () => {
    console.log("remove");
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  reset = () => {
    console.log("reset");
    this.setState({
      counter: 0,
    });
  };

  render() {
    let circleClass = `${
      this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
        ? "even"
        : "odd"
    } circle`;

    return (
      <div>
        <Header />
        <main>
          <h1 className={circleClass}>{this.state.counter}</h1>
          <section>
            <button onClick={this.addone}>Add one</button>
            <button onClick={this.removeone}>Remove one</button>
            <button onClick={this.reset}>Reset</button>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
