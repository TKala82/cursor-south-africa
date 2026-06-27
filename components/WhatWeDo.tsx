'use client';

import React from 'react';
import CardGridSection from '@/components/CardGridSection';
import { formatsSection, formats } from '@/content/formats';

const WhatWeDo: React.FC = () => {
	return (
		<CardGridSection
			eyebrow={formatsSection.eyebrow}
			heading={formatsSection.heading}
			headingId="formats-heading"
			items={formats}
		/>
	);
};

export default WhatWeDo;
