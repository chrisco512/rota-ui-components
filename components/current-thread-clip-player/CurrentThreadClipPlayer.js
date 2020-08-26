import React, { useEffect, useState } from 'react';
import { Box, Flex, Stack, useColorMode, Grid, Text } from '@chakra-ui/core';
import AudioMotionAnalyzer from 'audiomotion-analyzer';
import videojs from 'video.js';
import WaveSurfer from 'wavesurfer.js';
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';

// https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3

export default function CurrentThreadClipPlayer() {
	let options = {
		controls: true,
		bigPlayButton: true,
		autoplay: false,
		loop: false,
		fluid: false,
		width: 600,
		height: 300,
		plugins: {
			// enable videojs-wavesurfer plugin
			wavesurfer: {
				// configure videojs-wavesurfer
				backend: 'MediaElement',
				displayMilliseconds: true,
				debug: true,
				waveColor: 'grey',
				progressColor: 'black',
				cursorColor: 'black',
				hideScrollbar: true,
			},
		},
	};

	const [ player, setPlayer ] = useState(null);

	useEffect(
		() => {
			if (!player) {
				const audioNode = document.getElementById('my-audio');
				// const audioNode = new Audio(
				// 	'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'
				// );

				console.log({ audioNode });

				console.log({ Wavesurfer });

				let newPlayer = videojs(audioNode, options, () => {
					// print version information at startup
					// var version_info =
					// 	'Using video.js ' +
					// 	videojs.VERSION +
					// 	' with videojs-wavesurfer ' +
					// 	videojs.getPluginVersion('wavesurfer') +
					// 	' and wavesurfer.js ' +
					// 	WaveSurfer.VERSION;
					// videojs.log(version_info);

					// load file
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

				setPlayer(newPlayer);
			}

			//TODO: Set up will unmount equivalent
		},
		[ WaveSurfer, Wavesurfer ]
	);

	return (
		<Box>
			<Text>CurrentThreadClipPlayer</Text>
			<div data-vjs-player>
				<audio id="my-audio" className="video-js vjs-default-skin" />
			</div>
		</Box>
	);
}
