import { CursorEvent } from '@/lib/types';

const LUMA_URL = 'https://luma.com/cursor-johannesburg-africa';

export const events: CursorEvent[] = [
	{
		id: 'cafe-cursor-johannesburg',
		title: 'Cafe Cursor Johannesburg',
		upcomingTitle: 'Cursor Meetup',
		date: '2026-07-23',
		displayDate: 'July 23, 2026',
		location: 'Johannesburg, South Africa',
		venue: 'To be confirmed',
		lumaUrl: LUMA_URL,
		status: 'upcoming',
	},
	{
		id: 'cafe-cursor-johannesburg-june',
		title: 'Cafe Cursor Johannesburg',
		date: '2026-06-05',
		displayDate: 'June 5, 2026',
		location: 'Braamfontein, Johannesburg',
		venue: 'Mamakashaka & Friends, Braamfontein',
		mapsUrl:
			'https://www.google.com/maps/place/Mamakashaka+%26+Friends/@-26.1942986,28.0321808,17z/data=!3m1!4b1!4m6!3m5!1s0x1e950df245085d63:0xb9de9ab406de3cf6!8m2!3d-26.1942986!4d28.0347557!16s%2Fg%2F11w43c0sz1?entry=ttu',
		lumaUrl: `${LUMA_URL}?period=past`,
		recapPath: '/recaps/cafe-cursor-johannesburg',
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');

export const DAY_MS = 86_400_000;

// How close (in days) the next event must be before the hero countdown appears.
export const COUNTDOWN_WINDOW_DAYS = 14;

// Local midnight of the event day, matching how dates are formatted elsewhere on the site.
export function eventStartMs(event: CursorEvent): number {
	return new Date(`${event.date}T00:00:00`).getTime();
}

// Soonest event whose day has not fully passed. Date-driven so a stale `status` can never desync it.
export function getNextEvent(nowMs: number): CursorEvent | null {
	return (
		[...events]
			.filter((event) => eventStartMs(event) + DAY_MS > nowMs)
			.sort((a, b) => eventStartMs(a) - eventStartMs(b))[0] ?? null
	);
}

/** Title shown on the hero countdown and featured upcoming card. */
export function getEventDisplayTitle(event: CursorEvent): string {
	return event.upcomingTitle ?? event.title;
}

/** City label derived from `location` (e.g. "Johannesburg, South Africa" → "Johannesburg"). */
export function getEventCity(event: CursorEvent): string {
	return event.location.split(',')[0].trim();
}

export function formatEventDate(
	date: string,
	locale = 'en',
	style: 'short' | 'long' = 'short',
): string {
	return new Date(`${date}T00:00:00`).toLocaleDateString(locale === 'en' ? 'en-US' : locale, {
		year: 'numeric',
		month: style === 'long' ? 'long' : 'short',
		day: 'numeric',
	});
}
