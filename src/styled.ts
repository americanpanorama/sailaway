import styled, { createGlobalStyle } from 'styled-components';
import * as Constants from './constants';

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${Constants.typeSansSerif};
    color: ${Constants.colorText};
    background-color: ${Constants.colorFooterBackground};
  }

  body {
    background-color: ${Constants.colorBackground};
    max-height: 100vh;
    max-height: 100svh;
    overflow: hidden;
    margin: 0;
  }
`;

// Styled component for the app container
export const Container = styled.div`
  max-height: calc(100vh - ${Constants.headerHeight}px - ${Constants.headerTitleHeight}px - ${Constants.footerHeight}px);
  overflow-y: auto;

  p {
    a {
      &:link,
      &:visited {
        color: ${Constants.colorInteractive};
      }

      &:hover,
      &:active {
        text-decoration: none;
      }
    }
  }
`;