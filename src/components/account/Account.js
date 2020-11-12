import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import getMyJobs from "../../contexts/actions/jobs/getMyJobs";

import { searchBarContext } from "../../App";
import { GlobalContext } from "../../contexts/Provider";
import DashboardBase from "../layouts/dashboard/DashboardBase";

const Account = () => {
  const history = useHistory();
  const { myJobsDispatch, myJobsState } = useContext(GlobalContext);

  const {
    isSearchBarVisible,
    setIsSearchBarVisible,
    setSearchBarVisibleClass,
    setSearchBarClass,
  } = useContext(searchBarContext);

  // hiding search bar by default
  useEffect(() => {
    if (isSearchBarVisible) {
      setIsSearchBarVisible(() => false);
      setSearchBarVisibleClass(() => "search_hidden_body h-100 w-100");
      setSearchBarClass(() => "search_bar_hidden pos_abs fcc w-100");
    }
  }, []);

  useEffect(() => {
    getMyJobs(history)(myJobsDispatch);
  }, []);

  return <DashboardBase myJobsState={myJobsState} />;
};

export default Account;
