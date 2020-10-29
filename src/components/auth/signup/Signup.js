import React, { useState, useEffect, useContext } from "react";

import { useHistory, Link } from "react-router-dom";

import { register } from "../../../contexts/actions/register";

// importing contexts
import { searchBarContext } from "../../../App";

const Signup = () => {
  // local state management
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const [isPwdError, setIsPwdError] = useState(false);
  const [pwdErrorMsg, setPwdErrorMsg] = useState("Invalid password.");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);

  // using imported context
  const {
    isSearchBarVisible,
    setIsSearchBarVisible,
    setSearchBarVisibleClass,
    setSearchBarClass,
  } = useContext(searchBarContext);

  // hiding search bar by default
  useEffect(() => {
    if (isSearchBarVisible) {
      setIsSearchBarVisible(() => false);
      setSearchBarVisibleClass(() => "search_hidden_body h-100 w-100");
      setSearchBarClass(() => "search_bar_hidden pos_abs fcc w-100");
    }
  }, []);

  useEffect(() => {
    register();
  }, []);

  // handleSignUp
  const handleSignUp = async (e) => {
    e.preventDefault();

    // regex for email format
    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pwd_regex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;

    // validate email
    if (!email_regex.test(String(username).toLowerCase())) {
      setIsUsernameError(() => true);
    } else {
      setIsUsernameError(() => false);
    }

    // validate password
    if (password.length < 8) {
      setPwdErrorMsg(() => "Minimum 8 characters required.");
      setIsPwdError(() => true);
    } else if (!pwd_regex.test(password)) {
      setPwdErrorMsg(() => "Password must be alpha-numeric.");
      setIsPwdError(() => true);
      setCnfPassword(() => "");
    } else if (password !== cnfPassword) {
      setPwdErrorMsg(() => "Your password didn't match.");
      setIsPwdError(() => true);
      setCnfPassword(() => "");
    } else {
      setIsPwdError(() => false);
      // continue signup
    }
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

  // renderContinueBtn
  const renderContinueBtn = () => {
    if (agreeTerms) {
      return (
        <button
          className="btn btn_pri m_r_t-32 h-40 bb fcc w-100 bg_pri cur fc_white fsm round-8 fwb"
          type="submit"
        >
          CONTINUE
        </button>
      );
    } else {
      return (
        <button
          className="btn m_r_t-32 h-40 bb fcc w-100 bg-light-gray fc_black fsm round-8 fwb"
          type="button"
        >
          CONTINUE
        </button>
      );
    }
  };

  return (
    <div className="fccc h-100 w-100">
      <div className="fcc fsxl h-80 w-80 bg_pink_grad fc_white round-complete shadow_0-0-6-light z-10">
        <i className="fas fa-user-plus"></i>
      </div>
      <form
        className="login_box mar_t--40 fccc bg_white shadow_0-0-4-light"
        onSubmit={handleSignUp}
      >
        <div className="fsxl fwb m_r_t-32">Sign up</div>
        <div className="m_r_t-16 fss fwb">Create your account and join us.</div>

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
        <div className="fsxs m_r_t-8 w-100">Password:</div>
        <div className="fcc w-100 pos_rel">
          <input
            type={pwdVisible ? "text" : "password"}
            placeholder="Enter password"
            className="w-100 h-40 mar_t-4 inp_pri pad_0-8 fsm focus-blur fwb"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {renderViewPwdBtn()}
        </div>
        <div className="fcc w-100 pos_rel">
          <input
            type="password"
            placeholder="Confirm password"
            className="w-100 h-40 mar_t-4 inp_pri pad_0-8 fsm focus-blur fwb"
            value={cnfPassword}
            onChange={(e) => {
              setCnfPassword(e.target.value);
            }}
          />
          {/* {renderViewPwdBtn()} */}
        </div>
        {isPwdError && (
          <div className="fc_err fsxs w-100 mar_t-4">{pwdErrorMsg}</div>
        )}
        <div className="fcc w-100 m_r_t-16">
          <input
            type="checkbox"
            name="keepMeLoggedIn"
            id="keepMeLoggedIn"
            className="cur"
            checked={agreeTerms}
            onChange={(e) => {
              setAgreeTerms(e.target.checked);
            }}
          />
          <label className="w-100 mar_l-8 fsxs cur" htmlFor="keepMeLoggedIn">
            I agree to Workgent's{" "}
            <Link className="link link-active fwb" to="/terms" target="_blank">
              Terms {"&"} conditions
            </Link>{" "}
            and{" "}
            <Link
              className="link link-active fwb"
              to="/privacy_policy"
              target="_blank"
            >
              Privacy policy
            </Link>
            .
          </label>
        </div>
        {renderContinueBtn()}
      </form>
      <div className="login_box fc_bw mar_t-4 fsm w-100 bb">
        <Link className="link fc-5c fwb" to="/login">
          Already registered? SIGN IN
        </Link>
        <div>
          <Link className="link fc-5c" to="/terms" target="_blank">
            Terms
          </Link>
          <Link className="mar_l-16 link fc-5c" to="/help" target="_blank">
            Help
          </Link>
        </div>
      </div>
      <div className="m_r_t-32 fsxs fwb fc_8a">Copyright © Workgent 2020.</div>
    </div>
  );
};

export default Signup;
