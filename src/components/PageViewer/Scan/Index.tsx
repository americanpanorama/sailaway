import {  TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import * as Styled from './styled';

const Scan = () => {
  const { page } = useParams();
  const page_num = parseInt(page as string) ?? 1;

  const url = `//s3.amazonaws.com/dsl-general/sailaway/${page_num}/{z}/{x}/{y}.png`;

  return (
    <Styled.PageImage
      center={[0, 0]}
      bounds={[
        [-84, -180],
        [84, 60],
      ]}
      minZoom={1}
    >
      <TileLayer
        url={url}
        zIndex={1000}
        maxNativeZoom={4}
        maxZoom={6}
        noWrap
        key={`page${page_num}`}
      />
    </Styled.PageImage>
  );
};

export default Scan;