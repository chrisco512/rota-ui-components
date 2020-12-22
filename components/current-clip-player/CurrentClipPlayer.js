import React, { useEffect } from 'react';
import { Box, Stack, Text } from '@chakra-ui/core';
import videojs from 'video.js';
import 'wavesurfer.js';
import 'videojs-wavesurfer/dist/videojs.wavesurfer.js';

import styles from './CurrentClipPlayer.module.css';
import { Avatar } from '../avatar';
import { useMedia } from '../../lib';

let options = {
	controls: true,
	autoplay: false,
	loop: false,
	fluid: true,
	aspectRatio: '16:11',
	controlBar: {
		fullscreenToggle: false,
	},
	plugins: {
		wavesurfer: {
			backend: 'MediaElement',
			displayMilliseconds: false,
			debug: true,
			progressColor: '#ed640b',
			waveColor: '#5b3214',
			cursorColor: '#333',
			hideScrollbar: true,
			barWidth: 2,
		},
	},
};

// Note: Will need to set up useMedia hook to allow clips to be changed out
// May need to wait for application development phase to set that up.
export default function CurrentClipPlayer({
	authorName = 'Christopher Johnson',
	mentionName = 'chrisjo',
	avatar = {
		topType: 'LongHairDreads',
		accessoriesType: 'Blank',
		hairColor: 'Red',
		hatColor: 'Red',
		facialHairType: 'BeardLight',
		facialHairColor: 'BrownDark',
		clotheType: 'BlazerShirt',
		clotheColor: 'PastelRed',
		graphicType: 'Deer',
		eyeType: 'Squint',
		eyebrowType: 'RaisedExcitedNatural',
		mouthType: 'Smile',
		skinColor: 'DarkBrown',
	},
}) {
	const { player, dispatch } = useMedia();

	useEffect(() => {
		if (!player) {
			const audioNode = document.createElement('audio');
			audioNode.classList.add('video-js', 'vjs-theme-rota', styles.audioNode);
			const containerNode = document.getElementsByClassName(styles.audioContainer)[0];
			containerNode.appendChild(audioNode);

			let newPlayer = videojs(audioNode, options, () => {
				newPlayer.src({
					src: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
					type: 'audio/mpeg',
				});
			});

			// newPlayer.on('waveReady', (event) => {
			// 	console.log('waveform: ready!');
			// });

			// newPlayer.on('playbackFinish', (event) => {
			// 	console.log('playback finished');
			// });

			newPlayer.on('timeupdate', (event) => {
				dispatch({
					type: 'SET_TIMER',
					payload: {
						timer: newPlayer.currentTime(),
					},
				});
			});

			dispatch({
				type: 'SET_PLAYER',
				payload: {
					player: newPlayer,
				},
			});
		}

		// return () => {
		// 	if (player) {
		// 		player.dispose();
		// 	}

		// 	setPlayer(null);
		// };
	}, []);

	return (
		<Box>
			<Box className={styles.audioContainer} bg="green.500" w="100%">
				<Stack className={styles.avatarContainer} h="100%" w="100%" alignItems="center" justifyContent="center">
					<Box h={20} w={20} bg="blue.500" borderRadius={5}>
						<Avatar {...avatar} />
					</Box>
					<Text fontFamily="slab" color="outline.500">
						{authorName}
					</Text>
				</Stack>
			</Box>
		</Box>
	);
}
