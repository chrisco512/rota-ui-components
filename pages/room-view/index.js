import Link from 'next/link';
import { useState } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/core';

import { SiteContentLayout } from '../../components/site-content-layout';
import { RoomView } from '../../components/room-view';

export default function Home() {
	return (
		<Stack h="100%" w="100%" p={5} spacing={0} justify="center" align="center">
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={6} pb={6}>
				Room View
			</Heading>
			<SiteContentLayout>
				<RoomView />
			</SiteContentLayout>
		</Stack>
	);
}
