import styled from 'styled-components';
import * as Constants from '../../constants';

// Main container for the Landing page
export const LandingContainer = styled.div`
  margin: 10px auto;
  width: 90vw;
  max-width: 900px;
  overflow-y: auto;

  #introAndControls {
    max-width: 600px;
    margin: 10px auto 2.5rem auto;

    p {
      line-height: ${Constants.openLeading};
    }

    .controls {
      width: 100%;
      text-align: center;

      button {
        border: 0;
        line-height: 50px;
        padding: 0 20px;
        width: 50%;
        background-color: ${Constants.colorInteractive};
        color: white;
        &.active,
        &:hover {
          background-color: white;
          color: ${Constants.colorInteractive};
        }
      }
    }
  }

  #notMeetings {
    list-style: none;
    min-height: 100%;
    margin: 0 0 2.5rem 0;
    padding: 0;

    li {
      margin: 0 0 10px 0;

      a {
        display: block;
        margin: 0;
        padding: 1rem;
        color: ${Constants.colorText};
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.4);
        transition: background-color 300ms, box-shadow 1000ms;
        box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.1);
        
        &:hover,
        &:active {
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.025);
        }

        span {
          display: block;
          text-align: center;
        }
      }
    }
  }

  h2 {
    a {
      color: ${Constants.colorText};
      text-decoration: none;
    }
  }

  @media ${Constants.devices.tablet} {
    #notMeetings {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      li {
        display: flex;
        flex-basis: calc(50% - 5px);
        justify-content: center;
        flex-direction: column;

        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }
      }
    }
  }
`;
