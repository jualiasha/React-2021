import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>You are going to send next info:</h1>
        <p>First name:{props.firstname}</p>
        <p>Last name: {props.lastname} </p>
        <p>Phone number: {props.phonenumber} </p>
        <p>Message: {props.message} </p>
        <p>Role: {props.role} </p>
        <button id="close" onClick={closeHandler}>
          X Close
        </button>
        <div className="submit_buttons">
          <button className="green" onClick={closeHandler}>
            Yes, I am Sure
          </button>
          <button className="red" onClick={closeHandler}>
            No, want to change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
