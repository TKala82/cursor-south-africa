import { IntroContent } from '@/lib/types';

// Introduction to Cursor South Africa: the "permission" hook (Option B), structured so the
// prose persuades humans while `audienceList` gives crawlers/agents an explicit who-it's-for.
export const introContent: IntroContent = {
	headline: "You don't need permission to start building.",
	body: "Cursor South Africa is the missing middle's home base, the corporate professional weighing independence, the founder who can finally skip the dev hire, the developer pushing past their ceiling, the person who's never touched code but isn't waiting anymore. Same room, same energy, four different reasons to show up.",
	closing: 'We meet. We build in real time. You leave with something that works.',
	audienceHeading: 'Who this is for',
	audienceList: [
		'Corporate professionals testing independence',
		'Founders building without a dev team',
		'Developers leveling up with AI-assisted coding',
		"First-time builders who've never opened an editor",
	],
};
