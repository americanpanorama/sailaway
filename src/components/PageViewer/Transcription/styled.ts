import styled from "styled-components";
import * as Constants from "../../../constants";

// Transcription Container
export const TranscriptionContainer = styled.div`
  font-size: 16px;
  z-index: 1000;
  overflow: hidden scroll;
  scroll-behavior: smooth;
  font-family: 'Roboto Slab', serif;

  @media ${Constants.devices.tablet} {
    grid-row: 2/3;
    margin-top: 0;
    padding-bottom: 0;
  }

  @media ${Constants.devices.desktop} {
    grid-column: 1/2;
    grid-row: 1/2;
    border-top: 1px solid ${Constants.colorBorder};
  }
  line-height: 1.5;
  position: relative;
  overflow-x: visible;
  padding: 0 50px 0 100px;

  ol {
    list-style-position: inside;
    padding-left: 0;
  }

  ul {
    list-style: none;
  }

  aside {
    position: absolute;
    left: 15px;
    width: 70px;
  }

  header {
    display: block;
    border: 0;
    text-align: right !important;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 40px;

    aside {
      text-indent: -9999px;

      &::before {
        content: '☞';
        position: absolute;
        color: ${Constants.colorInteractive};
        left: 0px;
        text-indent: 0;
        font-size: 1.5em;
        font-weight: 400;
      }

      &:hover {
        text-indent: 0px;
        background-color: white;
        border-radius: 5px;
        padding: 2px 5px;
        border: 1px solid grey;
        overflow: hidden;
        z-index: 100;
        width: auto;
        max-width: 100px;

        &::before {
          content: '';
        }
      }
    }
  }
`;

export const Hanging = styled.span`
  margin-left: -60px;

  @media only screen and (max-width: 600px)
  {
    margin-left: -10px;
  }
`;

export const LeftPadding = styled.span`
  padding-left: 10px;
`;

export const Date = styled.span`
  margin-left: -74px;
  padding-right: 12px;
`;

export const HangingDate = styled(Hanging)`
  padding-right: 12px;
`;
