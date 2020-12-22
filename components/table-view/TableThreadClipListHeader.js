import { Box, Flex, useColorMode, Text } from '@chakra-ui/core';
import { textColor } from '../../styles/theme';

function TableThreadClipListHeader() {
	const { colorMode } = useColorMode();

	return (
		<Flex bg="gray.100" h={5} align="center" position="sticky" top={10} zIndex={99}>
			<Box w={10} overflow="hidden" ml="2" mr="2">
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="book"
					textAlign="center"
					fontFamily="slab"
					textTransform="uppercase"
					mt={1}
				>
					Icon
				</Text>
			</Box>
			<Box flexGrow={1} overflow="hidden">
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="book"
					fontFamily="slab"
					textTransform="uppercase"
					mt={1}
				>
					Author
				</Text>
			</Box>
			<Box w={16} overflow="hidden" ml={1}>
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="book"
					textAlign="center"
					fontFamily="slab"
					textTransform="uppercase"
					mt={1}
				>
					Posted
				</Text>
			</Box>
			<Box w={16} overflow="hidden" ml={1}>
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="slab"
					textAlign="center"
					textTransform="uppercase"
					mt={1}
				>
					Time
				</Text>
			</Box>
		</Flex>
	);
}

export default TableThreadClipListHeader;
