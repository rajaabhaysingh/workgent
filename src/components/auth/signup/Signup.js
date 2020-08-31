import React, { useEffect } from "react";

import { register } from "../../../contexts/actions/register";

const Signup = () => {
  useEffect(() => {
    register();
  }, []);

  return <div>This is SIGN-UP.</div>;
};

export default Signup;
