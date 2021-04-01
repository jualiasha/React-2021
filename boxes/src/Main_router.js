import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <h1>This is the gallery page</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

const Main_router = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/gallery" component={Gallery}></Route>
      </Switch>
    </div>
  );
};

export default Main_router;
