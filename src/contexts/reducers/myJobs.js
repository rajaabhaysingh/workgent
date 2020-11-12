import {
  LOGOUT_USER,
  MY_JOBS_ERROR,
  MY_JOBS_LOADING,
  MY_JOBS_SUCCESS,
} from "../../constants/actionTypes";

import myJobsInitialState from "../initialStates/myJobsInitialState";

// myJobs reducer function
const myJobs = (state, { type, payload }) => {
  switch (type) {
    case MY_JOBS_LOADING:
      return {
        ...state,
        myJobs: {
          ...state.myJobs,
          loading: true,
        },
      };

    case MY_JOBS_SUCCESS:
      return {
        ...state,
        myJobs: {
          ...state.myJobs,
          loading: false,
          data: payload,
        },
      };

    case MY_JOBS_ERROR:
      return {
        ...state,
        myJobs: {
          ...state.myJobs,
          loading: false,
          error: payload,
        },
      };

    case LOGOUT_USER:
      return {
        ...state,
        myJobsInitialState,
      };

    default:
      return state;
  }
};

export default myJobs;
