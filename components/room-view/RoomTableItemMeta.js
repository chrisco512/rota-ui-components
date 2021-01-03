import { Text, Stack, Flex, Box } from '@chakra-ui/react';
import { FaRegEye, FaRegClock } from 'react-icons/fa';

function RoomTableItemMeta({ minutesAgo = 2, watchers = 4 }) {
	return (
		<Stack spacing={1} mr={3}>
			<Flex h={6} align="center">
				<Box mr={2} w={4} h={4} as={FaRegClock} color="outline.500" />
				<Text fontFamily="book" fontSize={1}>
					{`${minutesAgo}m ago`}
				</Text>
			</Flex>
			<Flex h={6} align="center">
				<Box mr={2} w={4} h={4} as={FaRegEye} color="outline.500" />
				<Text fontFamily="book" fontSize={1}>
					{watchers}
				</Text>
			</Flex>
		</Stack>
	);
}

export default RoomTableItemMeta;
