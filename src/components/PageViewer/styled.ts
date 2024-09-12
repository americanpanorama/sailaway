import styled from 'styled-components';
import * as Constants from '../../constants';




// Main container for PageViewer
export const PageViewerContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 45px calc(100vh - (111px + 40px + 45px + 40px)) 46px;


  h2 {
    margin: 0;
    line-height: 45px;
    text-align: center;
    background-color: var(--light-color);
    font-size: clamp(14px, 2.5vw, 24px);
  }


  @media ${Constants.devices.tablet} {
    height: calc(100vh - ${Constants.headerHeight}px - ${Constants.footerHeight}px);
    height: calc(100svh - ${Constants.headerHeight}px - ${Constants.footerHeight}px);
    grid-template-columns: 100vw;
    grid-template-rows: 50px calc(100% - (50px + 46px)) 46px;
  }

  @media ${Constants.devices.desktop} {
    grid-template-columns: 50% 50%;
    grid-template-rows: calc(100% - 46px) 46px;

    header {
      align-self: center;
      grid-column: 1/3;
      grid-row: 1/2;
    }
  }
`;





