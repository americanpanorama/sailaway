import styled from "styled-components";
import { colorTextInvert, colorFooterBackground, typeSansSerif } from "../../constants";

// Styled component for the footer
export const Footer = styled.footer`
  display: flex;
  gap: 2em;
  justify-content: center;
  height: calc(40px - 0.5rem);
  padding: 0.5rem 2.5% 0 2.5%;
  color: ${colorTextInvert};
  background-color: ${colorFooterBackground};
  text-align: center;
  box-shadow: -1px 70px 20px -70px rgba(0, 0, 0, 0.25) inset;
  -webkit-box-shadow: -1px 70px 20px -70px rgba(0, 0, 0, 0.25) inset;
  -moz-box-shadow: -1px 70px 20px -70px rgba(0, 0, 0, 0.25) inset;
  font-family: ${typeSansSerif};

  * {
    color: #d9d9d9; /* Approximation of darken(white, 18%) */
  }

  a {
    font-size: 1em;
    font-size: 1em;
    text-decoration: none;
    padding: 0 12px;

    &:hover,
    &:active {
      color: white;
      text-decoration: underline;
    }

    & + & {
      margin-top: 5px;
    }
  }
`;
