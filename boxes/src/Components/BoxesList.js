import React, { Component } from "react";
import BoxCard from "./BoxCard";

class BoxesList extends Component {
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
        <BoxCard
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
        />
        <BoxCard
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <BoxCard
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

export default BoxesList;
