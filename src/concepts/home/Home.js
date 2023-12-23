import React from "react";
import { Link } from "react-router-dom";
import useRoutes from "../../hooks";


const Home = () => {
  const routes = useRoutes();
  return (
    <>
      <h2> React Exercises</h2>
      <ul>
        {routes.map(({ title, link }) => {
          return <li key={title}><Link to={link}>{title}</Link></li>
        })}
      </ul>
    </>
  );
};
export default Home;
