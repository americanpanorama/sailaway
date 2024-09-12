import { useState } from 'react';
import { useDimensions } from '../../hooks';
import PageNav from './PageNav/Index';
import Scan from './Scan/Index';
import Transcription from './Transcription/Index';
import Tabs from './Tabs/Index';
import 'leaflet/dist/leaflet.css';
import {
  PageViewerContainer,
} from './styled';

function PageViewer() {
  const { media } = useDimensions();
  const [isTranscript, setIsTranscript] = useState(true);

  return (
    <PageViewerContainer>
      {media !== 'desktop' && (
        <Tabs
          isTranscript={isTranscript}
          setIsTranscript={setIsTranscript}
        />
      )}

      {(media === 'desktop' || isTranscript) && 
        <Transcription />
      }

      {(media === 'desktop' || !isTranscript) && (
        <Scan />
      )}

      <PageNav />
    </PageViewerContainer>
  );
}

export default PageViewer;
