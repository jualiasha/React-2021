import React from "react";

const Box = (props) => {
  return (
    <div className="boxes">
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{props.age}</p>
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <Box name="Julia" age="36" title="CEO" />
      <Box name="Maria" age="35" title="developer" />
      <Box name="Heli" age="31" title="designer" />
      <Box name="Huanna" age="34" title="scrum master" />
    </main>
  );
};

export default Main;
