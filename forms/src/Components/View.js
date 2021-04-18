import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <h1>Check your Form</h1>
      <p>
        First name:<span> {props.firstname}</span>
      </p>
      <p>
        Last name:<span> {props.lastname}</span>{" "}
      </p>
      <p>
        Phone number: <span>{props.phonenumber}</span>{" "}
      </p>
      <p>
        Message:<span> {props.message}</span>{" "}
      </p>
      <p>
        Role:<span> {props.role} </span>
      </p>
    </div>
  );
};

export default View;
