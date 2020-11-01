import React, { createContext, useReducer } from "react";

import auth from "./reducers/auth";
import search from "./reducers/search";
import authInitialState from "./initialStates/authInitialState";
import searchInitialState from "./initialStates/searchInitialState";

// creating global contexts
export const GlobalContext = createContext({});

// creating global providers
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [searchState, searchDispatch] = useReducer(search, searchInitialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        searchState,
        searchDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
