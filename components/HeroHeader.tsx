'use client';

import React from 'react';
import SouthAfricaScrollTitle from '@/components/SouthAfricaScrollTitle';

const HeroHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return <SouthAfricaScrollTitle>{children}</SouthAfricaScrollTitle>;
};

export default HeroHeader;
