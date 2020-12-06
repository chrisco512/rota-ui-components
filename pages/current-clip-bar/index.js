import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/core';

import { CurrentClipBar } from '../../components/current-clip-bar';
import { MediaProvider } from '../../lib';

export default function Container() {
	return (
		<MediaProvider>
			<Box w={{ _: 'full', md: 'full', lg: 'full' }} p={4}>
				<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
					CurrentClipBar
				</Heading>
				<CurrentClipBar />
			</Box>
		</MediaProvider>
	);
}
