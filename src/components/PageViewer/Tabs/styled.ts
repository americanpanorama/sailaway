import styled from "styled-components";
import * as Constants from "../../../constants";

// Styled component for Tabs container
export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 10px);
  min-width: 200px;
  margin: 0 auto;
  text-align: center;
  z-index: 999999999;
  height: 50px;
  
`;

// Styled component for individual Tab
export const Tab = styled.div`
  flex-grow: 1;
  height: 100%;

  label {
    background: white;
    padding: 10px;
    cursor: pointer;
    display: block;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked ~ label {
    color: white;
    background: ${Constants.colorInteractive};
  }
`;