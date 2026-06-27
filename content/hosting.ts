// content/hosting.ts
//
// "Become a Hosting Partner" — venue recruitment section.
// Mirrors the eyebrow + heading pattern (Meet the Team, What's Next, What We Do)
// and the typed-array + default-export convention used by audiences.ts / formats.ts.
//
// IMPORTANT — this is a CONVERSION block, not a credibility block.
// It recruits venues (cafés / co-working spaces) to host Café Cursor.
// It is NOT the place for sponsor logos (Cursor / Relume / Wispr) — those
// belong in a separate, quieter "backed by / built with" treatment.
//
// Two asks now live on the page: "register for the event" (visitors, PRIMARY)
// and "host a session" (venues, SECONDARY). Keep this one visually quieter
// than the event CTA so they don't compete.
//
// DESIGN PATTERN (borrowed from an AFLITE Group reference the user supplied):
// the explanation lives in `intro`, ABOVE the boxes — not inside them. The
// three tags below are short, bold, two-word reinforcement hooks, not
// mini-explainers. Render them as plain bordered boxes (no body copy), the
// way AFLITE renders "PAN-AFRICAN NETWORK" / "CULTURAL INTELLIGENCE" /
// "SUSTAINABLE VALUE" beneath their own intro paragraph. The fuller pitch
// only needs to exist once — don't re-explain it three times in the cards.

export type HostingTag = {
	/** Stable key for React lists and analytics. */
	id: string;
	/** Short, bold, two-word hook. No body text — see DESIGN PATTERN above. */
	label: string;
};

export const hostingSection = {
	eyebrow: 'HOST A SESSION',
	heading: 'Become a Hosting Partner',
	// Lead with the venue's upside + signal the ask is tiny ("you bring the coffee").
	// This line carries ALL of the explaining — the tags below do not repeat it.
	intro:
		'We bring a room full of builders, founders, and developers to your space. You bring the coffee. Café Cursor turns a quiet weekday into a full house.',
	// The friction-killer block. Leads with the favorite kicker phrase ("just
	// busier") instead of burying it, then states our job vs. their job, and
	// closes the loop back to "you bring the coffee" from the intro above.
	whatHostingLooksLike: {
		title: 'What hosting looks like',
		body: 'Same business. Just busier. We bring the people, the energy, the invites — you bring the coffee.',
	},
	// Keep this secondary to the visitor/event CTA.
	cta: {
		label: 'Host Café Cursor',
		// Point at a short form / email / LinkedIn DM. Replace with your real target.
		href: '#contact',
	},
} as const;

export const hostingTags: HostingTag[] = [
	{ id: 'quiet-hours', label: 'BUSIER HOURS' },
	{ id: 'foot-traffic', label: 'BUILT-IN TRAFFIC' },
	{ id: 'visibility', label: 'EARNED VISIBILITY' },
];

export default hostingTags;
