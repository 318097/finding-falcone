import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  h3 span {
    color: rgb(1, 32, 90);
    position: relative;
    &:after {
      content: "";
      width: 103%;
      position: absolute;
      left: 0;
      bottom: 3px;
      height: 5px;
      background: #a2a2d9;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <h3>
      Finding <span>Falcone!</span>
    </h3>
  </HeaderWrapper>
);

export default Header;
