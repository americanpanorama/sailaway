import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import { getMetadataForYears, getPagesForYears } from '../../dataStore';
import { DocType } from '../..';
import '../../styles/Landing/TextsMenu.scss';

type Props = {
  yearStart: number;
  yearEnd: number;
  docType: DocType;
}

const TextsMenu = ({ yearStart, yearEnd, docType }: Props) => {
  const texts = getPagesForYears(yearStart, yearEnd);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [isOpen, setIsOpen] = useState(false);
  const [horzX1, setHorzX1] = useState(6);
  const [horzX2, setHorzX2] = useState(18);
  const [horzStokeWidth, setHorzStokeWidth] = useState(2);
  const [vertY1, setVertY1] = useState(6);
  const [vertY2, setVertY2] = useState(18);
  const horizontalRef = useRef(null);
  const verticalRef = useRef(null);
  
  useEffect (() => {
    d3.select(horizontalRef.current)
      .transition()
      .duration(300)
      .attr('x1', (isOpen) ? 5 : 6)
      .attr('x2', (isOpen) ? 19 : 18)
      .attr('stroke-width', (isOpen) ? 3 : 2)
      .on('end', () => {
        setHorzX1((isOpen) ? 5 : 6);
        setHorzX2((isOpen) ? 19 : 18);
        setHorzStokeWidth((isOpen) ? 3 : 2);
      });
      d3.select(verticalRef.current)
      .transition()
      .duration(300)
      .attr('y1', (isOpen) ? 11.9 : 6)
      .attr('y2', (isOpen) ? 12.1 : 18)
      .on('end', () => {
        setVertY1((isOpen) ? 11.9 : 6);
        setVertY2((isOpen) ? 12.1 : 18);
      });
  }, [isOpen]);

  return (
    <div className='texts-menu'>
      <h2 onClick={() => setIsOpen(!isOpen)}>

       <svg width={24} height={24}>
          <circle cx={12} cy={12} r={11} fill="#3366CC"/>
          <line x1={horzX1} y1={12} x2={horzX2} y2={12} stroke="white" strokeWidth={horzStokeWidth} ref={horizontalRef}/>
          <line x1={12} y1={vertY1} x2={12} y2={vertY2} stroke="white" strokeWidth={2} ref={verticalRef}/>
       </svg>

        {` ${yearStart}-${yearEnd}`}
      </h2>
      {(isOpen) && (
        <ul key={`${yearEnd}-${yearStart}-${docType}`}>
          {texts.map(text => (
            <li
              key={`${text.year}-${text.month}-${text.day}`}
            >
              {/* todo: this is an ugly string--simplify it somehow. */}
              <Link
                to={text.to}
                className={(text.hadNoQuorum) ? 'noquorum' : ''}
              >
                <span className='date'>
                  {`${(text.month) ? `${months[text.month - 1]} `: ''}${(text.day) ? `${text.day}, `: ''}${text.year}`}
                </span>
                <span>
                  {` ${(text.isAnnual) ? 'Annual ' : ''}Meeting${(text.hadNoQuorum) ? ' (no quorum)' : ''}`}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div >
  )
};

export default TextsMenu;