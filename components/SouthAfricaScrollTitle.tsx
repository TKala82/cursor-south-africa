'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { siteConfig } from '@/content/site.config';

const TITLE = siteConfig.communityName.toUpperCase();
const WORDS = TITLE.split(' ');

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.06, delayChildren: 0.08 },
	},
};

const letterVariants: Variants = {
	hidden: { y: '-0.5em', opacity: 0 },
	visible: {
		y: '0em',
		opacity: 1,
		transition: { type: 'spring', stiffness: 220, damping: 18 },
	},
};

const SouthAfricaScrollTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<section
			aria-label={`Cursor ${siteConfig.communityName}`}
			className="relative grid min-h-[calc(50svh+150px)] place-items-center border-t border-cursor-border bg-black px-6 py-16 md:px-12 lg:px-16"
		>
			<p className="sr-only">
				Cursor {siteConfig.communityName} — the Cursor community for South African builders
			</p>

			<motion.p
				aria-hidden
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
				className="flex w-full max-w-[80rem] select-none flex-wrap items-center justify-center gap-x-[0.28em] gap-y-1 text-center font-sans text-[clamp(3rem,14vw,10rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white md:gap-y-2"
			>
				{WORDS.map((word, wordIndex) => (
					<span key={`${word}-${wordIndex}`} className="flex">
						{word.split('').map((char, charIndex) => (
							<motion.span
								key={`${char}-${charIndex}`}
								variants={letterVariants}
								className="inline-block will-change-transform"
							>
								{char}
							</motion.span>
						))}
					</span>
				))}
			</motion.p>

			{children ? (
				<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
					<div className="pointer-events-auto">{children}</div>
				</div>
			) : null}
		</section>
	);
};

export default SouthAfricaScrollTitle;
