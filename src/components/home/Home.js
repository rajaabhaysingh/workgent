import React, { useContext, useEffect } from "react";

import Chatbot from "../chatbot/Chatbot";
import CarouselSlider from "../layouts/carousel/CarouselSlider";
import TrendingBox from "../layouts/trendingBox/TrendingBox";
import NormalJobSlider from "../layouts/slider/NormalJobSlider";
import NormalJob from "../layouts/jobs/NormalJob";

// importing contexts
import { searchBarContext } from "../../App";
import { GlobalContext } from "../../contexts/Provider";
import HomeTabs from "../layouts/tabs/HomeTabs";

// normalJobList
const normalJobList = [
  {
    jobId: "d323e",
    image:
      "https://cdn107.picsart.com/201383225001202.jpg?type=webp&to=crop&r=256",
    jobName: "Paddy reaper and harvestor and cultivator",
    jobOwner: "Gurusharan Das",
    location: "Level 1, Level 2",
    qtyReq: 12,
    isPermanent: false,
    workDuration: 23,
    workDurationUnit: "day(s)",
    payAmt: 234,
    payAmtUnit: "day",
    isPrime: false,
  },
  {
    jobId: "xres4",
    image:
      "https://cdn107.picsart.com/201383225001202.jpg?type=webp&to=crop&r=256",
    jobName: "Painter",
    jobOwner: "Surya Builders",
    location: "Jagdishpur, Bhagalpur",
    qtyReq: 2,
    isPermanent: false,
    workDuration: 1,
    workDurationUnit: "week(s)",
    payAmt: 2400,
    payAmtUnit: "task",
    isPrime: true,
  },
  {
    jobId: "2r23r",
    image:
      "https://cdn107.picsart.com/201383225001202.jpg?type=webp&to=crop&r=256",
    jobName: "Paddy reaper",
    jobOwner: "Gurusharan Das",
    location: "Level 1, Level 2",
    qtyReq: 12,
    isPermanent: false,
    workDuration: 23,
    workDurationUnit: "day(s)",
    payAmt: 234,
    payAmtUnit: "day",
    isPrime: false,
  },
  {
    jobId: "sac2323",
    image:
      "https://cdn107.picsart.com/201383225001202.jpg?type=webp&to=crop&r=256",
    jobName: "Painter",
    jobOwner: "Surya Builders",
    location: "Jagdishpur, Bhagalpur",
    qtyReq: 2,
    isPermanent: false,
    workDuration: 1,
    workDurationUnit: "week(s)",
    payAmt: 2400,
    payAmtUnit: "task",
    isPrime: true,
  },
  {
    jobId: "h8787",
    image:
      "https://cdn107.picsart.com/201383225001202.jpg?type=webp&to=crop&r=256",
    jobName: "Maid",
    jobOwner: "Ramakant Singh",
    location: "Aliganj, Bhagalpur",
    qtyReq: 11,
    isPermanent: true,
    workDuration: null,
    workDurationUnit: "Other",
    payAmt: 4000,
    payAmtUnit: "month",
    isPrime: false,
  },
  {
    jobId: "v5t56",
    image:
      "https://cdn107.picsart.com/201383225001202.jpg?type=webp&to=crop&r=256",
    jobName: "Maid",
    jobOwner: "Ramakant Singh",
    location: "Aliganj, Bhagalpur, Nihar",
    qtyReq: 11,
    isPermanent: true,
    workDuration: null,
    workDurationUnit: "Other",
    payAmt: 4000,
    payAmtUnit: "month",
    isPrime: false,
  },
  {
    jobId: "r4de3",
    image:
      "https://cdn107.picsart.com/201383225001202.jpg?type=webp&to=crop&r=256",
    jobName: "Maid",
    jobOwner: "Ramakant Singh",
    location: "Aliganj, Bhagalpur",
    qtyReq: 11,
    isPermanent: true,
    workDuration: null,
    workDurationUnit: "Other",
    payAmt: 4000,
    payAmtUnit: "month",
    isPrime: false,
  },
];

const Home = () => {
  // using imported context
  const {
    isSearchBarVisible,
    setIsSearchBarVisible,
    setSearchBarVisibleClass,
    setSearchBarClass,
  } = useContext(searchBarContext);

  const context = useContext(GlobalContext);

  // hiding search bar by default
  useEffect(() => {
    if (!isSearchBarVisible) {
      setIsSearchBarVisible(() => true);
      setSearchBarVisibleClass(() => "search_visible_body h-100 w-100");
      setSearchBarClass(() => "search_bar_visible pos_abs fcc w-100");
    }
  }, []);

  return (
    <div className="home h-100 w-100 bb fcol">
      <CarouselSlider />
      <section className="home_layout_box of-hid shadow_neumorph">
        {/* left part */}
        <div className="home_lb-1 bb bg_pri"></div>

        {/* center part */}
        <div className="home_lb-2 bb fcol">
          <TrendingBox />
          <div className="w-100 bg_white h-1 mar_t-32 shadow_1-1-4-dark"></div>
          <NormalJobSlider
            dataList={normalJobList}
            heading="Trending jobs nearby"
          />
          <div className="w-100 bg_white h-1 h-1 mar_t-32 shadow_1-1-4-dark"></div>
          <HomeTabs />
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
