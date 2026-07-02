import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';
import './globals.css';

// NEXT_PUBLIC_SITE_URL (set in Vercel) wins; otherwise fall back to the
// canonical domain in site.config so canonical/OG URLs are always correct.
const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: siteConfig.siteUrl);

const SITE_NAME = `Cursor ${siteConfig.communityName}`;
const SITE_DESCRIPTION =
	'Cursor South Africa is the local community for builders using Cursor. Join our meetups, workshops, and Cafe Cursor events in Johannesburg, Cape Town, and beyond.';

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: ['Cursor', 'South Africa', 'Cursor South Africa', 'AI coding', 'developer community', 'Johannesburg', 'Cape Town', 'meetup'],
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		siteName: SITE_NAME,
		locale: 'en_ZA',
		type: 'website',
		images: [
			{
				url: '/images/og-banner.png',
				width: 1200,
				height: 630,
				alt: SITE_NAME,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: ['/images/og-banner.png'],
	},
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// Reading headers() opts this layout into dynamic rendering so the per-request
	// CSP nonce set by middleware is applied to Next.js scripts.
	await headers();

	return (
		<html lang="en-ZA">
			<body className="antialiased">
				<I18nProvider>{children}</I18nProvider>
				<Analytics />
			</body>
		</html>
	);
}
