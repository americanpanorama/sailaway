import styled from 'styled-components';
import * as Constants from '../../constants';

// Outer container taking full width of the viewport
export const OuterContainer = styled.div`
  width: 100%;
  overflow-y: auto; /* Enables scroll if needed */
  height: calc(100vh - (${Constants.headerHeight}px + ${Constants.footerHeight}px));

  @media (min-width: 600px) {
    overflow-y: scroll; /* Ensures scrollbar is always visible on wider screens */
  }
`;

// Inner container for centering content
export const InnerContainer = styled.div`
  max-width: 600px; /* Sets maximum width for the content */
  width: 95%; /* Ensures the inner container is responsive up to the max-width */
  margin: 0 auto; /* Centers the inner container */
  line-height: 1.7;

  p {
    line-height: 1.7;
  }
`;