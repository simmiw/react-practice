import React from "react";
import { Link } from "react-router-dom";

export const listOfConcepts = [
  {
    title: "Click Capturing",
    link: "/click-capturing"
  },
  {
    title: "Character counter",
    link: "/character-counter"
  },
  {
    title: "Color switcher",
    link: "/color-switcher"
  },
  {
    title: "Form",
    link: "/form"
  },
  {
    title: "ToDo App",
    link: "/todo-app"
  },
  {
    title: "Toggle App",
    link: "/toggle-app"
  },
  {
    title: "Temperture converter",
    link: "/temperature-converter"
  },
  {
    title: "User Details",
    link: "/userdetails"
  },
  {
    title: "Promise.All",
    link: "/promise-all"
  }
]

const Home = () => {
  return (
    <>
      <h2> React Exercises</h2>
      <ul>
        {listOfConcepts.map(({ title, link }) => {
          return <li key={title}><Link to={link}>{title}</Link></li>
        })}
      </ul>
    </>
  );
};
export default Home;
