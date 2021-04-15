import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <h1>Check your Form</h1>
      <p>First name: {props.firstname}</p>
      <p>Last name: {props.lastname} </p>
      <p>Phone number: {props.phonenumber} </p>
      <p>Message: {props.message} </p>
      <p>Role: {props.role} </p>
    </div>
  );
};

export default View;
