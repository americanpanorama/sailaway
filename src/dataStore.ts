import Metadata from './data/metadata.json';
import Meetings from './data/meetings.json';
import Pages from './data/pages.json';
import type { Item, DocType, Text, Meeting } from './index.d';
import { ensure } from './utilities';

export const metadata: Item[] = Metadata;

export function getMetadataForYears(yearStart: number, yearEnd: number, docType: DocType = 'Gem of Beverly'): (Text & {to: string})[] {
  if ((docType === 'Gem of Beverly')) {
    const boardMinutes = ensure(metadata.find(d => d.id === 'BoardMinutes'));
    return ensure(boardMinutes.bookmarks)
      .filter(d => d.year && d.year >= yearStart && d.year <= yearEnd)
      .map(d => {
        // get the idx fo the image
        const imgIdx = boardMinutes.images.findIndex(img => img === d.images[0]);
        return {
          ...d,
          to: `BoardMinutes/${imgIdx}`
        }
      });
  }
  return metadata
    .filter(d => d.id !== 'BoardMinutes')
    .filter(d => d.year && d.year >= yearStart && d.year <= yearEnd)
    .map(d => ({
      year: d.year,
      month: d.month,
      day: d.day,
      title: d.title,
      images: d.images,
      to: `${d.title.replace(/[^a-z0-9+]+/gi, '')}${d.year || ''}${d.month || ''}${d.day || ''}/0`
    }));;
}

export function getPagesForYears(yearStart: number, yearEnd: number)  {
  const meetings = Meetings;
  return meetings
      .filter(d => d.year && d.year >= yearStart && d.year <= yearEnd)
      .map(d => {
        return {
          ...d,
          to: `BoardMinutes/${d.page}#meeting-${d.ymd}`,
        }
      });
}

export function getMeetingForPage(page: number) {
  const pages = Pages;
  const meeting = pages.find(d => d.page === page);
  if (meeting && meeting.year && meeting.month) {
    return {
      ...meeting,
      ymd: `${meeting.year}-${(meeting.month < 10) ? `0${meeting.month}`: meeting.month}${(meeting.day) ? `-${(meeting.day < 10) ? `0${meeting.day}` : meeting.day}` : ''}`,
    }
  }
  return meeting;
}