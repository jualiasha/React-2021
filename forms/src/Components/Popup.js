import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const Popup = (props) => {
  return (
    <div>
      <h1>You are going to send next info:</h1>
      <p>First name:{props.firstname}</p>
      <p>Last name: {props.lastname} </p>
      <p>Phone number: {props.phonenumber} </p>
      <p>Message: {props.message} </p>
      <p>Role: {props.role} </p>
      <button onClick={closeHandler}>X Close</button>
      <button onClick={closeHandler}>Yes, I am Sure</button>
      <button onClick={closeHandler}>No, want to change</button>
    </div>
  );
};

export default Popup;
