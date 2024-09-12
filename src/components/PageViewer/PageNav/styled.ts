import styled from "styled-components";
import * as Constants from "../../../constants";

export const PageNav = styled.nav`
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-weight: 700;
  background-color: ${Constants.colorBackground};
  border-top: 1px solid silver;
  z-index: 999999999;

  a {
    color: ${Constants.colorText};
    font-size: 1em;
    text-decoration: none;
    cursor: pointer;

    svg {
      height: 1em;
      width: 1em;
      transform: translateY(20%);

      path {
        fill: none;
        stroke: ${Constants.colorInteractive};
        stroke-width: 60;
        stroke-linejoin: miter;
      }

      &:hover,
      &:active {
        stroke: ${Constants.colorInteractiveHover};
      }
    }
  }

 #previous,
  #next {
    background-color: var(--accent-color-30);
    color: black;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    border-color: black;
    position: fixed;
    top: calc(50vh);
    z-index: 1001;
  }

  #previous {
    left: 40px;
  }

  #next {
    right: calc(34vw + 40px);
  }

  #previous:hover,
  #next:hover {
    background-color: var(--accent-color);
  }

  #previous:hover a,
  #next:hover a {
    color: var(--accent-color);
  }

  @media ${Constants.devices.tablet} {
    grid-row: 3/4;
  }


  @media ${Constants.devices.desktop} {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;
