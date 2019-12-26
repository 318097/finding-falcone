import React from "react";
import styled from "styled-components";

const AlertBoxWrapper = styled.div`
  width: 40%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  .alert {
    padding: 7px;
  }
`;

const AlertBox = ({ message }) => (
  <AlertBoxWrapper>
    <div class="alert alert-danger">{message}</div>
  </AlertBoxWrapper>
);

export default AlertBox;
