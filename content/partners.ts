import { Partner } from '@/lib/types';

// TODO: These are placeholder venues. Replace with real Cursor South Africa
// hosting partners / sponsors. Each logo lives in public/images/partners/ and has
// its name baked into the SVG, so add a new SVG when you change a partner's name.
export const partners: Partner[] = [
	{
		name: 'Riverside Craft Cafe',
		logo: '/images/partners/riverside-craft-cafe.svg',
		url: 'https://example.com/riverside-craft-cafe',
		logoBg: '#ffffff',
		logoHeight: 'h-12',
	},
	{
		name: 'Lantern Yard Studio',
		logo: '/images/partners/lantern-yard-studio.svg',
		url: 'https://example.com/lantern-yard-studio',
		logoBg: '#f5f7ff',
		logoHeight: 'h-10',
	},
	{
		name: 'Atlas Roastery',
		logo: '/images/partners/atlas-roastery.svg',
		url: 'https://example.com/atlas-roastery',
		logoBg: '#fdf6f0',
		logoHeight: 'h-10',
	},
];
