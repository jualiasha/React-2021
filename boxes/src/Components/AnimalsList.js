import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import { animals } from "./animals";
import "./Animal.css";
import SearchBox from "./SearchBox/SearchBox";

class AnimalsList extends Component {
  state = {
    animals: animals /* [
      { id: 1, name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/" },
      {
        id: 2,
        name: "Rabbit",
        img: "https://source.unsplash.com/hS41iEO300E/",
      },
      { id: 3, name: "Wolf", img: "https://source.unsplash.com/WFPWB7Vum1E/" },
    ], */,
    searchInput: "",
  };
  clickHandler = (name) => {
    alert("Hello, my name is " + name);
  };

  SearchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput);
  };

  render() {
    const animalfilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const animalslist = animalfilter.map((animal) => {
      return (
        <AnimalCard
          name={animal.name}
          clickme={() => this.clickHandler(animal.name)}
          /* clickme={this.clickHandler.bind(this, animal.name)} */
          key={animal.name}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.SearchValueHandler} />
        <div className="animallist">{animalslist}</div>
      </div>
    );
  }
}

export default AnimalsList;
