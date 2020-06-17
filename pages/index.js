import Link from 'next/link';
import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/core';

export default function Home() {
	return (
		<Box>
			<Heading as="h1" fontSize={8} fontFamily="slab" pt={12}>
				UI Components
			</Heading>
		</Box>
	);
}
