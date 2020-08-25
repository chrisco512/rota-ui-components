import { useColorMode, Flex, LightMode, Progress, Text } from '@chakra-ui/core';

import { textColor } from '../../styles/theme';
import { convertLengthInSecondsToText } from '../../lib';

export default function ThreadClipProgress({ percentPlayed = 0, lengthInSeconds = 0, showSeconds = true, w = '80%' }) {
	const { colorMode } = useColorMode();
	const progressBg = { light: 'neutral.2', dark: 'white' };

	return (
		<Flex alignItems="center">
			<LightMode>
				<Progress
					w={w}
					color="primary"
					hasStripe
					rounded="lg"
					borderWidth="2px"
					borderColor={textColor[colorMode]}
					bg={progressBg[colorMode]}
					value={percentPlayed}
					height={3}
				/>
			</LightMode>
			{showSeconds ? (
				<Text fontSize={0} fontFamily="book" color={textColor[colorMode]} ml={1}>
					{convertLengthInSecondsToText({ lengthInSeconds })}
				</Text>
			) : null}
		</Flex>
	);
}
