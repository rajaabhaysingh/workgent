import React, { createContext, useReducer } from "react";

import auth from "./reducers/auth";
import search from "./reducers/search";
import myJobs from "./reducers/myJobs";
import authInitialState from "./initialStates/authInitialState";
import searchInitialState from "./initialStates/searchInitialState";
import myJobsInitialState from "./initialStates/myJobsInitialState";

// creating global contexts
export const GlobalContext = createContext({});

// creating global providers
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [searchState, searchDispatch] = useReducer(search, searchInitialState);
  const [myJobsState, myJobsDispatch] = useReducer(myJobs, myJobsInitialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        searchState,
        searchDispatch,
        myJobsState,
        myJobsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
