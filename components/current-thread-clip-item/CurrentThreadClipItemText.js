import { useColorMode, Flex, Text, Box } from '@chakra-ui/react';

export default function CurrentThreadClipItemText({ text }) {
	const { colorMode } = useColorMode();
	const bubbleBgColor = { light: 'neutral.3', dark: 'neutral.3' };
	const bubbleTextColor = { light: 'outline.500', dark: 'outline.500' };

	return (
		<Flex mb={1} flexDirection="column">
			<Flex bg={bubbleBgColor[colorMode]} rounded="md" p={3} w="100%">
				<Text color={bubbleTextColor[colorMode]} fontFamily="book" fontSize={2}>
					{text}
				</Text>
			</Flex>

			<Box h={4} w={4} ml="32px">
				<Box
					h="0px"
					w="0px"
					borderWidth={8}
					borderTopColor={bubbleBgColor[colorMode]}
					borderLeftColor={bubbleBgColor[colorMode]}
					borderBottomColor="transparent"
					borderRightColor="transparent"
				/>
			</Box>
		</Flex>
	);
}
