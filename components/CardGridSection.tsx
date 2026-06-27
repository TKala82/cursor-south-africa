'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type CardGridItem = {
	id: string;
	title: string;
	body: string;
	href?: string;
};

type CardGridSectionProps = {
	eyebrow: string;
	heading: string;
	headingId?: string;
	items: CardGridItem[];
};

const cardBase = 'rounded-md border border-cursor-border bg-cursor-bg-dark p-6';

const CardGridSection: React.FC<CardGridSectionProps> = ({ eyebrow, heading, headingId, items }) => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			aria-labelledby={headingId}
			className="mb-16"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">{eyebrow}</p>
			<h2 id={headingId} className="text-2xl md:text-3xl font-bold text-cursor-text mb-6">
				{heading}
			</h2>

			<div className="grid gap-4 sm:grid-cols-2">
				{items.map((item, index) => {
					const cardContent = (
						<>
							<h3 className="text-base font-semibold text-cursor-text">{item.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-cursor-text-secondary">{item.body}</p>
						</>
					);

					if (item.href) {
						return (
							<motion.a
								key={item.id}
								href={item.href}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ duration: 0.3, delay: index * 0.07 }}
								className={`${cardBase} block transition-colors duration-300 hover:border-cursor-accent-green/30`}
							>
								{cardContent}
							</motion.a>
						);
					}

					return (
						<motion.article
							key={item.id}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.3, delay: index * 0.07 }}
							className={cardBase}
						>
							{cardContent}
						</motion.article>
					);
				})}
			</div>
		</motion.section>
	);
};

export default CardGridSection;
