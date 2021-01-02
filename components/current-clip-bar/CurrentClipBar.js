import React from 'react';
import {
	Box,
	Stack,
	Text,
	Flex,
	useColorMode,
	Slider,
	SliderFilledTrack,
	SliderTrack,
	SliderThumb,
	IconButton,
} from '@chakra-ui/react';
import { FaRegPlayCircle, FaRedo, FaUndo, FaMicrophoneAlt, FaRegPauseCircle } from 'react-icons/fa';

import { Avatar } from '../avatar';
import { textColor } from '../../styles/theme';
import { useMedia } from '../../lib';

export default function CurrentClipBar({ authorName = 'Christopher Johnson', mentionName = 'chrisjo' }) {
	const { colorMode } = useColorMode();
	const { timer, player, dispatch } = useMedia();

	return (
		<Flex h={20} borderTopWidth={1} borderColor="outline.500" bg="neutral.3" alignItems="center">
			<Box bg="green.500" w={16} h={16} borderRadius={5} ml={2} mr={2}>
				<Avatar />
			</Box>
			<Stack justify="space-between" spacing={0} maxW={256} h="100%">
				<Text fontSize={3} color="outline.500" fontFamily="slab" lineHeight="1.2" mt={2} isTruncated>
					{authorName}
				</Text>
				<Text fontSize={2} color="outline.500" fontFamily="book" lineHeight="1.2">
					{`@${mentionName}`}
				</Text>
				<Text fontSize={2} color="outline.500" fontFamily="book" marginTop={1} marginBottom={2} isTruncated>
					{`Crypto Chat II > Why is compound so dominant right now?`}
				</Text>
			</Stack>
			<Flex flexGrow="1" justify="center" align="center" h="100%">
				<Flex mr={5} ml={5} align="center">
					<IconButton
						icon={<FaUndo />}
						onClick={() => {
							const calculatedTime = player.currentTime() - 7;
							if (calculatedTime < 0) {
								dispatch({ type: 'SET_TIMER', payload: { timer: 0 } });
							}
							player.currentTime(calculatedTime);
						}}
						variant="ghost"
						colorScheme="outline"
						fontSize="32px"
						h={12}
						w={12}
					/>
					<IconButton
						icon={
							player ? !player.paused() ? <FaRegPauseCircle /> : <FaRegPlayCircle /> : <FaRegPlayCircle />
						}
						onClick={() => (player.paused() ? player.play() : player.pause())}
						variant="ghost"
						colorScheme="outline"
						fontSize="48px"
						h={16}
						w={16}
					/>
					<IconButton
						icon={<FaRedo />}
						onClick={() => player.currentTime(player.currentTime() + 7)}
						variant="ghost"
						colorScheme="outline"
						fontSize="32px"
						h={12}
						w={12}
					/>
				</Flex>
				<Flex flexGrow="1" maxW={512}>
					<Text color="outline.500" mr={4} w={16} textAlign="right">
						{`${player && timer ? Math.floor(timer) : 0}s`}
					</Text>
					<Slider
						colorScheme="primary"
						defaultValue={30}
						mr={2}
						value={player ? player.currentTime() / player.duration() * 100 : 0}
						onChange={(val) => {
							if (!player) return;
							player.currentTime(val / 100 * playerw.duration());
						}}
						minW={64}
					>
						<SliderTrack h={3} borderRadius={5} bg="outline.500" borderColor="outline.500" borderWidth={2}>
							<SliderFilledTrack />
						</SliderTrack>
						<SliderThumb boxSize={6} bg="white" borderColor="outline.500" borderWidth={2} />
					</Slider>
					<Text color="outline.500" w={16} ml={4}>{`${player ? Math.floor(player.duration()) : 0}s`}</Text>
				</Flex>
			</Flex>
			<Stack align="center" justify="center" spacing={1} mr={2} ml={2} h="100%">
				<IconButton
					icon={<FaMicrophoneAlt />}
					variant="ghost"
					colorScheme="outline"
					w={16}
					h={16}
					fontSize="48px"
				/>
			</Stack>
		</Flex>
	);
}
