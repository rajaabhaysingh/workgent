import React from "react";

const Footer = () => {
  // handleScrollToTop
  const handleScrollToTop = () => {
    if (
      document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0
    ) {
      window.scrollBy(0, -200);
      requestAnimationFrame(handleScrollToTop);
    }
  };

  return (
    <div className="fcol w-100">
      <div
        // onClick={handleScrollToTop}
        className="fcc pad_16-0 bg_ter fc_white cur w-100"
      >
        <i className="fas fa-arrow-circle-up mar_r-8 fsm"></i>
        Scroll to top
      </div>
      <div className="w-100 bg_ter-light f_lrtb pad-32 justev-pc alignc-mob bb">
        <div className="fcol fsm fc_white fwb">INFORMATION</div>
        <div className="fcol fsm fc_white fwb">SERVICES</div>
        <div className="fcol fsm fc_white fwb">FOR EMPLOYERS</div>
        <div className="fcol fsm fc_white fwb">SOCIAL {"&"} CONTACT</div>
      </div>
      <div className="fcc pad_8-0 fss">
        © All rights reserved @ 2020 workgent.com
      </div>
    </div>
  );
};

export default Footer;
