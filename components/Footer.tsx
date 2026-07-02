'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';

const QUICK_LINKS = [
	{ href: siteConfig.lumaUrl, labelKey: 'footer.allEventsOnLuma', external: true },
	{ href: siteConfig.cursorCommunityUrl, labelKey: 'footer.community', external: true },
	{ href: 'https://x.com/cursor_ai', labelKey: 'footer.followUsOnX', external: true },
] as const;

const QUICK_LINK_CLASS =
	'w-fit text-sm leading-relaxed text-cursor-text-secondary transition-colors hover:text-cursor-text';

const Footer: React.FC = () => {
	const { t } = useI18n();

	return (
		<motion.footer
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="relative z-20 -mt-[22vw] w-full bg-gradient-to-b from-transparent from-20% via-footer-blend-mid via-70% to-footer-blend-bottom pt-[22vw] md:-mt-[20vw] md:pt-[14rem]"
		>
			<div className="relative mx-auto max-w-[604px] px-6 pb-10 md:px-0 md:pb-12">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-[20rem_8rem] md:gap-20">
					<div className="flex h-full flex-col">
						<p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white">
							{t('footer.communityLabel')}
						</p>
						<h2 className="mt-auto text-[2.5rem] font-bold lowercase leading-[1.05] text-[#f54e00] md:text-[2.75rem]">
							<span className="block">{t('footer.headingLine1')}</span>
							<span className="block">{t('footer.headingLine2')}</span>
							<span className="block">{t('footer.headingLine3')}</span>
						</h2>
					</div>

					<div className="flex h-full flex-col">
						<p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white">
							{t('footer.quickLinks')}
						</p>
						<nav className="mt-auto flex flex-col gap-4">
							{QUICK_LINKS.map((link) => (
								<a
									key={link.labelKey}
									href={link.href}
									{...(link.external
										? { target: '_blank', rel: 'noopener noreferrer' }
										: {})}
									className={QUICK_LINK_CLASS}
								>
									{t(link.labelKey)}
								</a>
							))}
						</nav>
					</div>
				</div>

				<div className="mt-16 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-20">
					<p className="text-xs normal-case tracking-normal text-white/35">{t('footer.copyright')}</p>
					<a
						href={`mailto:${siteConfig.contactEmail}`}
						className="text-xs normal-case tracking-normal text-white/35 transition-colors hover:text-white/55"
					>
						{siteConfig.contactEmail}
					</a>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
