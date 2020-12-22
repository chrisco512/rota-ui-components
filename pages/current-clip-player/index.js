import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/core';
import dynamic from 'next/dynamic';

import { MediaProvider } from '../../lib';

const CurrentThreadClipPlayer = dynamic(
	() => {
		return import('../../components/current-clip-player');
	},
	{ ssr: false }
);

export default function Container() {
	return (
		<MediaProvider>
			<Box w={{ _: 'full', md: 'containers.md', lg: 'containers.md' }} p={4}>
				<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
					CurrentClipPlayer
				</Heading>
				<CurrentThreadClipPlayer />
			</Box>
		</MediaProvider>
	);
}
