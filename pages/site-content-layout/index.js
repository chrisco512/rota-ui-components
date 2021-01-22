import Link from 'next/link';
import { useState } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';

import { SiteContentLayout } from '../../components/site-content-layout';
import { TableView } from '../../components/table-view';
import { useMenu } from '../../lib';

export default function SiteContentLayoutPage() {
	const { showMenu } = useMenu();

	if (!showMenu) {
		return (
			<SiteContentLayout>
				<TableView />
			</SiteContentLayout>
		);
	}

	return (
		<Stack h="100%" w="100%" p={5} spacing={0} justify="center" align="center">
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={6} pb={6}>
				Site Content Layout
			</Heading>
			<SiteContentLayout>
				<TableView />
			</SiteContentLayout>
		</Stack>
	);
}
