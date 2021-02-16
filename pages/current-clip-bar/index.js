import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// import { CurrentClipBar } from '../../components/current-clip-bar';
import { MediaProvider } from '../../lib';

const CurrentClipBar = dynamic(
	() => {
		return import('../../components/current-clip-bar');
	},
	{ ssr: false }
);

export default function Container() {
	return (
		<MediaProvider>
			<Box w={{ base: 'full', md: 'full', lg: 'full' }} p={4}>
				<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
					CurrentClipBar
				</Heading>
				<CurrentClipBar />
			</Box>
		</MediaProvider>
	);
}
