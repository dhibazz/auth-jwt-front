import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import './LoginUi.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import profile from "../components/images/a.png";
import email from "../components/images/email.jpg";
import pass from "../components/images/pass.png";
import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="main">
      <div className="sub-main ">
      <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>
           </div>

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
          <h4>Sig In</h4>
          <div>
          <img src={email} alt="email" className="email"/>
          </div>
            <label htmlFor="pass"></label>
            <Input
             type="text" placeholder="username" className="name"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="second-input">
            <label htmlFor="password"></label>
            <img src={pass} alt="pass" className="email"/>
            <Input
              type="password"
              placeholder="password" className="name"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="login-button">
          
              <button>Login</button>
      
          </div>
          <p className="link">
            <a >Don't have an account?</a><a href="#">Sign Up</a>
            </p>
            <p className="link">
              <a href="#">Forgot password ?</a> 
           </p>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    </div>

  );
};

export default Login;