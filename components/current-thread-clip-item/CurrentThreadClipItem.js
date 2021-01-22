import { Box, Flex, Stack, useColorMode } from '@chakra-ui/react';
import Avatar from '../avatar';

import {
	CurrentThreadClipItemProgress,
	CurrentThreadClipItemAuthorInfo,
	CurrentThreadClipItemMeta,
	CurrentThreadClipItemMenu,
	CurrentThreadClipItemText,
} from '.';
import { bgColor } from '../../styles/theme';

export default function CurrentThreadClipItem(props) {
	const { colorMode } = useColorMode();
	const { text } = props;

	return (
		<Stack minW={72} width="100%" {...props}>
			<Flex
				flexDirection="column"
				overflow="hidden"
				borderWidth="1px"
				w="100%"
				p="2"
				bg={bgColor[colorMode]}
				overflow="hidden"
			>
				{text ? <CurrentThreadClipItemText text={text} /> : null}
				<Flex w="100%">
					<Box w={16} h={16} bg="blue.500" rounded="lg" mr="2" flexShrink={0}>
						<Avatar
							avatarStyle="Transparent"
							topType="LongHairDreads"
							accessoriesType="Blank"
							hairColor="BrownDark"
							facialHairType="BeardLight"
							facialHairColor="BrownDark"
							clotheType="BlazerShirt"
							eyeType="Squint"
							eyebrowType="RaisedExcitedNatural"
							mouthType="Smile"
							skinColor="DarkBrown"
						/>
					</Box>
					<Flex flexDir="column" justify="space-between" mr="2" flexGrow={1} overflow="hidden">
						<CurrentThreadClipItemAuthorInfo />
						<CurrentThreadClipItemProgress percentPlayed={75} lengthInSeconds={45} />
						<CurrentThreadClipItemMeta />
					</Flex>
					<Flex alignItems="center" justifyContent="center" flexShrink={0} width={10}>
						{/* <CurrentThreadClipItemMenu /> */}
					</Flex>
				</Flex>
			</Flex>
		</Stack>
	);
}
