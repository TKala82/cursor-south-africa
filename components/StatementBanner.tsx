// components/StatementBanner.tsx
//
// Full-bleed statement banner — the "break the monotony" moment.
// Sits between What's Next (the ask) and Meet the Team, so the bold thesis
// lands right after the visitor has been asked to register and right before
// they meet the people behind the community.
//
// Static by design (no scroll animation): the scale + color do the work,
// nothing to break on slow connections or for reduced-motion users.
//
// Self-contained. The orange/black are scoped here so the banner can shout
// without touching the site's global tokens.

import React from 'react';

export const statementBanner = {
	// Keep it short. Three words ties the whole "permission to start" spine
	// into one line. Edit here — copy is content, not markup.
	text: 'CURSOR IS THE ANSWER.',
} as const;

const StatementBanner: React.FC = () => {
	return (
		<section
			aria-label="Statement"
			style={{
				// Full-bleed: break out of the page's centered container.
				width: '100vw',
				position: 'relative',
				left: '50%',
				right: '50%',
				marginLeft: '-50vw',
				marginRight: '-50vw',
				backgroundColor: '#000000',
				// Generous vertical breathing room is what makes it read as an
				// interruption rather than just another section.
				paddingBlock: 'clamp(5rem, 14vw, 10rem)',
				paddingInline: 'clamp(1.25rem, 6vw, 6rem)',
			}}
		>
			<h2
				style={{
					margin: 0,
					color: '#FF5C0A', // bright orange on black
					fontWeight: 800,
					lineHeight: 1.02,
					letterSpacing: '-0.02em',
					// Fluid type: fills the banner on desktop, stays readable on a phone.
					fontSize: 'clamp(2.5rem, 9vw, 7rem)',
					textTransform: 'uppercase',
					textWrap: 'balance',
					maxWidth: '20ch',
				}}
			>
				{statementBanner.text}
			</h2>
		</section>
	);
};

export default StatementBanner;
