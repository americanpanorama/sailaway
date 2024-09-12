import React, { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumberOffsetsContexts, useOnScreen, useDimensions } from '../../../hooks';
import { PagePoint, PageLink, PageNumberContainer } from './styled';
import { active } from 'd3';

const PageNumber = ({ num }: { num: number }) => {
  const navigate = useNavigate();
  const dimensions = useDimensions();
  const ref = useRef<HTMLDivElement>(null);
  const { activePage, isAutoScrolling, containerRef } = usePageNumberOffsetsContexts();

  const y = useOnScreen(ref, containerRef);

  useLayoutEffect(() => {
    const headersHeight = dimensions.header.height + dimensions.headerTitle.height;
    const transcriptionHeight = dimensions.height - headersHeight - dimensions.footer.height;

    // set a window of space to detect the page
    const detectionHeight = ([169, 178, 179, 238].includes(activePage) ? 35 : Math.min(150, transcriptionHeight * 0.2));
    //const detectionY = transcriptionHeight * 0.2;

    // Define the function to check visibility
    const checkVisibility = () => {
      if (ref.current) {
        const anotherY = ref.current.getBoundingClientRect().y - headersHeight;
        if (anotherY >= 0 && anotherY <= detectionHeight && activePage !== 0 && activePage !== num && !isAutoScrolling) {
          navigate(`../${num}`);
        } else {
          requestAnimationFrame(checkVisibility); // Continue checking until conditions are met
        }
      }
    };

    // Start the animation frame check
    if (y && typeof y === 'number' && y >= 0 && y <= detectionHeight && activePage !== 0 && activePage !== num && !isAutoScrolling) {
      requestAnimationFrame(checkVisibility);
    }
  }, [y, activePage, num, isAutoScrolling, dimensions]);

  return (
    <>
      <PagePoint id={`page-${num}`} ref={ref} />
      <PageLink to={`../${num}`}>
        <PageNumberContainer>
          <span className="label">Page</span>
          {num}
        </PageNumberContainer>
      </PageLink>
    </>
  );
}

export default React.memo(PageNumber);
