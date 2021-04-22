import { Component } from "react";
import Forms from "./Components/Forms";
import View from "./Components/View";
import Popup from "./Components/Popup";
import "./App.css";
import NotesList from "./Components/NotesList";
/*import { BrowserRouter as Router } from "react-router-dom";*/

class App extends Component {
  state = {
    inputdata: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
    showpopup: false,
    notes: [],
  };
  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => this.setState({ notes: data }));
  }

  inputValueHandler = (event) => {
    this.setState({
      inputdata: {
        ...this.state.inputdata,
        [event.target.name]: event.target.value,
      },
    });
  };

  popupHandler = (event) => {
    event.preventDefault();

    this.setState({
      showpopup: true,
    });
  };

  sendDataHendler = () => {
    const requestOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(
        this.state.inputdata
      ) /*because we already have object inputdata*/,
    };
    fetch("http://localhost:3001/notes", requestOption);
    /* .then((resp) => resp.json())
      .then((data) => this.setState({ postId: data.id })); */
    alert("Note is posted", window.location.reload());
  };

  render() {
    /* const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      message: this.state.message,
      role: this.state.role,
    }; */
    return (
      <div>
        {this.state.showpopup && (
          <Popup
            {...this.state.inputdata}
            submit={this.sendDataHendler}
            /* firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            role={this.state.role} */
          />
        )}
        <Forms input={this.inputValueHandler} submit={this.popupHandler} />
        <View
          {...this.state.inputdata}
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
