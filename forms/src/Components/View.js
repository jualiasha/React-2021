import React from "react";

const View = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="view">
      <h1>Check your Form</h1>
      <p>
        First name:<span> {firstname}</span>
      </p>
      <p>
        Last name:<span> {lastname}</span>{" "}
      </p>
      <p>
        Phone number: <span>{phonenumber}</span>{" "}
      </p>
      <p>
        Message:<span> {message}</span>{" "}
      </p>
      <p>
        Role:<span> {role} </span>
      </p>
    </div>
  );
};

export default View;
