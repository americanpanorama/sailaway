
import styled from 'styled-components';
import * as Styled from '../About/styled';
import { colorInteractive } from '../../constants';

export const OuterContainer = styled(Styled.OuterContainer)``;

export const InnerContainer = styled(Styled.InnerContainer)`
  h1, h3 {
    text-align: center;
  }
`;

// Styled component for the footnote content box
export const FootnoteContent = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 1.5em;
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1em;
  line-height: 1.2em;
  z-index: 10;
  color: black;
`;


export const Footnote = styled.span`
  position: relative;
  cursor: pointer;
  color: ${colorInteractive};
  font-size: 0.8em;
  vertical-align: super;
  margin-right: 0.5em;
  
  &:hover ${FootnoteContent} {
    display: block;
  }
`;