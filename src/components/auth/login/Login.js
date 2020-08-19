import React, { useState, useContext, useEffect } from "react";
import "../../../styles/styles.css";

import { useHistory } from "react-router-dom";

// importing contexts
import { userContext } from "../../../App";

// importing utilities functions
import { LoginUser, getUrlParams } from "../../../Utilities";

const Login = ({ continueText }) => {
  let history = useHistory();

  // local state management
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(true);
  const [pwdVisible, setPwdVisible] = useState(false);

  // using imported context
  const { user, setUser } = useContext(userContext);

  // if a user visits login-page he/she must be logged out first
  useEffect(() => {
    // removing login info from local storage
    localStorage.removeItem("isCurrentlyLoggedIn");
    localStorage.removeItem("username");

    // logging out locally too
    setUser(() => {
      return {
        ...user,
        isLoggedIn: false,
        userName: undefined,
        accessToken: undefined,
      };
    });
  }, [setUser]);

  // handleLogIn
  // returns True if login was successful otherwise False
  const handleLogIn = async () => {
    // calling LoginUser imported from Utilities
    const loginData = await LoginUser(username, password);

    if (loginData.status === 200) {
      // add login info to local storage
      localStorage.setItem("isCurrentlyLoggedIn", true);
      localStorage.setItem("username", username);

      // log in user locally too
      setUser(() => {
        return {
          isLoggedIn: true,
          userName: username,
          accessToken: loginData.data.access,
        };
      });

      console.log("Login successful: ", loginData);
      setUsername("");
      setPassword("");
      return true;
    } else {
      console.log("Couldn't log in: ", loginData);
      setPassword("");
      return false;
    }
  };

  // renderViewPwdBtn
  const renderViewPwdBtn = () => {
    if (!pwdVisible) {
      return (
        <button
          type="button"
          onClick={() => {
            setPwdVisible(() => {
              return true;
            });
          }}
        >
          <i className="fas fa-eye"></i>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={() => {
            setPwdVisible(() => {
              return false;
            });
          }}
        >
          <i className="fas fa-eye-slash"></i>
        </button>
      );
    }
  };

  // handleLoginAndRedirectBack
  const handleLoginAndRedirectBack = async (e) => {
    e.preventDefault();
    const params = getUrlParams(window.location.search);

    if (await handleLogIn()) {
      //   whoa !! login succeeded
      // now if url contains continue params, redirect to it, else to homepage

      if (params.destination) {
        //   redirect to destination
        window.location.replace(params.destination);
      } else {
        history.push("/");
      }
    } else {
      //   try logging in again
    }
  };

  return (
    <div className="pad-8">
      {continueText && <div>Please login to continue.</div>}
      <form onSubmit={handleLoginAndRedirectBack}>
        <input
          type="text"
          placeholder="E-mail"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div className="fc_err fsxs">Invalid email address.</div>
        <div>
          <input
            type={pwdVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {renderViewPwdBtn()}
        </div>
        <div className="bor_err-1 bg_err-light fsxs fc_err pad-12">
          <i className="fas fa-exclamation-triangle mar_r-4"></i> Login failed.
          Invalid email/password.
        </div>
        <input
          type="checkbox"
          name="keepMeLoggedIn"
          id="keepMeLoggedIn"
          checked={keepMeSignedIn}
          onChange={(e) => {
            setKeepMeSignedIn(e.target.checked);
          }}
        />
        <label htmlFor="keepMeLoggedIn">Keep me logged in</label>
        <button type="submit">LOGIN</button>
        <div className="bor_succ-1 bg_succ-light fsxs fc_succ pad-12">
          <i className="fas fa-check-circle mar_r-4"></i> Login successful.
          Redirecting...
        </div>
      </form>
    </div>
  );
};

export default Login;
