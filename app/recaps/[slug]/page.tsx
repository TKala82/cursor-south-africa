import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EventRecap from '@/components/EventRecap';
import JsonLd from '@/components/JsonLd';
import { recapsBySlug } from '@/content/recaps';
import { siteConfig } from '@/content/site.config';

interface RecapPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RecapPageProps): Promise<Metadata> {
	const { slug } = await params;
	const recap = recapsBySlug[slug];
	if (!recap) return {};

	const description = recap.summary[0] || `Recap of ${recap.title}`;

	return {
		title: recap.title,
		description,
		alternates: {
			canonical: `/recaps/${slug}`,
		},
		openGraph: {
			title: recap.title,
			description,
			type: 'article',
			...(recap.photos[0]?.src ? { images: [{ url: recap.photos[0].src, alt: recap.photos[0].alt }] } : {}),
		},
	};
}

function buildRecapJsonLd(slug: string) {
	const recap = recapsBySlug[slug];
	if (!recap) return null;

	const toAbsolute = (path: string) =>
		path.startsWith('http') ? path : `${siteConfig.siteUrl}${path}`;
	const images = recap.photos.slice(0, 5).map((photo) => toAbsolute(photo.src));

	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: recap.title,
		description: recap.summary[0] || `Recap of ${recap.title}`,
		...(recap.startDate ? { startDate: recap.startDate, endDate: recap.startDate } : {}),
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		eventStatus: 'https://schema.org/EventScheduled',
		isAccessibleForFree: true,
		location: {
			'@type': 'Place',
			// The only recap so far is Johannesburg; revisit if recaps span other cities.
			name: recap.host?.name ?? siteConfig.city,
			address: {
				'@type': 'PostalAddress',
				addressLocality: siteConfig.city,
				addressCountry: 'ZA',
			},
		},
		...(images.length ? { image: images } : {}),
		organizer: {
			'@type': 'Organization',
			'@id': `${siteConfig.siteUrl}#org`,
			name: `Cursor ${siteConfig.communityName}`,
			url: siteConfig.siteUrl,
		},
		...(recap.attendees ? { maximumAttendeeCapacity: recap.attendees } : {}),
	};
}

export default async function RecapPage({ params }: RecapPageProps) {
	const { slug } = await params;
	const recap = recapsBySlug[slug];
	if (!recap) {
		notFound();
	}

	const jsonLd = buildRecapJsonLd(slug);

	return (
		<main className="min-h-screen bg-cursor-bg text-cursor-text">
			{jsonLd && <JsonLd data={jsonLd} />}
			<div className="max-w-5xl mx-auto px-6 py-12">
				<EventRecap recap={recap} />
			</div>
		</main>
	);
}
