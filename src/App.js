import React from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import useRoutes from "./hooks";

function App() {
  const routes =  useRoutes()

  return (
    <Routes>
      {routes.map(({ link, component: Component }) => {
        return <Route key={link} path={link} element={<Component />} />
      })}
    </Routes>
  )
}


export default App;
