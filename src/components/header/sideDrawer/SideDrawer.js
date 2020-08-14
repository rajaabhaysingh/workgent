import React, { useContext } from "react";
import "../../../styles/styles.css";

import { NavLink } from "react-router-dom";
import { userContext } from "../../../App";

import * as Colors from "../../../constants/Colors";
import headerLogo from "../../../res/header/logo_72x72.png";

const SideDrawer = ({ sideDrawerRef, isDrawerOpen, setIsDrawerOpen }) => {
  // using imported context
  const { isLoggedIn, userName, token, setUser } = useContext(userContext);

  // handling drawer classes open/close
  let drawerClasses = "fcol bg_white side_drawer";
  if (isDrawerOpen) {
    drawerClasses = "fcol bg_white side_drawer drawer_open";
  }

  // closeDrawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // logOutUser
  const logOutUser = () => {
    // removing login info from local storage
    localStorage.removeItem("isCurrentlyLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("token");

    // logging out locally too
    setUser(() => {
      return {
        isLoggedIn: false,
        userName: undefined,
        token: undefined,
      };
    });
    // closeDrawer();
  };

  // logInUser
  const logInUser = () => {
    // add login info to local storage
    localStorage.setItem("isCurrentlyLoggedIn", true);
    localStorage.setItem("username", "rajaabhaysingh233@gmail.com");
    localStorage.setItem("token", "GFYT7Ver6-midjcnyr076876b9-B878");

    // log in user locally too
    setUser(() => {
      return {
        isLoggedIn: true,
        userName: localStorage.getItem("username"),
        token: localStorage.getItem("token"),
      };
    });
    // closeDrawer();
  };

  // renderIsLoggedIn
  const renderIsLoggedIn = () => {
    if (isLoggedIn && token) {
      return (
        <>
          <div className="fcol mar_l-16 mar_t-12 mar_b-12 of-scr sb-hid">
            <div className="fc_8a fsxs">Logged in as:</div>
            <div className="fsxs no_wrap of-scr fc_5c mar_t-4 fwb">
              {userName}
            </div>
          </div>
          <button
            className="fccc mar_r-16 mar_l-16 btn pad-8 bg_trans op-5 cur foc_op-1 round-4"
            onClick={logOutUser}
          >
            <i className="fas fsn fa-power-off"></i>
            <div className="fsxs">Logout</div>
          </button>
        </>
      );
    } else {
      return (
        <button
          className="btn f1 fcc bg_white shadow_1-1-4-dark mar_b-12 mar_t-12 mar_l-8 mar_r-8 round-side pad_8-0 fc_pri fwb foc_opt_btn cur"
          onClick={logInUser}
        >
          Login / Sign-up
        </button>
      );
    }
  };

  return (
    <div
      ref={sideDrawerRef}
      style={{ height: "100vh" }}
      className={drawerClasses}
    >
      <div className="sd_pre_header fc_bw w-100 bg_white">
        <div className="mar-0-auto fc_pri fsxs of-scr sb-hid">
          App version: <strong> 1.0.0_build-dev_200804</strong>
        </div>
      </div>
      <div className="sd_header fc_bw w-100 bg_pri fc_bw">
        <button
          className="fcc btn opt_btn foc_opt_btn fc_white fsl round-complete bg_trans mar_l-12 cur"
          onClick={closeDrawer}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <img className="sd-img mar_r-64" src={headerLogo} alt="" />
      </div>

      <div
        style={{
          borderTop: `1px solid ${Colors.light_gray}`,
          borderBottom: `1px solid ${Colors.light_gray}`,
        }}
        className="fc_bw mar_b-12 mar_t-12 bg_gray-light"
      >
        {renderIsLoggedIn()}
      </div>

      <div className="fcol pad_r-8">
        <NavLink
          onClick={closeDrawer}
          to="/"
          className="sd_link_opt w-100 link fc_pri fss pad_12-0"
          activeClassName="fwb fc_white bg_pri"
          exact
        >
          <i className="fas fa-home mar_l-16 mar_r-16"></i>Home
        </NavLink>
        <NavLink
          onClick={closeDrawer}
          to="/categories"
          className="sd_link_opt w-100 link fc_pri fss pad_12-0"
          activeClassName="fwb fc_white bg_pri"
          exact
        >
          <i className="fas fa-th mar_l-16 mar_r-16"></i>Categories
        </NavLink>
        <NavLink
          onClick={closeDrawer}
          to="/account"
          className="sd_link_opt w-100 link fc_pri fss pad_12-0"
          activeClassName="fwb fc_white bg_pri"
          exact
        >
          <i className="fas fa-user mar_l-16 mar_r-16"></i>Account
        </NavLink>
      </div>
      <div
        style={{ height: "1px" }}
        className="w-100 mar_t-12 mar_b-12 bg_pri"
      ></div>
      <div className="fcol pad_r-8">
        <NavLink
          onClick={closeDrawer}
          to="/notificaion"
          className="sd_link_opt w-100 link fc_pri fss pad_12-0"
          activeClassName="fwb fc_white bg_pri"
          exact
        >
          <i className="fas fa-bell mar_l-16 mar_r-16"></i>Notification
        </NavLink>
        <NavLink
          onClick={closeDrawer}
          to="/help"
          className="sd_link_opt w-100 link fc_pri fss pad_12-0"
          activeClassName="fwb fc_white bg_pri"
          exact
        >
          <i className="fas fa-question-circle mar_l-16 mar_r-16"></i>Help {"&"}{" "}
          FAQs
        </NavLink>
        <NavLink
          onClick={closeDrawer}
          to="/contact"
          className="sd_link_opt w-100 link fc_pri fss pad_12-0"
          activeClassName="fwb fc_white bg_pri"
          exact
        >
          <i className="fas fa-headset mar_l-16 mar_r-16"></i>Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default SideDrawer;
