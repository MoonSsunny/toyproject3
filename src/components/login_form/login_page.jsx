import React from "react";
import AuthForm from "../../containers/login_form";

import LoginTemplate from "./login_template";

const LoginPage = () => {
  return (
    <LoginTemplate>
      <AuthForm />
    </LoginTemplate>
  );
};

export default LoginPage;
