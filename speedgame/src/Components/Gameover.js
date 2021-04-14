import React from "react";
import "./Gameover.css";

const closeHandler = () => {
  window.location.reload();
};

const Gameover = (props) => {
  return (
    <section id="popup">
      <p onClick={closeHandler} id="close">
        Close X
      </p>
      <h2>Ups,game is over!</h2>

      <p>
        {props.score === 0
          ? `Your score is: ${props.score}, come on you can do better`
          : `Your score is: ${props.score}, may be try one more time`}{" "}
      </p>
    </section>
  );
};

export default Gameover;
