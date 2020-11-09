import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

const PostingsBase = () => {
  let { url } = useRouteMatch();
  const history = useHistory();

  // handlePostNewJob
  const handlePostNewJob = () => {
    history.push(`${url}/new_post`);
  };

  return (
    <div className="fcol w-100 h-100 of-scr">
      <div className="dash_body_box bg_white round-8 pad-16">
        <div className="f_lrtb pc_space_bw">
          <div className="fcol">
            <div className="fsxl fwb">My postings</div>
            <div className="fsxs fc_8a mar_t-8">
              View/update the details of your job postings here.
            </div>
          </div>
          <button
            className="dash_opt_btn-1 btn cur fsm fcc mob_mar_t-32 pad_8-16 round-4 bg_pri fc_white fwb bb"
            onClick={handlePostNewJob}
          >
            <i className="fas fa-plus mar_r-8"></i>Post new job
          </button>
        </div>
      </div>
      <div className="dash_body_box bg_white round-8 pad-16">
        <div></div>
      </div>
    </div>
  );
};

export default PostingsBase;
