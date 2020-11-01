import React, { useContext, useEffect } from "react";

import Chatbot from "../chatbot/Chatbot";
import CarouselSlider from "../layouts/carousel/CarouselSlider";
import TrendingBox from "../layouts/trendingBox/TrendingBox";
import Slider from "../layouts/slider/Slider";
import NormalJob from "../layouts/normalJob/NormalJob";

// importing contexts
import { searchBarContext } from "../../App";
import { GlobalContext } from "../../contexts/Provider";

const Home = () => {
  // using imported context
  const {
    isSearchBarVisible,
    setIsSearchBarVisible,
    setSearchBarVisibleClass,
    setSearchBarClass,
  } = useContext(searchBarContext);

  const context = useContext(GlobalContext);

  console.log(context);

  // hiding search bar by default
  useEffect(() => {
    if (!isSearchBarVisible) {
      setIsSearchBarVisible(() => true);
      setSearchBarVisibleClass(() => "search_visible_body h-100 w-100");
      setSearchBarClass(() => "search_bar_visible pos_abs fcc w-100");
    }
  }, []);

  return (
    <div className="home h-100 w-100">
      <CarouselSlider />
      <section className="home_layout_box of-hid shadow_neumorph">
        {/* left part */}
        <div className="home_lb-1 bb bg_pri"></div>

        {/* center part */}
        <div className="home_lb-2 bb fcol">
          <TrendingBox />
          <Slider component={<NormalJob />} />
        </div>

        {/* right part */}
        <div className="home_lb-3 bb bg_err-light"></div>
      </section>
      <section>You are inside Home.</section>
      <section>Footer</section>

      {/* <div
        style={{ position: "absolute", bottom: 0, right: 0 }}
        className="mar_r-32 mar_b-32"
      >
        <Chatbot />
      </div> */}
    </div>
  );
};

export default Home;
