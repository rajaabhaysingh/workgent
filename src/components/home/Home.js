import React from "react";

import Chatbot from "../chatbot/Chatbot";
import CarouselSlider from "../layouts/carousel/CarouselSlider";

const Home = () => {
  return (
    <div className="">
      <CarouselSlider />
      <div>You are inside Home.</div>

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
