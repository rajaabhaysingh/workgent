import React from "react";

import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import NormalJob from "../jobs/NormalJob";

const NormalJobSlider = ({ dataList, heading }) => {
  return (
    <div className="fcol mar_t-32 w-100">
      <div className="fc_bw pad_0-8">
        <div className="fwb fc_sec fsm">{heading}</div>
        <Link className="link fsm" to="/trending/jobs">
          Show all
        </Link>
      </div>
      <div className="vis-flex w-100 of-scr mar_t-16">
        {dataList.map((job) => (
          <div className="mar-4" key={job.id}>
            <NormalJob job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NormalJobSlider;
