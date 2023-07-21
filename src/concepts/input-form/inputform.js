import React, { useState } from "react";

const InputForm = () => {
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  const pushName = (event) => {
    setCurrentName(event.target.value);
  };

  const pushEmail = (event) => {
    setCurrentEmail(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={currentName}
        placeholder="Enter your name"
        onChange={pushName}
      />
      <br />
      <br />

      <input
        type="text"
        value={currentEmail}
        placeholder="Enter your email"
        onChange={pushEmail}
      />
      <br />
      <br />
      <div>{currentName}</div>
      <div>{currentEmail}</div>
    </>
  );
};

export default InputForm;
