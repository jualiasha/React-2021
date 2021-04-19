import { Component } from "react";
import Forms from "./Components/Forms";
import View from "./Components/View";
import Popup from "./Components/Popup";
import "./App.css";
import NotesList from "./Components/NotesList";
/*import { BrowserRouter as Router } from "react-router-dom";*/

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    showpopup: false,
    notes: [],
  };
  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => this.setState({ notes: data }));
  }

  InputValueHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  PopupHandler = (event) => {
    event.preventDefault();

    this.setState({
      showpopup: true,
    });
  };

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      message: this.state.message,
      role: this.state.role,
    };
    return (
      <div>
        {this.state.showpopup && (
          <Popup
            {...props}
            /* firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            role={this.state.role} */
          />
        )}
        <Forms input={this.InputValueHandler} submit={this.PopupHandler} />
        <View
          {...props}
          /* firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role} */
        />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
