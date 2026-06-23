import { HeaderPhoto } from '@/lib/types';

// TODO: Swap in real photos from Cursor South Africa events (keep them in
// public/images/events/). This layout uses explicit grid coordinates (1-indexed)
// for deterministic placement. Desktop grid: 4 columns x 4 rows (16 cells).
export const headerPhotos: HeaderPhoto[] = [
	{
		src: '/images/events/cursor-event-01.jpg',
		alt: 'Cursor South Africa community event group photo',
		row: 1,
		col: 1,
		rowSpan: 2,
		colSpan: 2,
		mobile: { row: 1, col: 1, rowSpan: 2, colSpan: 2 },
	},
	{
		src: '/images/events/cursor-event-02.jpg',
		alt: 'Cursor South Africa meetup participants working together',
		row: 1,
		col: 3,
		mobile: { row: 3, col: 1 },
	},
	{
		src: '/images/events/cursor-event-04.jpg',
		alt: 'Cursor South Africa community photo from event',
		row: 1,
		col: 4,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/images/events/cursor-event-03.jpg',
		alt: 'Cursor South Africa workshop moment during session',
		row: 2,
		col: 3,
		mobile: { row: 3, col: 2 },
	},
	{
		src: '/images/events/cursor-event-05.jpg',
		alt: 'Cursor South Africa meetup attendees in discussion',
		row: 3,
		col: 1,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/images/events/cursor-event-07.jpg',
		alt: 'Cursor South Africa community moment from social share',
		row: 3,
		col: 2,
		rowSpan: 2,
		colSpan: 2,
		mobileHidden: true,
	},
	{
		src: '/images/events/cursor-event-06.jpg',
		alt: 'Cursor South Africa event participants and speakers',
		row: 3,
		col: 4,
		rowSpan: 2,
		mobile: { row: 4, col: 1, colSpan: 2 },
	},
];
