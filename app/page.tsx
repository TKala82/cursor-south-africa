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
		name: `Cursor ${siteConfig.communityName}`,
		url: siteConfig.cursorCommunityUrl,
	};

	const eventItems = upcomingEvents.map((event) => ({
		'@type': 'Event',
		name: event.title,
		startDate: event.date,
		location: {
			'@type': 'Place',
			name: event.location,
		},
		organizer: org,
		...(event.lumaUrl ? { url: event.lumaUrl } : {}),
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		eventStatus: 'https://schema.org/EventScheduled',
	}));

	return {
		'@context': 'https://schema.org',
		'@graph': [org, ...eventItems],
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
