import { Button, Box, Flex, useColorMode } from '@chakra-ui/core';
import { useState } from 'react';

import { ThreadClipSummary } from '../../components/thread-clip-summary';

export default function ThreadClipSummaryPage() {
	const { colorMode, toggleColorMode } = useColorMode();
	const [ text, setText ] = useState('');

	return (
		<Box>
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
