import React, { memo, lazy, Suspense, useState } from "react";
import "./App.css";
import "./styles/styles.css";

// import LoadingBar from "react-top-loading-bar";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Fallback from "./components/errorBoundary/Fallback";

// components imports
const TopMessage = lazy(() => import("./components/header/TopMessage"));
const Header = lazy(() => import("./components/header/Header"));
const SideDrawer = lazy(() =>
  import("./components/header/sideDrawer/SideDrawer")
);
const Home = lazy(() => import("./components/home/Home"));
const Categories = lazy(() => import("./components/categories/Categories"));

function App() {
  // state management
  const [isTopMsgVisible, setIsTopMsgVisible] = useState(true);
  const [headerPosTop, setHeaderPosTop] = useState("26px");
  const [bodyMarginTop, setBodyMarginTop] = useState("74px");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // drawerClickHandler
  const drawerClickHandler = () => {
    setIsDrawerOpen(() => {
      return { isDrawerOpen: !isDrawerOpen };
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <ErrorBoundary>
          <Suspense fallback={<Fallback />}>
            {/* <LoadingBar
              className="w-100 bg_pink_grad"
              shadow={false}
              color={"#e52e71"}
              loaderSpeed={500}
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            /> */}
            {isTopMsgVisible && (
              <TopMessage
                isTopMsgVisible={isTopMsgVisible}
                setIsTopMsgVisible={setIsTopMsgVisible}
                setHeaderPosTop={setHeaderPosTop}
                setBodyMarginTop={setBodyMarginTop}
              />
            )}
            <Header
              headerPosTop={headerPosTop}
              drawerClickHandle={drawerClickHandler}
            />
            <div className="h-100 w-90">
              <SideDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>
      <div style={{ marginTop: bodyMarginTop }} className="App-body">
        <Switch>
          <Route exact strict path="/">
            <ErrorBoundary>
              <Suspense fallback={<Fallback />}>
                <Home />
              </Suspense>
            </ErrorBoundary>
          </Route>
          <Route strict path="/categories">
            <ErrorBoundary>
              <Suspense fallback={<Fallback />}>
                <Categories />
              </Suspense>
            </ErrorBoundary>
          </Route>
          <Route>
            <div>
              ERROR 404 - Requested <code>url</code> unavailable.
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

// defining propTypes
App.propTypes = {
  isTopMsgVisible: PropTypes.bool,
  headerPosTop: PropTypes.string,
  bodyMarginTop: PropTypes.string,
};

export default memo(App);
