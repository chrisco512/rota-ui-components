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
import { FaStream, FaTimes } from 'react-icons/fa';
import { useState, useCallback } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { DraggableQueueThreadItem, QueueThreadItem } from './';
import { queue as defaultQueue } from '../../lib/dummydata';

const osComponentOptions = {
	overflowBehavior: {
		x: 'hidden',
	},
};

function QueueContent({ editingMode, queue, setQueue }) {
	const onDragEnd = useCallback((result, provided) => {
		const sourceIndex = result.source.index;
		const destinationIndex = result.destination.index;

		const queueItem = queue[sourceIndex];
		const filteredQueue = queue.filter((item) => item !== queueItem);

		setQueue([ ...filteredQueue.slice(0, destinationIndex), queueItem, ...filteredQueue.slice(destinationIndex) ]);
	});

	return (
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
	);
}

function QueuePanel({ closePanel }) {
	const [ editingMode, setEditingMode ] = useState(false);
	const [ queue, setQueue ] = useState(defaultQueue);

	return (
		<Stack w="100%" overflow="hidden" spacing={0} flexShrink={0} h="100%" display={{ base: 'flex', xl: 'flex' }}>
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
					size="sm"
					variant="ghost"
					onClick={() => setEditingMode(!editingMode)}
					ml={1}
				/>
				<Text
					fontSize={1}
					isTruncated
					fontFamily="slab"
					pt={3}
					pb={2}
					whiteSpace="nowrap"
					color="outline.500"
					flex="1"
					textAlign="center"
					textTransform="uppercase"
				>
					Queue
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
			<Box overflowY="auto" flex={1}>
				<OverlayScrollbarsComponent className="thread-scroll" options={osComponentOptions}>
					<QueueContent editingMode={editingMode} queue={queue} setQueue={setQueue} />
				</OverlayScrollbarsComponent>
			</Box>
		</Stack>
	);
}

export default QueuePanel;
