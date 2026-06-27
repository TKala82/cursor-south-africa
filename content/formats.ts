// content/formats.ts
//
// "What We Do" — the four event formats.
// Mirrors the eyebrow + heading pattern (Meet the Team, What's Next) and the
// typed-array + default-export convention used by audiences.ts / events.ts.
//
// Render as a clean 2x2 card grid on desktop, single column on mobile,
// reusing the same rounded dark-panel card styling as the audiences section.
//
// NOTE ON COUNT: Four formats by design, so the 2x2 grid stays clean.
// Virtual Office Hours is intentionally NOT a standalone format yet — the
// idea is folded into Workshops ("or online when you just need to get
// unstuck"). Promote it to its own tile only once office hours run on a
// real, repeating cadence; until then a standalone tile overpromises.

export type EventFormat = {
	/** Stable key for React lists and analytics. */
	id: string;
	/** Format name. */
	title: string;
	/** What actually happens — written so a visitor can picture attending. */
	body: string;
	/**
	 * Optional spotlight flag. Café Cursor is the flagship recurring format.
	 * Kept here so a future layout CAN feature it, even though the current
	 * design renders all four as equal tiles in a 2x2.
	 */
	featured?: boolean;
};

export const formatsSection = {
	eyebrow: 'WHAT WE DO',
	heading: 'Four Ways to Show Up',
} as const;

export const formats: EventFormat[] = [
	{
		id: 'meetups',
		title: 'Meetups',
		body: 'Lightning demos, deep dives, and panel talks — plus live Q&A with the Cursor team. Around two and a half hours of seeing what\u2019s possible and asking the questions you actually have.',
	},
	{
		id: 'cafe-cursor',
		title: 'Café Cursor',
		body: 'We take over a Joburg café for the day. Grab a coffee, maybe a croissant, open your laptop, and build alongside other Cursor enthusiasts. No agenda, no pressure — just a casual co-working space for people who\u2019d rather build than talk about building.',
		featured: true,
	},
	{
		id: 'hackathons',
		title: 'Hackathons',
		body: 'A focused sprint to take an idea from nothing to something real. Bring a problem, leave with a working prototype.',
	},
	{
		id: 'workshops',
		title: 'Workshops',
		body: 'Hands-on, build-along sessions where you learn Cursor by actually using it — in person, or online when you just need to get unstuck. Come in curious, leave knowing how to ship.',
	},
];

export default formats;
