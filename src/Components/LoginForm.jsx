import React, { useState } from "react";
import "./LoginForm.css";

const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const [fullName, setFullName] = useState("");
  const [fullLastName, setFullLastName] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setFullLastName(lastname);
  };
  const inputElement = (e) => {
    setName(e.target.value);
  };
  const inputElementTwo = (e) => {
    setLastname(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>Hii welcome {fullName}</h1>
        <form onSubmit={onSubmits}>
        <label htmlFor="first_name">Login ID</label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={inputElement}
            value={name}
          />
          <label htmlFor="last_name">Password</label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={inputElementTwo}
            value={lastname}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
export default Form;
