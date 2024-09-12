// src/components/PageViewer/styled.ts

import styled from 'styled-components';
import { colorBackground, colorInteractive, typeSansSerif } from '../../../constants';
import { Link } from 'react-router-dom';

// Styled component for page-point
export const PagePoint = styled.span`
  width: 1px;
  height: 1px;
    position: absolute;
    right: 1px;
    background-color: transparent;
`;

// Styled component for page-link
export const PageLink = styled(Link)`
  text-align: center;
  line-height: 1;
  text-decoration: none;
  color: ${colorInteractive};
  background-color: ${colorBackground};
    position: absolute;
    right: 5px;
    height: 100%;
    min-width: 30px;
`;

// Styled component for page-number
export const PageNumberContainer = styled.span`
  font-family: ${typeSansSerif};
  font-size: 16px;
  font-weight: 700;
  width: 20px;
  text-transform: uppercase;
      position: sticky;
      top: 20px;

  .label {
    display: block;
    font-size: 0.7em;
  }
`;
