import { Flex, Stack, Text, Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { CurrentThreadClipItem } from '../current-thread-clip-item';

const CurrentClipPlayer = dynamic(
	() => {
		return import('../current-clip-player');
	},
	{ ssr: false }
);

function CurrentPanel() {
	return (
		<Stack bg="red.200" w="360px" spacing={0} borderRightWidth={3} borderColor="outline.500" overflow="hidden">
			<Flex
				bg="secondary.500"
				align="center"
				justify="center"
				borderBottomWidth={1}
				borderTopWidth={1}
				borderColor="outline.500"
			>
				<Text
					fontSize={2}
					isTruncated
					fontFamily="slab"
					pt={3}
					pb={2}
					whiteSpace="nowrap"
					color="outline.500"
					textTransform="uppercase"
				>
					Current Clip
				</Text>
			</Flex>
			<CurrentClipPlayer />
			<Flex
				bg="secondary.500"
				align="center"
				justify="center"
				borderBottomWidth={1}
				borderTopWidth={1}
				borderColor="outline.500"
			>
				<Text
					fontSize={2}
					isTruncated
					fontFamily="slab"
					pt={3}
					pb={2}
					whiteSpace="nowrap"
					color="outline.500"
					textTransform="uppercase"
				>
					Current Thread
				</Text>
			</Flex>
			<Box w="100%" flex={1} overflowY="auto" className="thread-scroll">
				<Stack spacing={0}>
					<CurrentThreadClipItem
						borderRightWidth="1px"
						borderColor="outline.500"
						text="Some text to include in the da bubble. If the text must wrap this is what it might look like. See this link for details: https://www.ign.com. I might just keep going and dragging on with what I need to say here."
					/>
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
				</Stack>
			</Box>
		</Stack>
	);
}

export default CurrentPanel;
