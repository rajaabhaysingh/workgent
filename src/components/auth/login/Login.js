import React, { useState, useContext, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";

// importing contexts
import { searchBarContext } from "../../../App";
import { GlobalContext } from "../../../contexts/Provider";

// importing utilities functions
import { getUrlParams } from "../../../Utilities";

const Login = () => {
  let history = useHistory();

  // local state management
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);

  // using imported context
  const {
    isSearchBarVisible,
    setIsSearchBarVisible,
    setSearchBarVisibleClass,
    setSearchBarClass,
  } = useContext(searchBarContext);

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  // hiding search bar by default
  useEffect(() => {
    if (isSearchBarVisible) {
      setIsSearchBarVisible(() => false);
      setSearchBarVisibleClass(() => "search_hidden_body h-100 w-100");
      setSearchBarClass(() => "search_bar_hidden pos_abs fcc w-100");
    }
  }, []);

  // handleLogIn
  const handleLogIn = async () => {
    return;
  };

  // renderViewPwdBtn
  const renderViewPwdBtn = () => {
    if (!pwdVisible) {
      return (
        <button
          type="button"
          className="btn fccc input_assist_btn input_assist_btn_pos cur"
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
          className="btn fccc input_assist_btn input_assist_btn_pos cur"
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

  console.log(data.data);

  return (
    <div className="fccc h-100 w-100">
      <div className="fcc fsxl h-80 w-80 bg_pink_grad fc_white round-complete shadow_0-0-6-light z-10">
        <i className="fas fa-user-lock"></i>
      </div>
      <form
        className="login_box mar_t--40 fccc bg_white shadow_0-0-4-light"
        onSubmit={handleLoginAndRedirectBack}
      >
        <div className="fsxl fwb m_r_t-32">Sign in</div>
        <div className="m_r_t-16 fss fwb">
          Use your workgent account to login, {data?.data.username}
        </div>
        <div className="fsxs m_r_t-32 w-100">E-mail/Mobile number:</div>
        <input
          type="text"
          placeholder="Enter email-id/mobile number"
          className="w-100 h-40 mar_t-4 inp_pri pad_0-8 fsm focus-blur fwb"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {isUsernameError && (
          <div className="fc_err fsxs w-100 mar_t-4">
            Invalid email address.
          </div>
        )}
        <Link
          className="link link-active fwb fsm mar_t-8 w-100 align-r"
          to="/recover/email"
        >
          Forgot email?
        </Link>
        <div className="fsxs w-100">Password:</div>
        <div className="fcc w-100 pos_rel">
          <input
            type={pwdVisible ? "text" : "password"}
            placeholder="Password"
            className="w-100 h-40 mar_t-4 inp_pri pad_0-8 fsm focus-blur fwb"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {renderViewPwdBtn()}
        </div>
        <Link
          className="link link-active fwb fsm mar_t-8 w-100 align-r"
          to="/recover/password"
        >
          Forgot password?
        </Link>
        <div className="fcc w-100 m_r_t-16">
          <input
            type="checkbox"
            name="keepMeLoggedIn"
            id="keepMeLoggedIn"
            className="cur"
            checked={keepMeSignedIn}
            onChange={(e) => {
              setKeepMeSignedIn(e.target.checked);
            }}
          />
          <label className="w-100 mar_l-4 fsm cur" htmlFor="keepMeLoggedIn">
            Keep me logged in
          </label>
        </div>
        <button
          className="btn btn_pri m_r_t-32 h-40 bb fcc w-100 bg_pri cur fc_white fsm round-8 fwb"
          type="submit"
        >
          CONTINUE
        </button>
      </form>
      <div className="login_box fc_bw mar_t-4 fsm w-100">
        <Link className="link fc-5c fwb" to="/register">
          New to workgent? SIGN UP
        </Link>
        <div>
          <Link className="link fc-5c" to="/terms">
            Terms
          </Link>
          <Link className="mar_l-16 link fc-5c" to="/help">
            Help
          </Link>
        </div>
      </div>
      <div className="m_r_t-32 fsxs fwb fc_8a">Copyright © Workgent 2020.</div>
    </div>
  );
};

export default Login;
