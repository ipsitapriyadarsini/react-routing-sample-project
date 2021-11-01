import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Input from "./Components/Input";
import Form from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";

const App = () => {
  return (
    <>
      <Menu />

      <Switch>
        <Route exact path="/" component={Input} />
        <Route path="/loginform" component={Form} />
        <Route path="/RegistrationForm" component={RegistrationForm} />
      </Switch>
    </>
  );
};

export default App;
