import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // this stops refresh

    //do the login logic

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); // this stops refresh

    //do the register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://mpng.subpng.com/20180421/kce/kisspng-amazon-com-amazon-video-logo-company-brand-amazon-logo-5adb717b634118.2383797415243308754066.jpg"
          className="login__logo"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of business to ssee our
          Privacy Notice, Our Cookies Notice and our interest based ad-notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
