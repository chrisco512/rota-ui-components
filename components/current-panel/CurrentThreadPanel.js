import { Fragment } from 'react';
import {
	Box,
	Flex,
	Stack,
	Text,
	Accordion,
	AccordionItem,
	IconButton,
	Slide,
	SlideFade,
	useDisclosure,
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

import { FrownNatural } from '../avatar/face/eyebrow';
import { CurrentThreadClipItem } from '../current-thread-clip-item';

function CurrentThreadPanel({ closePanel = () => {} }) {
	return (
		<Fragment>
			<Flex
				bg="secondary.500"
				align="center"
				justify="center"
				borderColor="outline.500"
				borderBottomWidth={1}
				borderTopWidth={1}
			>
				<IconButton
					aria-label="Reorder Thread Queue"
					icon={<FaTimes />}
					color="outline.500"
					size="sm"
					variant="ghost"
					mr={1}
					onClick={closePanel}
					visibility="hidden"
				/>
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
					Current Thread
				</Text>
				<IconButton
					aria-label="Reorder Thread Queue"
					icon={<FaTimes />}
					color="outline.500"
					size="sm"
					variant="ghost"
					mr={1}
					onClick={closePanel}
				/>
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
				</Stack>
			</Box>
		</Fragment>
	);
}

export default CurrentThreadPanel;
