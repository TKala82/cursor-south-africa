'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { pastEvents, eventStartMs } from '@/content/events';
import { useI18n } from '@/lib/i18n';

const PastEvents: React.FC = () => {
	const { t, locale } = useI18n();

	const recapEvents = pastEvents
		.filter((event) => event.recapPath)
		.sort((a, b) => eventStartMs(b) - eventStartMs(a));

	if (recapEvents.length === 0) {
		return null;
	}

	const formatDate = (date: string) =>
		new Date(`${date}T00:00:00`).toLocaleDateString(locale === 'en' ? 'en-US' : locale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

	return (
		<motion.section
			id="recaps"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{t('home.pastEvents')}
			</p>
			<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-6">
				{t('home.pastEventsHeading')}
			</h2>

			<div className="space-y-6">
				{recapEvents.map((event) => {
					const displayDate = formatDate(event.date);
					const venueLabel = event.venue ?? event.location;

					return (
						<motion.div
							key={event.id}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.4 }}
							className="bg-cursor-surface border border-cursor-border rounded-lg p-5 md:p-6"
						>
							<h3 className="text-base font-semibold text-cursor-text">
								{event.title} — {displayDate}
							</h3>

							<div className="flex items-center gap-1.5 text-sm text-cursor-text-muted mt-2">
								{event.mapsUrl ? (
									<a
										href={event.mapsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1.5 hover:text-cursor-text transition-colors"
									>
										<MapPin className="w-4 h-4 shrink-0" />
										<span>{venueLabel}</span>
									</a>
								) : (
									<>
										<MapPin className="w-4 h-4 shrink-0" />
										<span>{venueLabel}</span>
									</>
								)}
							</div>

							<div className="flex flex-wrap items-center gap-5 text-sm mt-6">
								<Link
									href={event.recapPath!}
									className="inline-flex items-center gap-1.5 text-[#f54e00] hover:text-[#e04500] transition-colors"
								>
									{t('home.viewRecap')}
									<ArrowRight className="w-4 h-4" />
								</Link>
								{event.lumaUrl ? (
									<a
										href={event.lumaUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1.5 text-cursor-text hover:text-cursor-text-secondary transition-colors"
									>
										{t('home.viewOnLuma')}
										<ExternalLink className="w-3.5 h-3.5" />
									</a>
								) : null}
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.section>
	);
};

export default PastEvents;
