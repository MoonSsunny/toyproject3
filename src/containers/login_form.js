import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { changeField, initializeForm } from "../modules/auth";
import LoginForm from "../components/login_form/login_form";

const AuthForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };
  const onSbumit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  //   useEffect(({ history }) => {
  //     if (user) {
  //       history.push("/");
  //       try {
  //         localStorage.setItem("user", JSON.stringify(user));
  //       } catch (e) {
  //         console.log("local");
  //       }
  //     }
  //   });

  return <LoginForm form={form} onChange={onChange} onSbumit={onSbumit} />;
};

export default AuthForm;
