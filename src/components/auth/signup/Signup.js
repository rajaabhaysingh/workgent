import React, { useEffect } from "react";

import Register from "../../layouts/formUI/Register";
import useForm from "./useForm";

const Signup = () => {
  useEffect(() => {}, []);

  return <Register formHook={useForm()} />;
};

export default Signup;
