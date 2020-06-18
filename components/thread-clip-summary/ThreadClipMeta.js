import { useColorMode, Flex, Text } from '@chakra-ui/core';

import { textColor } from '../../styles/theme';

export default function ThreadClipMeta() {
	const { colorMode } = useColorMode();

	return (
		<Flex alignItems="baseline">
			<Text fontSize={0} fontFamily="book" color={textColor[colorMode]}>
				{`Mar 18 • :-D • lol • rofl`}
			</Text>
		</Flex>
	);
}
