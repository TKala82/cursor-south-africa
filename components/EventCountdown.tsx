'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { COUNTDOWN_WINDOW_DAYS, DAY_MS, eventStartMs, getEventCity, getEventDisplayTitle, getNextEvent, formatEventDate } from '@/content/events';
import { siteConfig } from '@/content/site.config';
import { useI18n } from '@/lib/i18n';

const HOUR_MS = 3_600_000;
const MINUTE_MS = 60_000;
const SECOND_MS = 1_000;
const COUNTDOWN_WINDOW_MS = COUNTDOWN_WINDOW_DAYS * DAY_MS;

const pad = (value: number) => value.toString().padStart(2, '0');

function getParts(diffMs: number) {
	const clamped = Math.max(diffMs, 0);
	return {
		days: Math.floor(clamped / DAY_MS),
		hours: Math.floor((clamped % DAY_MS) / HOUR_MS),
		minutes: Math.floor((clamped % HOUR_MS) / MINUTE_MS),
		seconds: Math.floor((clamped % MINUTE_MS) / SECOND_MS),
	};
}

const EventCountdown: React.FC = () => {
	const { t, locale } = useI18n();

	// `null` until mounted so the server render and first client render match (no hydration mismatch).
	const [now, setNow] = useState<number | null>(null);

	useEffect(() => {
		setNow(Date.now());
		const id = setInterval(() => setNow(Date.now()), SECOND_MS);
		return () => clearInterval(id);
	}, []);

	if (now === null) {
		return null;
	}

	const next = getNextEvent(now);
	if (!next) {
		return null;
	}

	const diff = eventStartMs(next) - now;
	if (diff > COUNTDOWN_WINDOW_MS) {
		// Soonest event is still further out than the window: stay hidden.
		return null;
	}

	const isToday = diff <= 0;
	const { days, hours, minutes, seconds } = getParts(diff);
	const city = getEventCity(next);
	const registerUrl = next.lumaUrl ?? siteConfig.lumaUrl;

	const segments = [
		{ key: 'days', label: t('countdown.days'), value: pad(days) },
		{ key: 'hours', label: t('countdown.hours'), value: pad(hours) },
		{ key: 'minutes', label: t('countdown.minutes'), value: pad(minutes) },
		{ key: 'seconds', label: t('countdown.seconds'), value: pad(seconds) },
	];

	return (
		<div className="px-6">
			<div className="mx-auto w-full max-w-xl">
				<AnimatePresence mode="wait">
					<motion.div
						key={next.id}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 16 }}
						transition={{ duration: 0.5 }}
						className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-cursor-surface p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:p-8"
					>
						<div className="relative flex flex-col items-center text-center">
							<h2 className="text-2xl font-bold text-white md:text-3xl">{getEventDisplayTitle(next)}</h2>
							<div className="mt-2 flex items-center gap-2 text-sm text-white/55">
								<span aria-hidden className="text-[#f54e00]">
									●
								</span>
								<span>{formatEventDate(next.date, locale, 'long')}</span>
								<span className="text-white/30">&middot;</span>
								<span>{city}</span>
							</div>

							{isToday ? (
								<p className="mt-6 text-xl font-semibold text-white md:text-2xl">
									{t('countdown.today')}
								</p>
							) : (
								<div className="mt-6 grid w-full grid-cols-4 gap-2.5 md:gap-3">
									{segments.map((segment) => (
										<div
											key={segment.key}
											className="flex min-w-0 flex-col items-center rounded-xl border border-white/[0.06] bg-[#0d0d0d] px-2 py-3 md:px-4 md:py-4"
										>
											<span className="font-mono text-3xl font-bold tabular-nums text-white md:text-5xl">
												{segment.value}
											</span>
											<span className="mt-1 text-[10px] uppercase tracking-wider text-white/45 md:text-xs">
												{segment.label}
											</span>
										</div>
									))}
								</div>
							)}

							{registerUrl ? (
								<a
									href={registerUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
								>
									{t('home.register')}
									<ExternalLink className="h-3.5 w-3.5" />
								</a>
							) : null}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default EventCountdown;
