import styled from "styled-components";
import * as Constants from "../../../constants";
import { MapContainer } from "react-leaflet";

export const PageImage = styled(MapContainer)`
  min-height: calc(100vh - 270px);
  width: 100%;
  background-color: black;

  @media ${Constants.devices.desktop} {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;
