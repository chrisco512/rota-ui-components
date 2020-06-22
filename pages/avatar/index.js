import { Box, Heading } from '@chakra-ui/core';

import { Avatar } from '../../components/avatar';

export default function ThreadClipSummaryPage() {
	return (
		<Box>
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
				Avatar
			</Heading>
			<Avatar clotheColor="Red" graphicType="Bear" eyeType="Close" />
		</Box>
	);
}
