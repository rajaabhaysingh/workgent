import { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { GlobalContext } from "../../../contexts/Provider";
import { register } from "../../../contexts/actions/auth/register";

export default () => {
  // local state management
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();
  const { addToast } = useToasts();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  // handling error responses
  useEffect(() => {
    if (error) {
      for (let item in error.error) {
        setFieldErrors({
          ...fieldErrors,
          [item]: error.error[item][0],
        });
      }
    }
  }, [error]);

  // handling data responses
  useEffect(() => {
    if (data) {
      addToast("Registration successful.", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/login");
    }
  }, [data]);

  console.log(data);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    setFieldErrors(() => {});
    register(form)(authDispatch);
  };

  return {
    form,
    onChange,
    submitForm,
    loading,
    fieldErrors,
  };
};
