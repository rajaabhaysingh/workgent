import React from "react";

import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import NormalJob from "../jobs/NormalJob";

const NormalJobSlider = ({ data, heading }) => {
  // render job list conditionally
  const renderJobList = () => {
    if (data?.results?.length > 0) {
      return (
        <div className="vis-flex w-100 of-scr sb-hid mar_t-16 round-8 bor_gray- shadow_1-1-4-light bb">
          {data.results.map((job) => (
            <div className="bor_r_gray-1" key={job.id}>
              <NormalJob job={job} />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="fc w-100 pad-16 bb bg_pri-light round-4 fc_sec fsm mar_t-16">
          <i className="fas fa-info-circle mar_r-8"></i>No jobs available in
          this category.
        </div>
      );
    }
  };

  return (
    <div className="fcol mar_t-32 w-100">
      <div className="fc_bw pad_0-8">
        <div className="fwb fc_sec fsm">{heading}</div>
        <Link className="link fsm" to="/trending/jobs">
          Show all
        </Link>
      </div>
      {renderJobList()}
    </div>
  );
};

export default NormalJobSlider;
