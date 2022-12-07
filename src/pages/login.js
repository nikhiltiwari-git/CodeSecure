import React from "react";
import "./login.css";
import Sign from "./Sign";

function Login() {

  return (
    
    <div className="login">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="login__logo">
        <img
          src="https://media.tenor.com/Z2f9SbnfmwcAAAAi/gigachat-gigachatter.gif"
          alt=""
        />
      </div>

      <h2 className="loginh2">
        Let's Jump Straight into it
      </h2>
      
      <h2 className="loginh2">
        <i class="fas fa-angle-down"></i>
      </h2>
    
      <Sign/>
    </div>
  );
}

export default Login;