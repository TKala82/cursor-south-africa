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
	text: 'CURSOR IS THE ANSWER',
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
				// No horizontal padding: the justified headline runs edge to edge,
				// so the first/last glyphs sit against the page edges.
				paddingInline: 0,
			}}
		>
			<h2
				style={{
					margin: 0,
					color: '#FF5C0A', // bright orange on black
					fontWeight: 800,
					lineHeight: 1.02,
					// Keep letters un-tightened so the inter-character justify below
					// has slack to track them apart rather than fighting a negative base.
					letterSpacing: '0',
					// Fluid type: fills the banner on desktop, stays readable on a phone.
					fontSize: 'clamp(2.5rem, 9vw, 7rem)',
					textTransform: 'uppercase',
					// Justify the single line edge to edge. With inter-character below,
					// the fill-space is spread between EVERY glyph, so the letters track
					// out to the full width and the word gaps shrink (but stay readable),
					// while "C" still hits the far left and the last "R" the far right.
					textAlign: 'justify',
					textAlignLast: 'justify',
					// The key change: distribute slack between characters, not just at
					// word spaces. Supported in Chromium/Firefox; Safari ignores it and
					// falls back to the previous word-justified look.
					textJustify: 'inter-character',
				}}
			>
				{statementBanner.text}
			</h2>
		</section>
	);
};

export default StatementBanner;
