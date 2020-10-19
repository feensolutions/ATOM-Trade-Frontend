// This is the landing page of the app which is displayed when user opens the app

import React, { useState } from "react";
import Logo from "../Static/logo.png";
import "./LandingPage.css";
const LandingPage = () => {

    const[credentials,setCredentials]=useState({
        username:'',
        password:''
    })

    const change=(e)=>{
        setCredentials({...credentials,[e.target.id]:e.target.value})
    }
    const [error,setError]=useState({
        usernameError:"",
        passwordError:""
    })

    const submit=(e)=>{
        e.preventDefault()
        setError({
            usernameError:"",
            passwordError:""
        })
        if (credentials.username===""){
            setError({...setError,usernameError:"Invalid Username"})
        }
        else if(credentials.password===""){
            setError({...error,passwordError:"Empty Field"})
        }

        else{
            return
        }
    }
  return (
    <div className="landing__page">
      <div className="top">
        <nav className="navbar navbar-expand-md welcome-bar">
          <div className="container">
            <img src={Logo} alt="Hello" />
            <a className="navbar-brand mr-auto ml-3" href="#">
              Inventory Management System
            </a>
          </div>
        </nav>
      </div>

      <div className="bottom">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form action="">
              <div className="card">
          
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={credentials.username}
                      onChange={e=>change(e)}
                    />
                    <small className="text-danger">{error.usernameError}</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={credentials.password}
                      onChange={e=>change(e)}
                    />
                     <small className="text-danger">{error.passwordError}</small>
                  </div>
                  <button className="btn" type="submit" onClick={e=>submit(e)}>
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
