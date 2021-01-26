import { useColorMode, Flex, LightMode, Progress, Text } from '@chakra-ui/react';

import { textColor } from '../../styles/theme';
import { convertLengthInSecondsToText } from '../../lib';

export default function CurrentThreadClipItemProgress({
	percentPlayed = 0,
	lengthInSeconds = 0,
	showSeconds = true,
	w = '100%',
}) {
	const { colorMode } = useColorMode();
	const progressBg = { light: 'neutral.2', dark: 'white' };

	return (
		<Flex alignItems="center">
			<LightMode>
				<Progress
					w={w}
					colorScheme="primary"
					hasStripe
					rounded="lg"
					borderWidth={1}
					borderColor={textColor[colorMode]}
					bg={progressBg[colorMode]}
					value={percentPlayed}
					height={2}
				/>
			</LightMode>
			{showSeconds ? (
				<Text
					fontSize={{ base: 0, md: 1 }}
					lineHeight={1}
					fontFamily="book"
					color={textColor[colorMode]}
					ml={1}
				>
					{convertLengthInSecondsToText({ lengthInSeconds })}
				</Text>
			) : null}
		</Flex>
	);
}
