'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import IntroSection from '@/components/IntroSection';
import WhatWeDo from '@/components/WhatWeDo';
import AudienceHooks from '@/components/AudienceHooks';
import HeroHeader from '@/components/HeroHeader';
import EventCountdown from '@/components/EventCountdown';
import JohannesburgSkyline from '@/components/JohannesburgSkyline';
import AmbassadorSection from '@/components/AmbassadorSection';
import UpcomingEvents from '@/components/UpcomingEvents';
import PastEvents from '@/components/PastEvents';
import StatementBanner from '@/components/StatementBanner';
import HostingPartners from '@/components/HostingPartners';
import SectionDivider from '@/components/SectionDivider';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/content/site.config';
import { upcomingEvents } from '@/content/events';

function buildHomeJsonLd() {
	const org = {
		'@type': 'Organization',
		'@id': `${siteConfig.siteUrl}#org`,
		name: `Cursor ${siteConfig.communityName}`,
		url: siteConfig.siteUrl,
		email: siteConfig.contactEmail,
		sameAs: [siteConfig.lumaUrl, siteConfig.cursorCommunityUrl, 'https://x.com/cursor_ai'],
		description:
			'A Johannesburg-based community for builders using Cursor — corporate professionals going independent, founders, developers, and first-time coders — meeting in person to build software in real time.',
		location: {
			'@type': 'Place',
			address: {
				'@type': 'PostalAddress',
				addressLocality: siteConfig.city,
				addressCountry: 'ZA',
			},
		},
		knowsAbout: ['Cursor IDE', 'AI-assisted software development', 'Vibe coding'],
	};

	const webPage = {
		'@type': 'WebPage',
		'@id': `${siteConfig.siteUrl}#page`,
		name: 'Cursor South Africa Community Hub',
		about: { '@id': `${siteConfig.siteUrl}#org` },
		audience: {
			'@type': 'Audience',
			audienceType: [
				'Vibe coders',
				'Non-technical founders',
				'Indie hackers and solopreneurs',
				'Corporate professionals going independent',
				'AI-assisted software developers',
			],
		},
		keywords: [
			'vibe coding Johannesburg',
			'learn to build apps with AI South Africa',
			'Cursor IDE community South Africa',
			'ship an MVP without a developer',
			'startup builder events Joburg',
			'AI-assisted coding meetup South Africa',
		],
	};

	const eventItems = upcomingEvents.map((event) => ({
		'@type': 'Event',
		name: event.title,
		startDate: event.date,
		location: {
			'@type': 'Place',
			name: event.location,
		},
		organizer: { '@id': `${siteConfig.siteUrl}#org` },
		...(event.lumaUrl ? { url: event.lumaUrl } : {}),
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		eventStatus: 'https://schema.org/EventScheduled',
	}));

	const eventSeriesItems = [
		{
			'@type': 'EventSeries',
			'@id': `${siteConfig.siteUrl}#meetups`,
			name: 'Cursor South Africa Meetups',
			description:
				'Monthly in-person meetups in Johannesburg featuring demos, deep dives, and live Q&A with the Cursor team.',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			isAccessibleForFree: true,
			organizer: { '@id': `${siteConfig.siteUrl}#org` },
		},
		{
			'@type': 'EventSeries',
			'@id': `${siteConfig.siteUrl}#cafe-cursor`,
			name: 'Café Cursor Johannesburg',
			description:
				'Casual co-working days in Johannesburg where Cursor enthusiasts build together in a café setting — no agenda, no pressure.',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			isAccessibleForFree: true,
			organizer: { '@id': `${siteConfig.siteUrl}#org` },
		},
		{
			'@type': 'EventSeries',
			'@id': `${siteConfig.siteUrl}#hackathons`,
			name: 'Cursor South Africa Hackathons',
			description:
				'Focused sprints in Johannesburg to take an idea from nothing to a working prototype in a single session.',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			isAccessibleForFree: true,
			organizer: { '@id': `${siteConfig.siteUrl}#org` },
		},
		{
			'@type': 'EventSeries',
			'@id': `${siteConfig.siteUrl}#workshops`,
			name: 'Cursor South Africa Workshops',
			description:
				'Hands-on build-along sessions in Johannesburg (and online) where participants learn Cursor by shipping real code.',
			eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
			isAccessibleForFree: true,
			organizer: { '@id': `${siteConfig.siteUrl}#org` },
		},
	];

	return {
		'@context': 'https://schema.org',
		'@graph': [org, webPage, ...eventItems, ...eventSeriesItems],
	};
}

const Home: React.FC = () => {
	return (
		<main className="min-h-screen bg-cursor-bg text-cursor-text scroll-smooth">
			<JsonLd data={buildHomeJsonLd()} />
			<Navbar />
			<IntroSection />
			<HeroHeader>
				<EventCountdown />
			</HeroHeader>

			<div className="max-w-5xl mx-auto px-6 pt-[235px] pb-16 md:pt-[272px] md:pb-24">
				<WhatWeDo />
				<SectionDivider />
				<AudienceHooks />
				<SectionDivider />
				<UpcomingEvents />
				<SectionDivider />
				<PastEvents />
				<StatementBanner />
				<AmbassadorSection />
				<SectionDivider />
				<HostingPartners />
			</div>

			<div className="relative bg-gradient-to-b from-footer-blend-top via-footer-blend-mid to-footer-blend-bottom">
				<JohannesburgSkyline />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
