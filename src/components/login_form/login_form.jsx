import React, { useState } from "react";
import styled from "styled-components";
import Button from "../button/button";

const FormBlock = styled.div`
  h3 {
    font-size: 25px;
    color: #868e96;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #868e96;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  background: transparent;
  margin: 20px 0;
`;
const LoginForm = ({ form, onChange, onSubmit }) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    window.location.href = "/";
  };

  return (
    <>
      <FormBlock>
        <form onSubmit={onSubmit}>
          <h3>로그인</h3>
          <StyledInput
            name="username"
            className="userId"
            placeholder="아이디"
            value={form.username}
            onChange={onChange}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="비밀번호"
            value={form.userPassword}
            onChange={onChange}
          />
          <Button fullWidth>로그인</Button>
        </form>
      </FormBlock>
    </>
  );
};

export default LoginForm;
