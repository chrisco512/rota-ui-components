import { Box, Flex, Stack, useColorMode } from '@chakra-ui/core';
import Avatar from '../avatar';

import { ThreadClipProgress, ThreadClipAuthorInfo, ThreadClipMeta, ThreadClipMenu, ThreadClipText } from './';
import { bgColor } from '../../styles/theme';

export default function ThreadClipSummary(props) {
	const { colorMode } = useColorMode();
	const { text } = props;

	return (
		<Stack
			borderTopWidth="1px"
			borderBottomWidth="1px"
			borderColor="outline.500"
			maxW="512px"
			minW="300px"
			width="100%"
			{...props}
		>
			<Flex
				flexDirection="column"
				overflow="hidden"
				borderWidth="1px"
				w="100%"
				p="2"
				bg={bgColor[colorMode]}
				overflow="hidden"
			>
				{text ? <ThreadClipText text={text} /> : null}
				<Flex w="100%">
					<Box w="64px" h="64px" bg="blue.500" rounded="lg" mr="2" flexShrink={0}>
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
						<ThreadClipAuthorInfo />
						<ThreadClipProgress percentPlayed={75} lengthInSeconds={45} />
						<ThreadClipMeta />
					</Flex>
					<Flex alignItems="center" justifyContent="center" flexShrink={0} width="40px">
						<ThreadClipMenu />
					</Flex>
				</Flex>
			</Flex>
		</Stack>
	);
}
