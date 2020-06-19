import { Button, Box, Flex, useColorMode, Heading } from '@chakra-ui/core';
import { useState } from 'react';

import { Avatar } from '../../components/avatar';

export default function ThreadClipSummaryPage() {
	return (
		<Box>
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
				Avatar
			</Heading>
			<Avatar clotheType="GraphicShirt" clotheColor="Red" graphicType="Bear" />
		</Box>
	);
}
