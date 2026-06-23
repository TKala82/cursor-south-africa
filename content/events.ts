import { CursorEvent } from '@/lib/types';

// TODO: Replace dates, venues, and Luma URLs with real Cursor South Africa events.
export const events: CursorEvent[] = [
	{
		id: 'cafe-cursor-johannesburg',
		title: 'Cafe Cursor Johannesburg',
		date: '2026-07-26',
		displayDate: 'July 26, 2026',
		location: 'Johannesburg, South Africa',
		lumaUrl: 'https://lu.ma/cursor-south-africa',
		status: 'upcoming',
	},
	{
		id: 'cafe-cursor-cape-town',
		title: 'Cafe Cursor Cape Town',
		date: '2026-08-30',
		displayDate: 'August 30, 2026',
		location: 'Cape Town, South Africa',
		lumaUrl: 'https://lu.ma/cursor-south-africa',
		status: 'upcoming',
	},
	{
		id: 'cursor-meetup-johannesburg-may',
		title: 'Cursor Meetup Johannesburg',
		date: '2026-05-17',
		displayDate: 'May 17, 2026',
		attendees: 42,
		location: 'Johannesburg, South Africa',
		recapPath: '/recaps/cafe-cursor-johannesburg',
		thumbnail: '/images/events/cursor-event-01.jpg',
		galleryImages: ['/images/events/cursor-event-02.jpg', '/images/events/cursor-event-04.jpg'],
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
