import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link, useParams } from 'react-router-dom';
import { useDimensions } from '../../hooks';
import Transcription from './Transcription';

import 'leaflet/dist/leaflet.css';
import '../../styles/App.scss';
import '../../styles/PageViewer/Index.scss';


function PageViewer() {
  const { page } = useParams();
  const page_num = parseInt(page as string);
  const { media } = useDimensions();
  const [isTranscript, setIsTranscript] = useState(true);

  // the pages are offset by 28--i.e page 1 is 29/{z}/{x}/{y}.png
  const url = `//s3.amazonaws.com/dsl-general/sailaway/${page_num + 28}/{z}/{x}/{y}.png`;
  //const url = `${process.env.PUBLIC_URL}/static/tiles/${page_num + 28}/{z}/{x}/{y}.png`;
  return (
    <div id='pageViewer'>
      {(media !== "desktop") && (
        <div className="tabs">

          <div className="tab">
            <input type="radio" id="tab1" name="tab-group" checked={isTranscript} />
            <label htmlFor="tab1" onClick={() => { setIsTranscript(true) }}>Transcript</label>
          </div>
          <div className="tab">
            <input type="radio" id="tab2" name="tab-group" checked={!isTranscript} />
            <label htmlFor="tab2" onClick={() => { setIsTranscript(false) }}>Original Scan</label>
          </div>

          {/* 
          <button onClick={() => {setIsTranscript(true)}}>Transcript</button>
          <button onClick={() => {setIsTranscript(false)}}>Original Scan</button>
          */}
        </div>
      )}

      {(media === "desktop" || isTranscript) && (
        <Transcription />
      )}

      {(media === "desktop" || !isTranscript) && (
        <MapContainer
          center={[0, 0]}
          bounds={[[-84, -180], [84, 60]]} // these bounds are for just the trustee volume--something more robust will be needed for the reports and corresponding
          minZoom={1}
          id="page_image"
        >
          <TileLayer
            url={url}
            zIndex={1000}
            maxNativeZoom={4}
            maxZoom={6}
            noWrap
            key={`page${page_num}`}
          />
        </MapContainer>
      )}

      <nav>

        {(page_num > 0) && (
          <Link to={`../${page_num - 1}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.52 331.63">
              <path d="M165.82 331.28.35 165.82 165.82.35" />
            </svg>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        )}

        Page&nbsp;{page_num}/414

        {(page_num < 414) && (
          <Link to={`../${page_num + 1}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.52 331.63">
              <path d="m.35 331.28 165.47-165.46L.35.35" />
            </svg>
          </Link>
        )}

      </nav>

    </div>
  );
}

export default PageViewer;
