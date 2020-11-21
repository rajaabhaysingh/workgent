import React, { useContext, useEffect } from "react";

import Chatbot from "../chatbot/Chatbot";
import CarouselSlider from "../layouts/carousel/CarouselSlider";
import TrendingBox from "../layouts/trendingBox/TrendingBox";
import NormalJobSlider from "../layouts/slider/NormalJobSlider";

// importing contexts
import { searchBarContext } from "../../App";
import { GlobalContext } from "../../contexts/Provider";
import HomeTabs from "../layouts/tabs/HomeTabs";
import getPublicJobsHome from "../../contexts/actions/jobs/getPublicJobsHome";
import { useHistory } from "react-router-dom";
import Footer from "../layouts/footer/Footer";
import HomeRight from "../layouts/homeRight/HomeRight";

const Home = () => {
  // using imported context
  const {
    isSearchBarVisible,
    setIsSearchBarVisible,
    setSearchBarVisibleClass,
    setSearchBarClass,
  } = useContext(searchBarContext);

  const history = useHistory();

  // fetching public jobs of home
  const {
    publicJobsHomeDispatch,
    publicJobsHomeState: {
      publicJobsHome: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getPublicJobsHome(history)(publicJobsHomeDispatch);
  }, []);

  console.log("Home public jobs", loading, error, data);

  // hiding search bar by default
  useEffect(() => {
    if (isSearchBarVisible) {
      setIsSearchBarVisible(() => false);
      setSearchBarVisibleClass(() => "search_hidden_body h-100 w-100");
      setSearchBarClass(() => "search_bar_hidden pos_abs fcc w-100");
    }
  }, []);

  return (
    <div className="home w-100 bb fcol">
      <CarouselSlider />
      <section className="home_layout_box bg_white">
        {/* left part */}
        <div className="home_lb-1 bb round-8 bg_gray-light"></div>

        {/* center part */}
        <div className="home_lb-2 bb fcol">
          <TrendingBox />
          <div className="w-100 bg_white h-1 mar_t-32 shadow_0-0-8-dark"></div>
          <NormalJobSlider data={data} heading="Trending jobs nearby" />
          <div className="w-100 bg_white h-1 mar_t-48 shadow_0-0-8-dark"></div>
          <NormalJobSlider data={data} heading="Based on your profile" />
          <div className="w-100 bg_white h-1 mar_t-48 shadow_0-0-8-dark"></div>
          <HomeTabs />
        </div>

        {/* right part */}
        <div className="home_lb-3 bb">
          <HomeRight />
        </div>
      </section>
      <section className="home_layout_box bg_white">
        Other section will be added soon.
      </section>
      <section className="w-100 mar_t-16">
        <Footer />
      </section>

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
