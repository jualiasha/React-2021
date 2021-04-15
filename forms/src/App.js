import { Component } from "react";
import Forms from "./Components/Forms";
import View from "./Components/View";
import Popup from "./Components/Popup";
import "./App.css";
/*import { BrowserRouter as Router } from "react-router-dom";*/

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    showpopup: false,
  };
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
    return (
      <div>
        <Forms input={this.InputValueHandler} submit={this.PopupHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role}
        />
        {this.state.showpopup && (
          <Popup
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            role={this.state.role}
          />
        )}
      </div>
    );
  }
}

export default App;
