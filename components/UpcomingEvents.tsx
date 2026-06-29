'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { upcomingEvents, getNextEvent, eventStartMs, getEventCity, getEventDisplayTitle, formatEventDate } from '@/content/events';
import { useI18n } from '@/lib/i18n';

const UpcomingEvents: React.FC = () => {
	const { t, locale } = useI18n();

	// `now` stays null until mount so SSR and the first client render agree (no hydration mismatch).
	const [now, setNow] = useState<number | null>(null);

	useEffect(() => {
		setNow(Date.now());
	}, []);

	// Date-sorted upcoming list, used as the deterministic SSR / first-paint fallback.
	const sorted = [...upcomingEvents].sort((a, b) => eventStartMs(a) - eventStartMs(b));

	// Feature the soonest event still ahead. After mount this is the SAME getNextEvent() the hero
	// countdown uses, so the featured card and the countdown can never point at different events.
	const featured = (now === null ? sorted[0] : getNextEvent(now)) ?? null;

	if (!featured) {
		return null;
	}

	const rest = sorted.filter((event) => event.id !== featured.id);

	return (
		<motion.section
			id="upcoming"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<p className="text-xs uppercase tracking-wider text-cursor-text-muted font-medium mb-2">
				{t('home.upcomingEvents')}
			</p>
			<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-6">
				{t('home.upcomingHeading')}
			</h2>

			{/* Featured first event */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-50px' }}
				transition={{ duration: 0.4 }}
				className="relative overflow-hidden bg-cursor-surface border border-cursor-border rounded-lg p-5 mb-6"
			>
				{/* Glow backdrop */}
				<div className="pointer-events-none absolute -inset-px rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,180,200,0.06),transparent_60%)]" />
				<div className="flex items-center gap-2 text-sm text-[#f54e00] font-medium mb-2">
					<span className="relative flex h-2.5 w-2.5">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f54e00] opacity-75" />
						<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f54e00]" />
					</span>
					<span>{formatEventDate(featured.date, locale, 'long')}</span>
					<span className="text-cursor-text-faint">&middot;</span>
					<span>{getEventCity(featured)}</span>
				</div>
				<h3 className="text-2xl font-bold text-cursor-text mb-3">
					{getEventDisplayTitle(featured)}
				</h3>
				{featured.lumaUrl ? (
					<a
						href={featured.lumaUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-cursor-text text-cursor-bg rounded-md px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
					>
						{t('home.register')}
						<ExternalLink className="w-3.5 h-3.5" />
					</a>
				) : null}
			</motion.div>

			{/* Remaining events */}
			{rest.length > 0 && (
				<div className="divide-y divide-cursor-border">
					{rest.map((event, index) => {
						const shortDate = formatEventDate(event.date, locale);
						const eventCity = getEventCity(event);

						return (
							<motion.div
								key={event.id}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ duration: 0.4, delay: index * 0.08 }}
								className="py-3 first:pt-0 last:pb-0"
							>
								<div className="flex items-start gap-4">
									<span className="text-sm font-medium text-[#f54e00] w-28 flex-shrink-0 pt-0.5">
										{shortDate}
									</span>
									<div className="flex-1 min-w-0">
										<h3 className="text-cursor-text font-medium text-sm">
											{getEventDisplayTitle(event)}
										</h3>
										<div className="flex items-center gap-2 mt-1">
											<span className="text-xs text-cursor-text-muted">{eventCity}</span>
											{event.lumaUrl ? (
												<>
													<span className="text-cursor-text-faint">&middot;</span>
													<a
														href={event.lumaUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="text-xs text-cursor-text hover:text-cursor-text-muted transition-colors inline-flex items-center gap-1"
													>
														{t('home.register')}
														<ExternalLink className="w-3 h-3" />
													</a>
												</>
											) : null}
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			)}
		</motion.section>
	);
};

export default UpcomingEvents;
