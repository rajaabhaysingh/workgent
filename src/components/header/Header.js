import React from "react";
import "../../styles/styles.css";

import logo from "../../res/header/logo_dark_bg.png";
import ToggleButton from "./sideDrawer/ToggleButton";

const Header = ({ headerPosTop, drawerClickHandler }) => {
  return (
    <div
      style={{ top: headerPosTop }}
      className="w-100 header shadow_1-1-4-light fc_bw fc_white"
    >
      <div className="fc">
        <button
          className="toggle_btn foc_opt_btn round-complete fcc bg_trans btn cur"
          onClick={drawerClickHandler}
        >
          <ToggleButton />
        </button>
        <img src={logo} alt="" className="site_logo"></img>
      </div>
      <div className="fc">
        <button className="opt_btn foc_opt_btn bg_trans btn cur fcc round-complete fsl fc_white">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
