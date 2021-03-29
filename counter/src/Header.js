import React from "react";

let today = new Date();

const Header = () => {
  return (
    <header>
      <h1>Counter App</h1>
      <h1>
        {today.getDate()}.{today.getMonth() + 1}.{today.getFullYear()}
      </h1>
    </header>
  );
};

export default Header;
