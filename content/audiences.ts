import { Audience } from '@/lib/types';

// "Find Your Lane" — eyebrow + heading mirror Meet the Team / What's Next.
// Tiles render as a 2x2 dark-panel card grid; plain statements unless `href` is set.
export const audiencesSection = {
	eyebrow: 'WHO SHOWS UP',
	heading: 'Find Your Lane',
} as const;

export const audiences: Audience[] = [
	{
		id: 'going-independent',
		title: 'Going Independent',
		body: "You've spent years making other people's ideas real. Come make your own — we'll show you how far you can get in an afternoon.",
	},
	{
		id: 'founders',
		title: 'Founders',
		body: 'Stop waiting on a dev queue. Build the prototype yourself, this week, and put it in front of users on Monday.',
	},
	{
		id: 'developers',
		title: 'Developers',
		body: 'You already ship. Now ship 3x faster — and trade notes with people pushing Cursor as hard as you are.',
	},
	{
		id: 'vibe-coders',
		title: 'Vibe Coders & the Curious',
		body: 'Never written a line of code — or already shipping apps by describing them? Both work here. Bring an idea and a laptop; leave with something real.',
	},
];
