import { useState, useContext, useEffect } from "react";

import { useToasts } from "react-toast-notifications";

import { GlobalContext } from "../../../contexts/Provider";
import { login } from "../../../contexts/actions/auth/login";

export default () => {
  // local state management
  const [form, setForm] = useState({});

  const { addToast } = useToasts();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  // check for error - backend
  useEffect(() => {
    if (error) {
      addToast(error.detail, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, [error]);

  // onChange
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submitForm
  const submitForm = () => {
    login(form)(authDispatch);
  };

  return {
    form,
    onChange,
    submitForm,
    loading,
    data,
  };
};
