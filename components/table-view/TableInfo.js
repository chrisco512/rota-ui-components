import { Box, Grid, Text, useBreakpointValue } from '@chakra-ui/react';

import Avatar from '../avatar';

function TableInfo() {
	const templateStyle = useBreakpointValue({ base: 'repeat(auto-fill, 2.5rem)', xl: 'repeat(auto-fill, 3rem)' });

	return (
		<Box w={{ base: '100%', xl: 40 }} mr={{ base: 0, xl: 3 }}>
			<Text as="h4" fontFamily="slab" fontSize={{ base: 2, xl: 4 }} color="outline.500">
				Members
			</Text>
			<Grid templateColumns={templateStyle} gap={1}>
				<Box bg="blue.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
				<Box bg="green.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
				<Box bg="yellow.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={{ base: 10, xl: 12 }} height={{ base: 10, xl: 12 }}>
					<Avatar />
				</Box>
			</Grid>
		</Box>
	);
}

export default TableInfo;
