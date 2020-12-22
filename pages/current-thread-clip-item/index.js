import { Button, Box, Flex, useColorMode, Heading } from '@chakra-ui/core';
import { useState } from 'react';

import { CurrentThreadClipItem } from '../../components/current-thread-clip-item';

export default function CurrentThreadClipItemPage() {
	const { colorMode, toggleColorMode } = useColorMode();
	const [ text, setText ] = useState('');

	return (
		<Box w={{ _: 'full', md: 'containers.md', lg: 'containers.md' }} p={4}>
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
				CurrentThreadClipItem
			</Heading>
			<Button
				onClick={() => {
					if (text) {
						setText('');
					} else {
						setText('What are your thoughts on ETH2.0?');
					}
				}}
			>
				Toggle Text
			</Button>
			<CurrentThreadClipItem text={text} />
		</Box>
	);
}
