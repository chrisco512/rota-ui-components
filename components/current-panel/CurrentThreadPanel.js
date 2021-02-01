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
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { FrownNatural } from '../avatar/face/eyebrow';
import { CurrentThreadClipItem } from '../current-thread-clip-item';

const osComponentOptions = {
	overflowBehavior: {
		x: 'hidden',
	},
};

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
			<Box w="100%" flex={1}>
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
						<Box p={3} borderTopWidth="1px" borderColor="outline.500">
							<Text fontFamily="slab" color="outline.500" textAlign="center">
								End of Thread
							</Text>
						</Box>
					</Stack>
				</OverlayScrollbarsComponent>
			</Box>
		</Fragment>
	);
}

export default CurrentThreadPanel;
