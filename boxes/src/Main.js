import React, { Component } from "react";

const Box = (props) => {
  return (
    <div className="boxes">
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{props.age}</p>
      <button onClick={clickMe}>Contact</button>
    </div>
  );
};

const clickMe = () => {
  console.log("wow");
};

class Main extends Component {
  state = {
    persons: [
      {
        name: "Julia",
        age: 36,
        title: "CEO",
      },
      {
        name: "Maria",
        age: 35,
        title: "des",
      },
      {
        name: "Hulia",
        age: 32,
        title: "scrum",
      },
    ],
  };
  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "Kuku",
          age: 36,
          title: "CEO",
        },
        {
          name: "WOw",
          age: 35,
          title: "des",
        },
        {
          name: "YES",
          age: 32,
          title: "scrum",
        },
      ],
    });
  };
  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Click me from main</button>
        <Box
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
        />
        <Box
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <Box
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
        />
      </main>
    );
  }
}

/* const Main = () => {
  return (
    <main>
      <Box name="Julia" age="36" title="CEO" />
      <Box name="Maria" age="35" title="developer" />
      <Box name="Heli" age="31" title="designer" />
      <Box name="Huanna" age="34" title="scrum master" />
    </main>
  );
}; */

export default Main;
