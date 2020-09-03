import React, { useEffect, useState } from 'react';
import {
	Box,
	Flex,
	Stack,
	useColorMode,
	Grid,
	Text,
	Button,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/core';
import videojs from 'video.js';
import WaveSurfer from 'wavesurfer.js';
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';

import styles from './CurrentThreadClipPlayer.module.css';
import { Avatar } from '../avatar';

export default function CurrentThreadClipPlayer() {
	let options = {
		controls: true,
		autoplay: false,
		loop: false,
		fluid: true,
		aspectRatio: '16:9',
		controlBar: {
			fullscreenToggle: false,
		},
		plugins: {
			wavesurfer: {
				backend: 'MediaElement',
				displayMilliseconds: false,
				debug: true,
				waveColor: 'orange',
				progressColor: 'brown',
				cursorColor: 'black',
				hideScrollbar: true,
				barWidth: 2,
			},
		},
	};

	const [ player, setPlayer ] = useState(null);
	const [ timer, setTimer ] = useState(0);

	useEffect(() => {
		if (!player) {
			const audioNode = document.createElement('audio');
			audioNode.classList.add('video-js', 'vjs-default-skin', styles.audioNodeBackground);
			const containerNode = document.getElementsByClassName(styles.audioContainer)[0];
			containerNode.appendChild(audioNode);

			let newPlayer = videojs(audioNode, options, () => {
				newPlayer.src({
					src: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
					type: 'audio/mpeg',
				});
			});

			newPlayer.on('waveReady', (event) => {
				console.log('waveform: ready!');
			});

			newPlayer.on('playbackFinish', (event) => {
				console.log('playback finished');
			});

			newPlayer.on('timeupdate', (event) => {
				setTimer(newPlayer.currentTime());
			});

			setPlayer(newPlayer);
		}

		return () => {
			if (player) {
				player.dispose();
			}

			setPlayer(null);
		};
	}, []);

	return (
		<Box>
			<Text>CurrentThreadClipPlayer</Text>
			<div>{timer}</div>
			<Slider
				color="pink"
				defaultValue={0}
				value={player ? timer / player.duration() * 100 : 0}
				onChange={(val) => player.currentTime(val / 100 * player.duration())}
			>
				<SliderTrack />
				<SliderFilledTrack />
				<SliderThumb />
			</Slider>
			<Box className={styles.audioContainer} bg="green.500" w={420}>
				<Stack className={styles.avatarContainer} h="100%" w="100%" alignItems="center" justifyContent="center">
					<Box h={20} w={20} bg="blue.500" borderRadius={5}>
						<Avatar />
					</Box>
					<Text>Christopher Johnson</Text>
				</Stack>
			</Box>
		</Box>
	);
}
