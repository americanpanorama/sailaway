import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import * as d3 from 'd3';
import { getPagesForYears, getMeetingForPage } from '../../dataStore';
import { useDimensions } from '../../hooks';
import '../../styles/PageViewer/Timeline.scss';

const yearHeight = 350;

const y = d3.scaleTime()
  .domain([new Date('1840-01-01'), new Date('1871-01-01')])
  .range([0, 32 * yearHeight]);

const Timeline = () => {
  const { page: pageStr } = useParams() as { page: string };
  const page = parseInt(pageStr, 10) as number;
  const { hash } = useLocation();
  const { transcription } = useDimensions();
  const ref = useRef(null);
  const meetings = getPagesForYears(1840, 1871);

  const monthAbbrs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const meeting = getMeetingForPage(page);
  let date: string = '1840-01-01';
  if (hash) {
    date = hash.replace('#meeting-', '');
  } else if (meeting && 'ymd' in meeting) {
    date = meeting.ymd;
  }

  const [translateY, setTranslateY] = useState(0);

  const years = Array.from({ length: 32 }, (v, i) => i + 1840);

  const months: { year: number; month: number }[] = [];
  const theMonths = Array.from({ length: 12 }, (v, i) => i + 1);
  years.forEach(year => {
    theMonths.forEach(month => {
      if (year < 1871 || month <= 1) {
        months.push({
          year,
          month
        });
      }
    })
  });

  useEffect(() => {
    if (date) {
      d3.select(ref.current)
        .transition()
        .duration(300)
        .style('transform', `translateY(${y(new Date(date)) * -1 + transcription.height / 2}px)`)
        .on('end', () => {
          setTranslateY(y(new Date(date)) * -1);
        });
    }
  }, [date, transcription.height]);

  useEffect(() => {
    if (!date) {
      const meeting = getMeetingForPage(page);
      if (meeting && 'ymd' in meeting) {
        console.log(`translate(0 ${y(new Date(meeting.ymd)) * -1}px)`);
        d3.select(ref.current)
          .transition()
          .duration(300)
          .style('transform', `translateY(${y(new Date(meeting.ymd)) * -1}px)`)
          .on('end', () => {
            setTranslateY(y(new Date(meeting.ymd)) * -1);
          });
      }
    }
  }, [date, page]);

  return (
    <div id='timeline'>
      <svg
        width={400}
        height={yearHeight * 32}
      >
        <g
          ref={ref}
          style={{
            transform: `translateY(${translateY})`
          }}
        >
          <line
            x1={325}
            x2={325}
            y1={0}
            y2='100%'
          />
          {months.map(month => (
            <line
              x1={323}
              x2={327}
              y1={y(new Date(`${month.year}-${month.month}-01`))}
              y2={y(new Date(`${month.year}-${month.month}-01`))}
              key={`tick-for-${month.year}-${month.month}`}
            />
          ))}
          {years.map(year => (
            <g key={`text-for-${year}`}>
              <text
                x={340}
                y={y(new Date(`${year}-01-01`)) + 8}
                className='text-halo'
              >
                {year}
              </text>
              <text
                x={340}
                y={y(new Date(`${year}-01-01`)) + 8}
              >
                {year}
              </text>
            </g>
          ))}
          {(date) && (
            <circle
              cx={325}
              cy={y(new Date(date))}
              r={10}
              className='meeting-halo selected'
            />
          )}
          {meetings.filter(d => !d.hadNoQuorum).map(meeting => (
            <Link
              to={`../../${meeting.to}`}
              key={`meeting-circle-for-${meeting.ymd}`}
              className='meeting-label'
            >
              <circle
                cx={325}
                cy={y(new Date(meeting.ymd))}
                r={4}
                className={(meeting.ymd === date) ? 'meeting-circle selected' : 'meeting-circle'}
              />
              <rect 
                x={340 - 5}
                y={y(new Date(meeting.ymd)) - 20}
                rx={5}
                ry={5}
                width={60}
                height={(meeting.isAnnual) ? 70 : 53}
                fill='white'
                className={(meeting.ymd === date) ? 'text-background selected' : 'text-background'}
              />
              <text
                x={340}
                y={y(new Date(meeting.ymd))}
                className={(meeting.ymd === date) ? 'text-halo selected' : 'text-halo'}
              >
                {`${(meeting.month) ? monthAbbrs[meeting.month - 1] : ''} ${meeting.day}`}
                {(meeting.isAnnual) && (
                  <tspan
                    x={340}
                    dy={20}
                  >
                    Annual
                  </tspan>
                )}
                <tspan
                  x={340}
                  dy={20}
                >
                  Meeting
                </tspan>
              </text>
              <text
                x={340}
                y={y(new Date(meeting.ymd))}
                className={(meeting.ymd === date) ? 'selected' : ''}
              >
                {`${(meeting.month) ? monthAbbrs[meeting.month - 1] : ''} ${meeting.day}`}
                {(meeting.isAnnual) && (
                  <tspan
                    x={340}
                    dy={20}
                  >
                    Annual
                  </tspan>
                )}
                <tspan
                  x={340}
                  dy={20}
                >
                  Meeting
                </tspan>
              </text>
            </Link>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default Timeline;