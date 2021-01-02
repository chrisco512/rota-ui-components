import {
	Box,
	Flex,
	Stack,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	IconButton,
	AccordionPanel,
	useColorMode,
	Icon,
} from '@chakra-ui/react';
import { FaStream, FaSort } from 'react-icons/fa';
import { useState, useCallback, Fragment } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import Avatar from '../avatar';
import { customTheme, textColor } from '../../styles/theme';
import { queue as defaultQueue, members } from '../../lib/dummydata';
import convertLengthInSecondsToText from '../../lib/convertLengthInSecondsToText';

function QueueThreadClipItem({
	authorName = 'Christopher Johnson',
	mentionName = 'chrisjo',
	avatar = {
		topType: 'LongHairDreads',
		accessoriesType: 'Blank',
		hairColor: 'BrownDark',
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
	lengthInSeconds = 30,
}) {
	const { colorMode } = useColorMode();

	return (
		<Flex overflow="hidden" h={12} align="center">
			<Box w={10} h={10} bg="blue.500" rounded="lg" ml="2" mr="2" flexShrink={0}>
				<Avatar avatarStyle="Transparent" {...avatar} />
			</Box>
			<Flex align="baseline" flexGrow={1} overflow="hidden">
				<Text fontSize={1} mr="1" mt="1" color={textColor[colorMode]} fontFamily="slab" isTruncated>
					{authorName}
				</Text>
				<Text fontSize={0} color={textColor[colorMode]} fontFamily="book">
					{`@${mentionName}`}
				</Text>
			</Flex>
			<Box w={16} textAlign="left" ml={1} flexShrink={0}>
				<Text isTruncated fontSize={0} fontFamily="book" textAlign="center" color={textColor[colorMode]}>
					{convertLengthInSecondsToText({ lengthInSeconds: lengthInSeconds })}
				</Text>
			</Box>
		</Flex>
	);
}

function DraggableQueueThreadItem({ threadTitle, tableTitle = 'Crypto Chat II', lengthInSeconds = 155 }) {
	return (
		<Fragment>
			<Flex align="center">
				<Box color="primary.500" as={FaSort} h="1.25em" w="1.25em" />
				<Stack overflow="hidden" spacing={0} ml={3} w="100%">
					<Flex textAlign="left" color="outline.500">
						<Text flexGrow={1} fontSize={0} fontFamily="bold" textTransform="uppercase" lineHeight={2}>
							{tableTitle}
						</Text>
						<Text fontSize={0} fontFamily="bold" lineHeight={2}>
							{convertLengthInSecondsToText({ lengthInSeconds: lengthInSeconds })}
						</Text>
					</Flex>
					<Flex textAlign="left" overflow="hidden">
						<Text flexGrow={1} isTruncated fontFamily="book" fontSize={1} lineHeight={2}>
							{threadTitle}
						</Text>
					</Flex>
				</Stack>
			</Flex>
		</Fragment>
	);
}

function QueueThreadItem({ threadTitle, threadClips, tableTitle = 'Crypto Chat II', lengthInSeconds = 155 }) {
	return (
		<Fragment>
			<AccordionButton
				_expanded={{
					backgroundColor: customTheme.colors.neutral['3'],
				}}
			>
				<AccordionIcon />
				<Stack overflow="hidden" spacing={0} w="100%" ml={3}>
					<Flex textAlign="left" color="outline.500">
						<Text flexGrow={1} fontSize={0} fontFamily="bold" textTransform="uppercase" lineHeight={2}>
							{tableTitle}
						</Text>

						<Text fontSize={0} fontFamily="bold" lineHeight={2}>
							{convertLengthInSecondsToText({ lengthInSeconds: lengthInSeconds })}
						</Text>
					</Flex>
					<Flex textAlign="left" overflow="hidden">
						<Text flexGrow={1} isTruncated fontFamily="book" fontSize={1} lineHeight={2}>
							{threadTitle}
						</Text>
					</Flex>
				</Stack>
			</AccordionButton>
			<AccordionPanel
				padding={0}
				borderTopWidth={1}
				borderColor="outline.500"
				overflowY="auto"
				h={192}
				className="queue-item-scroll"
			>
				<Box w="100%" minH="100%">
					{threadClips.map((clip) => {
						const { author, id, length } = clip;
						const { name, mentionName, avatar } = members[author];

						return (
							<QueueThreadClipItem
								key={id}
								authorName={name}
								mentionName={mentionName}
								avatar={avatar}
								lengthInSeconds={length}
							/>
						);
					})}
				</Box>
			</AccordionPanel>
		</Fragment>
	);
}

function QueuePanel() {
	const [ editingMode, setEditingMode ] = useState(false);
	const [ queue, setQueue ] = useState(defaultQueue);

	const onDragEnd = useCallback((result, provided) => {
		const sourceIndex = result.source.index;
		const destinationIndex = result.destination.index;

		const queueItem = queue[sourceIndex];
		const filteredQueue = queue.filter((item) => item !== queueItem);

		setQueue([ ...filteredQueue.slice(0, destinationIndex), queueItem, ...filteredQueue.slice(destinationIndex) ]);
	});

	return (
		<Stack w="360px" overflow="hidden" spacing={0} borderLeftWidth={3} borderColor="outline.500" flexShrink={0}>
			<Flex
				bg="secondary.500"
				align="center"
				justify="center"
				borderColor="outline.500"
				borderBottomWidth="1px"
				borderTopWidth="1px"
			>
				<IconButton
					aria-label="Reorder Thread Queue"
					icon={<FaStream />}
					color="outline.500"
					size="lg"
					variant="ghost"
					onClick={() => setEditingMode(!editingMode)}
				/>
				<Text
					fontSize={3}
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
					Queue
				</Text>
				<IconButton
					aria-label="Reorder Thread Queue"
					icon={<FaStream />}
					color="outline.500"
					size="lg"
					variant="ghost"
					onClick={() => setEditingMode(!editingMode)}
					visibility="hidden"
				/>
			</Flex>
			<Box overflowY="auto" className="thread-scroll" flex={1}>
				<Box minH="100%" borderRightWidth="1px" borderColor="outline.500">
					<DragDropContext onDragEnd={onDragEnd}>
						<Stack spacing={0}>
							{editingMode && (
								<Droppable droppableId="queue-droppable">
									{(provided, snapshot) => (
										<div {...provided.droppableProps} ref={provided.innerRef}>
											{queue.map((thread, index) => (
												<Draggable key={thread.id} draggableId={thread.id} index={index}>
													{(provided, snapshot) => (
														<Box
															borderTopColor="outline.500"
															borderBottomColor="outline.500"
															borderTopWidth={index === 0 ? 0 : '1px'}
															borderColor="outline.500"
															pl={4}
															pr={4}
															pt={2}
															pb={2}
															bg="white"
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
														>
															<DraggableQueueThreadItem threadTitle={thread.title} />
														</Box>
													)}
												</Draggable>
											))}
										</div>
									)}
								</Droppable>
							)}
							{!editingMode && (
								<Accordion allowToggle>
									{queue.map((thread, index) => (
										<AccordionItem
											borderTopColor="outline.500"
											borderBottomColor="outline.500"
											borderTopWidth={index === 0 ? 0 : '1px'}
											borderColor="outline.500"
											key={thread.id}
										>
											<QueueThreadItem threadTitle={thread.title} threadClips={thread.clips} />
										</AccordionItem>
									))}
								</Accordion>
							)}
							<Box p={3}>
								<Text fontFamily="slab" color="outline.500" textAlign="center">
									End of Queue
								</Text>
							</Box>
						</Stack>
					</DragDropContext>
				</Box>
			</Box>
		</Stack>
	);
}

export default QueuePanel;
