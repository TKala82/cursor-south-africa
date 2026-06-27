'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { introContent } from '@/content/intro';

const IntroSection: React.FC = () => {
	const { headline, subheadline } = introContent;

	return (
		<section
			id="welcome"
			aria-labelledby="welcome-headline"
			className="relative border-b border-cursor-border bg-cursor-bg px-6 py-20 md:px-12 md:py-28 lg:px-16"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="mx-auto max-w-5xl"
			>
				<h1
					id="welcome-headline"
					className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-cursor-text md:text-6xl"
				>
					{headline}
				</h1>

				<p className="mt-6 max-w-3xl text-lg leading-relaxed text-cursor-text-secondary">
					{subheadline}
				</p>
			</motion.div>
		</section>
	);
};

export default IntroSection;
