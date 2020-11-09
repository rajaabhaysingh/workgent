import React from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const NewPost = () => {
  // local state management
  const history = useHistory();

  // cancelPost
  const cancelPost = () => {
    history.goBack();
  };

  return (
    <div className="fcol w-100 h-100 of-scr">
      <div className="dash_body_box bg_white round-8 pad-16">
        <div className="f_lrtb pc_space_bw">
          <div className="fcol">
            <div className="fsxl fwb">New job posting</div>
            <div className="fsxs fc_5c mar_t-8">
              Fill the details below to post a new job ad.
            </div>
          </div>

          <Popup
            trigger={
              <button className="dash_opt_btn-1 btn cur fsm fcc mob_mar_t-32 pad_8-16 round-4 bg_err fc_white fwb">
                <i className="fas fa-times mar_r-8"></i>Cancel
              </button>
            }
            modal
          >
            {(close) => (
              <div className="fcol">
                Are you sure ??
                <button onClick={cancelPost}>Yes</button>
                <button onClick={close}>No</button>
              </div>
            )}
          </Popup>
        </div>
        {/* form details div */}
        <div className="mar_t-32 fcol">
          <div className="fsm fwb fc_5c">Enter the details below:</div>
        </div>
      </div>
      <div className="dash_body_box bg_white round-8 pad-16">
        <div></div>
      </div>
    </div>
  );
};

export default NewPost;
