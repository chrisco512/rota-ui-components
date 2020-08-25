import React, { useEffect } from 'react';
import { Box, Flex, Stack, useColorMode, Grid, Text } from '@chakra-ui/core';
import AudioMotionAnalyzer from 'audiomotion-analyzer';

export default function CurrentThreadClipPlayer() {
	useEffect(
		() => {
			console.log('attempting to mount audio player');

			const audioMotion = new AudioMotionAnalyzer(document.getElementById('test-mount'), {
				source: document.getElementById('audio'),
			});

			const audioCtx = audioMotion.audioCtx,
				oscillator = audioCtx.createOscillator(),
				gainNode = audioCtx.createGain();

			oscillator.frequency.setValueAtTime(0, audioCtx.currentTime);
			oscillator.connect(gainNode);
			oscillator.start();
			gainNode.connect(audioMotion.analyzer);

			window.addEventListener('click', () => {
				if (audioMotion.audioCtx.state == 'suspended') audioMotion.audioCtx.resume();
			});
		},
		[ true ]
	);

	return (
		<Box>
			<Text>CurrentThreadClipPlayer</Text>
			<Box id="test-mount" w="640px" h="270px" bg="red.500" />
			<audio id="audio" controls>
				<source
					src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
					type="audio/mpeg"
				/>
			</audio>
		</Box>
	);
}
