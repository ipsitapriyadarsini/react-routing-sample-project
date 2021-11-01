import React, { useState } from "react";
import "./LoginForm.css";

const Input = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const inputElement = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const withSubmit = () => {
    setFullName(name);
  };
  return (
    <>
      <div className="container">
        <h1>Hii welcome {fullName}</h1>
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={inputElement}
            value={name}
            // id='name'
          />
          <button onClick={withSubmit}>click me</button>
        </form>
      </div>
    </>
  );
};

export default Input;
