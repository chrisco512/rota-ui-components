import { useColorMode, Flex, Text } from '@chakra-ui/react';
import { textColor } from '../../styles/theme';

export default function CurrentThreadClipItemAuthorInfo({
	authorName = 'Christopher Johnson',
	mentionName = 'ChrisJo',
}) {
	const { colorMode } = useColorMode();

	return (
		<Flex alignItems="baseline">
			<Text as="b" fontSize={2} mr="1" color={textColor[colorMode]} fontFamily="slab" isTruncated>
				{authorName}
			</Text>
			<Text fontSize={0} color={textColor[colorMode]} fontFamily="book">
				{`@${mentionName}`}
			</Text>
		</Flex>
	);
}
