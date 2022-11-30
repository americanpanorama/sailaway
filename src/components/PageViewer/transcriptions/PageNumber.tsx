import React, { useRef, useLayoutEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usePageNumberOffsetsContexts, useOnScreen, useDimensions } from '../../../hooks';
import '../../../styles/PageViewer/PageNumber.scss';

const PageNumber = ({ num }: { num: number }) => {
  const navigate = useNavigate();
  const dimensions = useDimensions();
  const ref: any = useRef<HTMLDivElement>();
  const { activePage, isAutoScrolling } = usePageNumberOffsetsContexts();

  
  const y = useOnScreen(ref);
  
  // I *think* useLayoutEffect is preferable to useEffect here as you want to get the y location asap and prevent browser painting from preventing a scroll from being missed.
  useLayoutEffect(() => {
    const headersHeight = dimensions.header.height + dimensions.headerTitle.height;
    const transcriptionHeight = dimensions.height - headersHeight - dimensions.footer.height;
    // set the y range for detecting page anchors for autonavigations at 10% of the height of the transcription area
    const detectionY = transcriptionHeight * 0.1;
    if (y && y >= 0 && y <= detectionY && activePage !== 0 && activePage !== num && !isAutoScrolling) {
      // if the pagenumber is at the top of the screen, navigate to it
      // set a slight delay to account for scrolling events like find that you can't keep track of
      setTimeout(() => {
        const anotherY = ref.current.getBoundingClientRect().y - headersHeight;
        if (anotherY >= 0 && anotherY <= detectionY) {
          navigate(`../${num}`);
        }
      }, 50)
    }
  }, [y, activePage, num, isAutoScrolling, dimensions]);

  return (
    <>
      <span id={`page-${num}`} ref={ref} className='page-point'>.</span>
      <Link to={`../${num}`} className='page-link'>
        <span className="page-number">
          <span className='label'>Page</span>
          {num}
        </span>
      </Link>
    </>
  );
}

export default React.memo(PageNumber);