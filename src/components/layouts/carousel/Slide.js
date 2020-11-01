import React from "react";

const Slide = ({ image }) => {
  return (
    <div className="slide bg_pink_grad round-12 mar_l-16 cur shadow_neumorph">
      <img
        alt=""
        src={image}
        className="w-100 h-100 round-12 slide_image"
      ></img>
    </div>
  );
};

export default Slide;
