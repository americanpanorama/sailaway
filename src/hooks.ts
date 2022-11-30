import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import type { MutableRefObject } from 'react';
import { PageNumberOffsetsContexts, AppContext } from './Contexts';

export function usePageNumberOffsetsContexts() {
  return useContext(PageNumberOffsetsContexts); 
};

export function useDimensions() {
  return useContext(AppContext); 
};

export function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): number | boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [y, setY] = useState<number | boolean>(false);
  const dimensions = useDimensions();

  const headersHeight = dimensions.header.height + dimensions.headerTitle.height;

  // check to see if the element is on the screen
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setY(entry.boundingClientRect.y - headersHeight);
        } else {
          setIsIntersecting(false);
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
      observer.unobserve(element);
    };
  }, [headersHeight]); // Empty array ensures that effect is only run on mount and unmount

  // if it is on the screen, keep track of its y coordinate
  useLayoutEffect(() => {
    if (isIntersecting) {
      const container = document.getElementById("transcription");
      const onScroll = (e: any) => {
        setY(ref.current.getBoundingClientRect().y - headersHeight);
      };
      container?.addEventListener("scroll", onScroll);
      return () => { container?.removeEventListener("scroll", onScroll); };
    }
  });
  return y;
}