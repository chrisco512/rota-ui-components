import { Flex, Stack, Text, Box, IconButton } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { FaStream, FaTimes } from 'react-icons/fa';

import { CurrentThreadClipItem } from '../current-thread-clip-item';

const osComponentOptions = {
	overflowBehavior: {
		x: 'hidden',
	},
};

const CurrentClipPlayer = dynamic(
	() => {
		return import('../current-clip-player');
	},
	{ ssr: false }
);

function CurrentPanel() {
	return (
		<Stack
			w="100%"
			overflow="hidden"
			spacing={0}
			flexShrink={0}
			h="100%"
			display={{ base: 'flex', xl: 'flex' }}
			borderColor="outline.500"
			borderRightWidth={1}
		>
			<Flex
				bg="secondary.500"
				align="center"
				justify="center"
				borderBottomWidth="1px"
				borderColor="outline.500"
				h={12}
				flexShrink={0}
			>
				<Text
					fontSize={1}
					isTruncated
					fontFamily="slab"
					pt={3}
					pb={2}
					whiteSpace="nowrap"
					color="outline.500"
					textTransform="uppercase"
					flex="1"
					textAlign="center"
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
				borderColor="outline.500"
				h={12}
				flexShrink={0}
			>
				<Text
					fontSize={1}
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
			<OverlayScrollbarsComponent className="thread-scroll" options={osComponentOptions}>
				<Stack spacing={0}>
					<CurrentThreadClipItem text="Some text to include in the da bubble. If the text must wrap this is what it might look like. See this link for details: https://www.ign.com. I might just keep going and dragging on with what I need to say here." />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<CurrentThreadClipItem borderTopWidth="1px" borderColor="outline.500" />
					<Box p={3} borderTopWidth="1px" borderColor="outline.500">
						<Text fontFamily="slab" color="outline.500" textAlign="center">
							End of Thread
						</Text>
					</Box>
				</Stack>
			</OverlayScrollbarsComponent>
		</Stack>
	);
}

export default CurrentPanel;
