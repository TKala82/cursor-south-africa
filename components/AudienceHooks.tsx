'use client';

import React from 'react';
import CardGridSection from '@/components/CardGridSection';
import { audiencesSection, audiences } from '@/content/audiences';

const AudienceHooks: React.FC = () => {
	return (
		<CardGridSection
			eyebrow={audiencesSection.eyebrow}
			heading={audiencesSection.heading}
			headingId="audiences-heading"
			items={audiences}
		/>
	);
};

export default AudienceHooks;
