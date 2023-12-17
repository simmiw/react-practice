import React from "react";
import "./App.scss";
import Home from "./concepts/home/Home";
import CapturingClick from "./concepts/capturing-clicks/CapturingClick";
import CharacterCounter from "./concepts/character-counter/CharacterCounter";
import ColorSwitcher from "./concepts/color-switcher/ColorSwitcher";
import InputForm from "./concepts/input-form/inputform";
import ToDo from "./concepts/todo-app/ToDo";
import Toggle from "./concepts/toggle-app/Toggle";
import List from "./concepts/userdetails-list/List";
import PromiseAll from "./concepts/promise-all/PromiseAll";
import { Routes, Route } from "react-router-dom";
import TemperatureConverter from "./concepts/temperature-converter/temperatureConverter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/click-capturing" element={<CapturingClick />} />
        <Route path="/character-counter" element={<CharacterCounter />} />
        <Route path="/color-switcher" element={<ColorSwitcher />} />
        <Route path="/form" element={<InputForm />} />
        <Route path="/temperature-converter" element={<TemperatureConverter />} />
        <Route path="/todo-app" element={<ToDo />} />
        <Route path="/toggle-app" element={<Toggle />} />
        <Route path="/userdetails" element={<List />} />
        <Route path="/promise-all" element={<PromiseAll />} />
      </Routes>
    </>
  );
}

export default App;
