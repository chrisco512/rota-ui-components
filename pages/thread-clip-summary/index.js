import { Button, Box, Flex, useColorMode, Heading } from '@chakra-ui/core';
import { useState } from 'react';

import { ThreadClipSummary } from '../../components/thread-clip-summary';

export default function ThreadClipSummaryPage() {
	const { colorMode, toggleColorMode } = useColorMode();
	const [ text, setText ] = useState('');

	return (
		<Box>
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
				ThreadClipSummary
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
			<ThreadClipSummary text={text} />
		</Box>
	);
}
