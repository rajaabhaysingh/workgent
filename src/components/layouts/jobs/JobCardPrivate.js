import React from "react";
import Popup from "reactjs-popup";

import placeholder from "../../../res/jobs/placeholder.svg";

const JobCardPrivate = (job) => {
  return (
    <div className="fcol job_card_pvt pad-16 bb cur">
      <div className="vis-flex pos_rel">
        <img
          className="h-40 w-40 round-complete"
          src={job.img ? job.img : placeholder}
          alt=""
        />
        <div
          style={{ maxWidth: "calc(100% - 88px)" }}
          className="mar_l-12 fcol"
        >
          <div className="fss ellip">{job.job_name || "N/A"}</div>
          <div className="mar_t-4 fsxs ellip fc_5c">
            <i className="fas fa-map-marker-alt mar_r-8"></i>
            {job.location || "Location unavailable"}
          </div>
        </div>
        <Popup
          trigger={
            <button
              style={{ top: "-8px", right: "-12px" }}
              className="btn cur pos_abs mar-4 h-32p w-32p round-complete bg_trans btn_gray"
            >
              <i className="fas fa-ellipsis-v"></i>
            </button>
          }
          position="left top"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={250}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
        >
          <div className="card_menu fss fcol round-8">
            <div className="card_menu_item">Edit details</div>
            <div className="card_menu_item">Delete posting</div>
          </div>
        </Popup>
      </div>
      <div className="no_wrap fss mar_t-8 fc">
        <div className="fcc">
          <span className="fc_5c mar_r-4">Required:</span>
          <span className="fwb fc_sec">{job.qtyReq || "N/A"}</span>
        </div>
        <div className="mar_0-4 fwb fc_5c fsxs">FOR</div>
        <div className="fwb fc_sec">
          {job.workDuration || "N/A"} {job.workDurationUnit || "N/A"}
        </div>
      </div>
      <div className="fc_bw fsxs mar_t-8">
        <span className="fc_5c mar_r-4">
          <i className="fas fa-stopwatch mar_r-4"></i>23 Jun 2020
        </span>
        <span className="fc_5c">
          Applications received:{" "}
          <span className="fc_sec fwb">{job.payAmt || "0"}</span>
        </span>
      </div>
    </div>
  );
};

export default JobCardPrivate;
