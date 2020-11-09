import React from "react";

const NormalJob = ({ job }) => {
  return (
    <div className="normal_job pos_rel bg_white round-8 pad-16 bb shadow_1-1-4-light cur">
      {job.isPrime && (
        <div style={{ right: "4px", top: "4px" }} className="pos_abs fsxs">
          Ad
        </div>
      )}
      <div className="fcol">
        <div className="fc">
          <img className="h-40 w-40 round-4" src={job.image} alt="" />
          <div className="mar_l-8 fsm fwb height_sized of-hid">
            {job.jobName}
          </div>
        </div>
        <div className="mar_t-16 no_wrap fsxs fc_sec">
          <i className="fas fa-briefcase mar_r-8"></i>
          {job.jobOwner}
        </div>
        <div className="no_wrap fsxs fc_5c">
          <i className="fas fa-map-marker-alt mar_r-8"></i>
          {job.location}
        </div>
        <div className="no_wrap fss mar_t-16">
          <span className="fc_5c mar_r-4">Required:</span>
          <span className="fwb fc_sec">{job.qtyReq}</span>
        </div>
        <div className="no_wrap fss">
          <span className="fc-8a mar_r-4">Work duration:</span>
          <span className="fwb fc_sec fc_5c">
            {job.workDuration} {job.workDurationUnit}
          </span>
        </div>
        <div className="no_wrap fsm mar_t-16">
          <span className="fc_5c mar_r-4">Pay scale:</span>
          <span className="fwb fc_sec pwb">
            ₹{job.payAmt}/{job.payAmtUnit}
          </span>
        </div>
        <button className="no_wrap mar_t-16 btn btn_pri w-100 bg_pri round-4 pad-8 fc_white fss fwb cur">
          View details
        </button>
      </div>
    </div>
  );
};

export default NormalJob;
