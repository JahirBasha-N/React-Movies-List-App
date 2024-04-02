import React, { Fragment, useState } from "react";
import Input from "./common/Input";

const Login = () => {
  const [account, setAccount] = useState({
    userName: "",
    password: "",
  });

  const changeHandler = (event, name) => {
    let {
      target: { value },
    } = event;
    setAccount({ ...account, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted", e);
  };
  console.log("Login Rendered");
  return (
    <Fragment>
      <div className="container">
        <form onSubmit={submitHandler}>
          <Input
            name="userName"
            displayName="Email Address"
            type="email"
            value={account.userName}
            changeHandler={changeHandler}
          />
          <Input
            name="password"
            displayName="Password"
            type="password"
            value={account.password}
            changeHandler={changeHandler}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
