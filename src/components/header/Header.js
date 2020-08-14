import React, { lazy, Suspense } from "react";
import "../../styles/styles.css";

import logo from "../../res/header/logo_dark_bg.png";
import ToggleButton from "./sideDrawer/ToggleButton";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Fallback from "../errorBoundary/Fallback";

const SearchBar = lazy(() => import("./search/SearchBar"));

const Header = ({ headerPosTop, drawerClickHandler }) => {
  return (
    <div
      style={{ top: headerPosTop }}
      className="w-100 header fccc shadow_1-1-4-light pos_rel"
    >
      <div className="w-100 fc_bw fc_white">
        {/* left part of header */}
        <div className="fc">
          <button
            className="toggle_btn foc_opt_btn round-complete fcc bg_trans btn cur"
            onClick={drawerClickHandler}
          >
            <ToggleButton />
          </button>
          <img src={logo} alt="" className="site_logo"></img>
        </div>
        {/* right part of the header */}
        <div className="fc">
          <button className="opt_btn foc_opt_btn bg_trans btn cur fcc round-complete fsl fc_white">
            <i className="fas fa-search"></i>
          </button>
          <button className=" opt_btn foc_opt_btn bg_trans btn cur fcc round-complete fsl fc_white">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      <div className="search_bar pos_abs fcc">
        <ErrorBoundary>
          <Suspense fallback={<Fallback />}>
            <SearchBar />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Header;
