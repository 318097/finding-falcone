import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.section`
  font-size: 1.5rem;
  position: relative;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const NotFound = ({ history }) => (
  <NotFoundWrapper>
    <div>
      <p>404 - Page not found</p>
      <button className="btn-primary" onClick={() => history.push("/")}>
        Home
      </button>
    </div>
  </NotFoundWrapper>
);

export default withRouter(NotFound);
