import { Text, Tag, TagLabel, Stack, Flex } from '@chakra-ui/react';

function RoomTableItemInfo({
	tableTitle = 'Crypto Chat',
	tableNumber = 234,
	featuredThreadTitle = 'Why is compound so dominant right now?',
}) {
	return (
		<Stack spacing={1} flex={1}>
			<Flex h={6} align="center">
				<Text fontFamily="bold" mr={1} fontSize={2} color="outline.500">
					{`${tableTitle} - `}
				</Text>
				<Text fontFamily="book" fontSize={1}>
					<Tag size="sm" rounded="full" variant="solid" colorScheme="primary">
						<TagLabel>{`№ ${tableNumber}`}</TagLabel>
					</Tag>
				</Text>
			</Flex>
			<Flex h={6} align="center">
				<Text fontFamily="book" fontSize={1}>
					{featuredThreadTitle}
				</Text>
			</Flex>
		</Stack>
	);
}

export default RoomTableItemInfo;
