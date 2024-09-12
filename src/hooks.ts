import { useEffect, useState, useContext } from 'react';
import type { MutableRefObject } from 'react';
import { PageNumberOffsetsContexts, AppContext } from './Contexts';

export function usePageNumberOffsetsContexts() {
  return useContext(PageNumberOffsetsContexts); 
};

export function useDimensions() {
  return useContext(AppContext); 
};


export function useOnScreen<T extends Element>(
  ref: MutableRefObject<T | null>,
  containterRef: MutableRefObject<HTMLDivElement | null>,
  rootMargin: string = '0px'
): number | boolean {
  const [y, setY] = useState<number | boolean>(false);
  const dimensions = useDimensions();
  const headersHeight = dimensions.header.height + dimensions.headerTitle.height;

  // Utility to throttle a function call
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return (...args: any[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // Check to see if the element is on the screen
  useEffect(() => {
    const element = ref.current;
    if (!element) return; // Exit early if the ref is not set
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setY(entry.boundingClientRect.y - headersHeight);
        }
      },
      {
        rootMargin,
      }
    );

    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [headersHeight, rootMargin, ref]); // Dependencies

  // Throttled scroll handler
  useEffect(() => {
    const container = containterRef.current;
    if (!container) return;

    const handleScroll = throttle(() => {
      if (ref.current) {
        const currentY = ref.current.getBoundingClientRect().y - headersHeight;
        setY(currentY);
      }
    }, 100); // Adjust the throttle time as needed

    // Listen for scroll events
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [headersHeight, ref, containterRef]);

  // On scroll end, perform a final check
  useEffect(() => {
    const container = document.getElementById('transcription');
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScrollEnd = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (ref.current) {
          const currentY = ref.current.getBoundingClientRect().y - headersHeight;
          setY(currentY);
        }
      }, 100); // Adjust the delay as needed
    };

    container.addEventListener('scroll', handleScrollEnd);

    return () => {
      container.removeEventListener('scroll', handleScrollEnd);
    };
  }, [headersHeight, ref]);

  return y;
}


// export function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): number | boolean {
//   // State and setter for storing whether element is visible
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const [y, setY] = useState<number | boolean>(false);
//   const dimensions = useDimensions();

//   const headersHeight = dimensions.header.height + dimensions.headerTitle.height;

//   // check to see if the element is on the screen
//   useEffect(() => {
//     const element = ref.current;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsIntersecting(true);
//           setY(entry.boundingClientRect.y - headersHeight);
//         } else {
//           setIsIntersecting(false);
//         }
//       },
//       {
//         rootMargin,
//       }
//     );
//     if (element) {
//       observer.observe(element);
//     }
//     return () => {
//       observer.unobserve(element);
//     };
//   }, [headersHeight, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

//   // if it is on the screen, keep track of its y coordinate
//   useLayoutEffect(() => {
//     if (isIntersecting) {
//       const container = document.getElementById("transcription");
//       const onScroll = (e: any) => {
//         setY(ref.current.getBoundingClientRect().y - headersHeight);
//       };
//       container?.addEventListener("scroll", onScroll);
//       return () => { container?.removeEventListener("scroll", onScroll); };
//     }
//   });
//   return y;
// }