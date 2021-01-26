import { useColorMode, Flex, Text, Box } from '@chakra-ui/react';

export default function CurrentThreadClipItemText({ text }) {
	const { colorMode } = useColorMode();
	const bubbleBgColor = { light: 'neutral.3', dark: 'neutral.3' };
	const bubbleTextColor = { light: 'outline.500', dark: 'outline.500' };

	return (
		<Flex mb={1} flexDirection="column">
			<Flex bg={bubbleBgColor[colorMode]} rounded="md" p={3} w="100%">
				<Text color={bubbleTextColor[colorMode]} fontFamily="book" fontSize={{ base: 1, md: 2 }}>
					{text}
				</Text>
			</Flex>

			<Box h={{ base: 3, md: 4 }} w={{ base: 3, md: 4 }} ml={{ base: '1.5rem', md: '2rem' }}>
				<Box
					h="0px"
					w="0px"
					borderWidth="0.5rem"
					borderTopColor={bubbleBgColor[colorMode]}
					borderLeftColor={bubbleBgColor[colorMode]}
					borderBottomColor="transparent"
					borderRightColor="transparent"
				/>
			</Box>
		</Flex>
	);
}
