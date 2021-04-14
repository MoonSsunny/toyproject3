import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 100%;
  background: #91a7ff;
  height: 100vh;
`;

const MainBox = styled.div`
  margin: auto;
  background: #fff;
  width: 500px;
  padding: 2rem;
  border-radius: 9px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LoginTemplate = ({ children }) => {
  return (
    <TemplateBlock>
      <MainBox>{children}</MainBox>
    </TemplateBlock>
  );
};

export default LoginTemplate;
