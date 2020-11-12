import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Select from "react-select";

import LocationAutoComplete from "../../../../header/search/LocationAutoComplete";

import {
  pri_col,
  pri_very_light,
  sec_col,
  text_8a,
} from "../../../../../constants/Colors";

const NewPost = () => {
  // local state management
  const [isJobPermanent, setIsJobPermanent] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [form, setForm] = useState({});

  const history = useHistory();

  console.log(form);

  // onChange
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // set isJobPermanent's value on each toggles
  useEffect(() => {
    setForm({
      ...form,
      is_permanent: isJobPermanent,
    });
  }, [isJobPermanent]);

  // cancelPost
  const cancelPost = () => {
    history.goBack();
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // proceed submitting
  };

  // defining custom theme for select component
  const customTheme = (theme) => {
    return {
      ...theme,
      border: "1px solid",
      background: pri_col,
      colors: {
        ...theme.colors,
        primary25: pri_very_light,
        primary: pri_col,
      },
    };
  };

  const arrowStyleWrapper = {
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: sec_col,
    }),
    control: (base, state) => ({
      ...base,
      // background: pri_very_light,
      borderColor: state.isFocused ? pri_col : text_8a,
      "&:hover": {
        borderColor: state.isFocused ? pri_col : text_8a,
      },
    }),
  };

  // list of productCat
  const timeFrameList = [
    {
      value: "Minute",
      label: "Minute",
    },
    {
      value: "Hour",
      label: "Hour",
    },
    {
      value: "Day",
      label: "Day",
    },
    {
      value: "Month",
      label: "Month",
    },
    {
      value: "Year",
      label: "Year",
    },
    {
      value: "TASK",
      label: "TASK",
    },
  ];

  // renderCheckbox
  const renderCheckbox = (boolVal) => {
    if (boolVal) {
      return (
        <i
          name="job_permanent"
          id="job_permanent"
          onClick={() => setIsJobPermanent(() => !isJobPermanent)}
          className="far fsl cur fc_sec fa-check-square"
        ></i>
      );
    } else {
      return (
        <i
          name="job_permanent"
          id="job_permanent"
          onClick={() => setIsJobPermanent(() => !isJobPermanent)}
          className="far fsl cur fc_sec fa-square"
        ></i>
      );
    }
  };

  // renderMoreDetails
  const renderMoreDetails = () => {
    if (showMoreDetails) {
      return (
        <>
          <div className="fsxs mar_t-16 fc_5c">Extra information:</div>
          <div className="w-100 fc_bw height_sized mar_t-4 round-4 bor_8a-1 bb pad_0-12">
            <div className="fss">Pay Negotiable:</div>
            <div className="fc_ar mar_l-32">
              <div className="fc fss">
                <input
                  className="w-16p h-16p mar-0"
                  type="radio"
                  name="negotiable"
                  id="negotiable_yes"
                />
                <label className="mar_l-4" htmlFor="negotiable_yes">
                  Yes
                </label>
              </div>
              <div className="fc fss mar_l-16">
                <input
                  className="w-16p h-16p mar-0"
                  type="radio"
                  name="negotiable"
                  id="negotiable_no"
                />
                <label className="mar_l-4" htmlFor="negotiable_no">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="w-100 fc_bw height_sized mar_t-16 round-4 bor_8a-1 bb pad_0-12">
            <div className="fss">Accomodation available:</div>
            <div className="fc_ar mar_l-32">
              <div className="fc fss">
                <input
                  className="w-16p h-16p mar-0"
                  type="radio"
                  name="accomodation"
                  id="accomodation_yes"
                />
                <label className="mar_l-4" htmlFor="accomodation_yes">
                  Yes
                </label>
              </div>
              <div className="fc fss mar_l-16">
                <input
                  className="w-16p h-16p mar-0"
                  type="radio"
                  name="accomodation"
                  id="accomodation_no"
                />
                <label className="mar_l-4" htmlFor="accomodation_no">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="fc fsm mar_t-16">
            <div className="fss fc_sec w-100p">Skills required:</div>
            <input
              className="mar_l-8 fwb f1 height_sized inp_pri pad_0-12 bb focus-normal"
              placeholder="Eg: Laborious, etc."
              type="text"
            />
          </div>
          <div className="fc fsm mar_t-16">
            <div className="fss fc_sec w-100p">Other details:</div>
            <input
              className="mar_l-8 fwb f1 height_sized inp_pri pad_0-12 bb focus-normal"
              placeholder="Eg: Work experience, etc."
              type="text"
            />
          </div>
          <button
            onClick={() => setShowMoreDetails(() => false)}
            type="button"
            style={{ alignSelf: "flex-end" }}
            className="btn cur mar_t-16 h-32p round-4 bg_err fc_white fwb w-120p"
          >
            Close extra info
          </button>
        </>
      );
    } else {
      return (
        <button
          onClick={() => setShowMoreDetails(() => true)}
          type="button"
          className="btn w-100 mar_t-32 height_sized pos_rel round-4 bg_warn-light fwb fc bor_warn-1 bb cur"
        >
          <div className="h-60p w-60p pos_abs_0-0-l round-complete fcc bg_warn fc_white fsxl shadow_0-0-8-dark">
            <i className="fas fa-plus"></i>
          </div>
          <div className="mar_l-16">Add more job details</div>
        </button>
      );
    }
  };

  return (
    <div className="fcol w-100 h-100 of-scr">
      <div className="dash_body_box bg_white round-8 pad_pc-32_mob-16">
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
                <i className="fas fa-times mar_r-8"></i>
                Cancel
              </button>
            }
            modal
            className="cnf_popup"
          >
            {(close) => (
              <div className="fcol round-8 pad-16">
                <div className="fsm fwb w-100 align-c">Are you sure ??</div>
                <div className="w-100 mar_t-16 pad-16 bb fc_pri fss round-8 bg_pri-light vis-flex">
                  <i className="fas fa-info-circle mar_r-8 mar_t-2"></i>
                  <span>
                    All changes will be lost permanently. Click "Cancel" to stay
                    on this page and continue filling up the form.
                  </span>
                </div>
                <div className="fcc mar_t-32">
                  <button
                    className="btn bg_succ-light pad_8-16 bor_succ-2 round-4 fwb cur"
                    onClick={cancelPost}
                  >
                    Exit now
                  </button>
                  <button
                    className="btn mar_l-32 bg_err-light bor_err-2 pad_8-16 round-4 fwb cur"
                    onClick={close}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        {/* form details div */}
        <div className="mar_t-32 fcol">
          <div className="fsm fc_sec fwb">Enter the job details below:</div>
          <form
            onSubmit={handleSubmit}
            className="fcol mar_t-32"
            style={{ maxWidth: "720px" }}
          >
            <div className="bg_pri-light round-8 pad-16 fc_pri bor_pri-1 fss bb">
              <i className="fas fa-info-circle mar_t-2 mar_r-4"></i>
              If you need any help regarding filling up the form below, please{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/?watch=bybut6tf6bB"
                className="fwb link mar_0-4 fc_sec"
              >
                click this link
              </a>{" "}
              for a guided tour. For any additional assistance please go to
              help/FAQs section and contact us.
            </div>
            <div className="fsxs mar_t-16 fc_sec">
              Enter job name
              <span className="fc_err">*</span>
            </div>
            <input
              className="mar_t-4 fwb w-100 height_sized inp_pri pad_0-12 bb focus-normal"
              placeholder="Eg: Daily wage worker"
              type="text"
              name="title"
              onChange={onChange}
            />
            <div className="fsxs mar_t-16 fc_sec">Job description:</div>
            <textarea
              style={{
                maxWidth: "100%",
                maxHeight: "100px",
              }}
              name="description"
              onChange={onChange}
              className="mar_t-4 w-100 h-80p inp_pri pad_4-12 bb focus-normal"
              placeholder="Write a short description about the job."
            ></textarea>
            <div className="fsxs mar_t-16 fc_sec">
              Job duration (how long will this job last)
              <span className="fc_err">*</span>
            </div>
            <div className="f_lrtb mar_t-4 w-100">
              <div className="fc f1">
                <input
                  className="height_sized fwb inp_pri inp_dis pad_0-12 bb focus-normal w-50"
                  placeholder="Eg: 8"
                  type="text"
                  name="duration"
                  onChange={onChange}
                  disabled={isJobPermanent}
                />
                <Select
                  styles={arrowStyleWrapper}
                  required
                  theme={customTheme}
                  options={timeFrameList}
                  className="fsm fwb mar_l-4 w-50"
                  placeholder="Hours"
                  isSearchable
                  isDisabled={isJobPermanent}
                  onChange={(jobDurationUnit) =>
                    setForm({
                      ...form,
                      duration_unit: jobDurationUnit.value,
                    })
                  }
                />
              </div>
              <div className="fc mar_pc-l_mob-t-8 f1 bg_pri-light height_sized min_height_sized pad_0-12 bb round-4">
                {renderCheckbox(isJobPermanent)}
                <label className="mar_l-8 fsm" htmlFor="job_permanent">
                  This is a permanent job.
                </label>
              </div>
            </div>
            <div className="f_lrtb mar_t-16 w-100">
              <div className="f1 fcol">
                <div className="fsxs fc_sec">
                  Qunatity required
                  <span className="fc_err">*</span>
                </div>
                <div className="fc mar_t-4 w-100">
                  <input
                    className="height_sized fwb inp_pri inp_dis pad_0-12 bb focus-normal w-50"
                    placeholder="Eg: 10"
                    type="text"
                    name="vacancy_count"
                    onChange={onChange}
                  />
                  <Select
                    styles={arrowStyleWrapper}
                    required
                    theme={customTheme}
                    options={[
                      { value: "People", label: "People" },
                      { value: "Man", label: "Man" },
                      { value: "Woman", label: "Woman" },
                    ]}
                    className="fsm fwb mar_l-4 w-50"
                    placeholder="People"
                    isSearchable={false}
                    onChange={(empType) =>
                      setForm({
                        ...form,
                        emp_type: empType.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="f1 fcol mar_pc-l_mob-t-8">
                <div className="fsxs fc_sec">
                  Pay scale (in ₹)
                  <span className="fc_err">*</span>
                </div>
                <div className="fc mar_t-4 w-100">
                  <input
                    className="height_sized fwb mar_r-4 inp_pri inp_dis pad_0-12 bb focus-normal w-50"
                    placeholder="Eg: 500"
                    type="number"
                    name="payment"
                    onChange={onChange}
                  />
                  <span className="mar_t--4 fs2x fwb fc_sec">/</span>
                  <Select
                    styles={arrowStyleWrapper}
                    required
                    theme={customTheme}
                    options={timeFrameList}
                    cacheOptions
                    defaultOptions
                    className="fsm fwb mar_l-4 w-50"
                    placeholder="Day"
                    onChange={(paymentUnit) =>
                      setForm({
                        ...form,
                        payment_unit: paymentUnit.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            {renderMoreDetails()}
            <div className="fsxs mar_t-24 fc_sec">
              Job location
              <span className="fc_err">*</span>
            </div>
            <div className="mar_t-4 round-4 w-100 height_sized bor_pri-1 fcc bb">
              <LocationAutoComplete form={form} setForm={setForm} />
            </div>
            <button
              // onClick={() => setShowMoreDetails(() => false)}
              type="button"
              style={{ alignSelf: "flex-end" }}
              className="btn cur mar_t-16 h-32p round-4 bg_pri-light fwb w-120p bor_pri-2 bb"
            >
              Enter manually
            </button>
            <button
              className="btn round-4 fc_white fwb  bg_pri height_sized mar_t-32 cur btn_pri"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="dash_body_box bg_white round-8 pad-16">
        <div></div>
      </div>
    </div>
  );
};

export default NewPost;
