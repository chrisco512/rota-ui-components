import Link from 'next/link';
import { useState } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/core';

import { TableView2 } from '../../components/table-view';

export default function Home() {
	return (
		<Stack h="100%" w="100%" p={5} spacing={0} justify="center" align="center">
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={6} pb={6}>
				TableView II
			</Heading>
			<TableView2 />
		</Stack>
	);
}
