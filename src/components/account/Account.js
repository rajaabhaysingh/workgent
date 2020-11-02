import React, { useEffect, useContext } from "react";
import getMyJobs from "../../contexts/actions/jobs/getMyJobs";

import { GlobalContext } from "../../contexts/Provider";

const Account = () => {
  const context = useContext(GlobalContext);

  useEffect(() => {
    getMyJobs();
  }, []);

  return <div>This is account.</div>;
};

export default Account;
