import { RecapData } from '@/lib/types';

// TODO: Replace with the real recap once the event has happened.
// All subsections (speakers, projects, highlights, resources) are optional —
// include only the ones relevant to your event.
export const cafeCursorJohannesburgRecap: RecapData = {
	slug: 'cafe-cursor-johannesburg',
	title: 'Cursor Meetup Johannesburg - Recap',
	date: 'May 17, 2026',
	attendees: 42,
	summary: [
		'Builders from across Gauteng gathered for a hands-on day of AI-assisted development with Cursor.',
		'Attendees paired on real projects, shared local workflows, and swapped tips that the Cursor South Africa community can build on.',
	],
	host: {
		name: 'Host Venue',
		logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=200&auto=format&fit=crop',
		url: 'https://example.com/venue',
	},

	// Speakers — who presented at the event and what they talked about
	speakers: [
		{
			name: 'Speaker Name',
			topic: 'Shipping full-stack apps with Cursor',
		},
		{
			name: 'Speaker Name',
			topic: 'From idea to deployed: a live coding session',
		},
	],

	// Projects — what attendees built or showcased
	projects: [
		{
			name: 'Project Name',
			description: 'A short description of something an attendee built with Cursor during the meetup.',
			author: 'Builder Name',
		},
	],

	// Highlights — memorable quotes, feedback, or stories from attendees
	highlights: [
		{
			quote: 'I shipped more in this one afternoon than in my last sprint.',
			author: 'An attendee',
		},
		{
			quote: 'Great to meet other South African builders using Cursor in the real world.',
		},
	],

	// Resources — slides, repos, or links shared during the event
	resources: [{ label: 'Workshop slides', url: '/slides/1' }],

	photoCredits: [{ name: 'Community Volunteer' }],
	photos: [
		{
			src: '/images/events/cursor-event-02.jpg',
			alt: 'Community members coding together in Johannesburg',
		},
		{
			src: '/images/events/cursor-event-04.jpg',
			alt: 'Attendees during the Cursor Johannesburg meetup',
		},
		{
			src: '/images/events/cursor-event-06.jpg',
			alt: 'Organizer speaking to participants',
		},
	],
};
