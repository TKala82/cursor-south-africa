'use client';

import React from 'react';
import Image from 'next/image';

const BANNER_SRC = '/images/johannesburg-banner.png';

const JohannesburgSkyline: React.FC = () => {
	return (
		<section
			aria-label="Johannesburg skyline"
			className="relative z-10 w-full bg-footer-blend-top pointer-events-none"
		>
			<Image
				src={BANNER_SRC}
				alt="Johannesburg skyline wireframe illustration with an orange dusk glow, a wet street receding to the horizon with car light trails, and white paint drips bleeding downward"
				width={1022}
				height={511}
				sizes="100vw"
				priority
				className="block h-auto w-full select-none"
			/>
		</section>
	);
};

export default JohannesburgSkyline;
