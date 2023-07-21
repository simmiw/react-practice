import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2> React Exercises</h2>
      <li>
        <Link to="./click-capturing">Click capturing</Link>
      </li>
      <li>
        <Link to="/character-counter">Character counter</Link>
      </li>
      <li>
        <Link to="/color-switcher">Color switcher</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
      <li>
        <Link to="/todo-app"> ToDo App</Link>
      </li>
      <li>
        <Link to="/toggle-app"> Toggle App</Link>
      </li>
      <li>
        <Link to="/userdetails"> UserDetails </Link>
      </li>
      <li>
        <Link to="/promise-all"> Promise.All</Link>
      </li>
    </>
  );
};
export default Home;
