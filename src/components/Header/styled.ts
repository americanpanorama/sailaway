import styled from "styled-components";
import * as Constants from "../../constants";

// Styled component for the header container
export const HeaderContainer = styled.header`
  height: 110px;
  width: 100vw;
  color: black;
  text-align: center;
  background-color: white;
  border-bottom: 1px solid silver;
  z-index: 999999999;
  background-image: url('/maritimejournal/static/masthead_mobile.jpg');


  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;

  a {
    position: relative;
    margin: 0 30px;
    color: var(--light-color);
    text-decoration: none;
    border: 3px solid transparent;

    &:hover {
      color: var(--accent-color);
    }

    &:after,
    &.active:after {
      position: absolute;
      content: "";
      bottom: calc(50% - 0.75em);
      height: 3px;
      width: 0;
      left: 50%;
      background: ${Constants.colorInteractive};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    &:hover:after {
      width: 100%;
      left: 0;
    }
  }

  @media${Constants.devices.tablet} {
    background-image: url('/maritimejournal/static/masthead_tablet.jpg');
    background-size: cover;
  }

  @media ${Constants.devices.desktop} {
    background-image: linear-gradient(to right, transparent, 120px, rgba(255,255,255,0.6) 180px, rgba(255,255,255,0.2)), url('/maritimejournal/static/masthead_desktop.jpg');
    flex-direction: row;
    position: relative;
    top: auto;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {

      &.ur {
        display: inline;
      }
    }

    nav {
      a {
        margin-right: 20px;
        text-align: right;
        font-size: 1em;
        text-decoration: none;
        line-height: 50px;
        cursor: pointer;
      }
    }
  }
`;

export const Title = styled.div`
  margin: 1em 0;
  h1 {
    color: #2e4e5e;
    display: inline;
    margin: 0;
    font-family: "Cinzel Decorative", serif;
    font-weight: bold;
    font-size: clamp(1.1em, 3vw, 1.8em);
    line-height: 1;

    span {
      font-size: 0.8em;
      color: ${Constants.colorTextLight};
    }

    &.ur {
      display: none;
    }
  }

  h2 {
    color: #748c92;
    font-family: "Roboto Slab", sans-serif;
    margin: 0;
    font-size: clamp(0.8em, 2vw, 1.1em);
    line-height: 1;
  }

  @media ${Constants.devices.desktop} {
    margin-left: 190px;
    text-align: right;
    margin-top: 0;
  }
`;
