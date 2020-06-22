import { Box, Flex, Stack, useColorMode } from '@chakra-ui/core';
import Avatar from '../avatar';

import { ThreadClipProgress, ThreadClipAuthorInfo, ThreadClipMeta, ThreadClipMenu, ThreadClipText } from './';
import { bgColor } from '../../styles/theme';

export default function ThreadClipSummary(props) {
	const { colorMode } = useColorMode();
	const { text } = props;

	return (
		<Stack borderWidth="1px" borderColor="outline.500" maxW="420px" minW="360px" width="100%" {...props}>
			<Flex
				flexDirection="column"
				overflow="hidden"
				borderWidth="1px"
				w="100%"
				minW="20em"
				p="2"
				bg={bgColor[colorMode]}
			>
				{text ? <ThreadClipText text={text} /> : null}
				<Flex>
					<Box w="64px" h="64px" bg="blue.500" rounded="lg" mr="2">
						<Avatar
							style={{ width: '100%', height: '100%' }}
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
					<Flex flexDir="column" flexGrow={1} justify="space-between" mr="2">
						<ThreadClipAuthorInfo />
						<ThreadClipProgress percentPlayed={75} lengthInSeconds={45} />
						<ThreadClipMeta />
					</Flex>
					<Flex alignItems="center" justifyContent="center">
						<ThreadClipMenu />
					</Flex>
				</Flex>
			</Flex>
		</Stack>
	);
}
