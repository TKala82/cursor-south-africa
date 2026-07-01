'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { hostingTags, hostingSection } from '@/content/hosting';
import HostVenueModal from '@/components/HostVenueModal';

const HostingPartners: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<motion.section
			aria-labelledby="hosting-heading"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{hostingSection.eyebrow}
			</p>
			<h2 id="hosting-heading" className="text-2xl md:text-3xl font-bold text-cursor-text mb-4">
				{hostingSection.heading}
			</h2>
			<p className="max-w-3xl text-sm leading-relaxed text-cursor-text-secondary mb-6">{hostingSection.intro}</p>

			<div className="grid gap-4 md:grid-cols-3">
				{hostingTags.map((tag, index) => (
					<motion.div
						key={tag.id}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.3, delay: index * 0.07 }}
						className="flex items-center justify-center rounded-lg border border-cursor-border px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-cursor-text transition-colors hover:border-cursor-border-emphasis"
					>
						{tag.label}
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-50px' }}
				transition={{ duration: 0.3, delay: 0.2 }}
				className="mt-4 bg-cursor-surface border border-cursor-border rounded-lg p-5 md:p-6"
			>
				<h3 className="text-base font-semibold text-cursor-text">{hostingSection.whatHostingLooksLike.title}</h3>
				<p className="mt-2 text-sm leading-relaxed text-cursor-text-secondary">
					{hostingSection.whatHostingLooksLike.body}
				</p>
			</motion.div>

			<div className="mt-6">
				<button
					type="button"
					onClick={() => setIsModalOpen(true)}
					className="inline-flex items-center rounded-md border border-cursor-border px-4 py-2 text-sm font-medium text-cursor-text-secondary hover:border-[#f54e00]/40 hover:text-cursor-text hover:shadow-[0_0_15px_rgba(245,78,0,0.12)] transition-all duration-300"
				>
					{hostingSection.cta.label}
				</button>
			</div>

			<HostVenueModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</motion.section>
	);
};

export default HostingPartners;
