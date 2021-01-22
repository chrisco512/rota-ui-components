import Link from 'next/link';
import { useState, useReducer } from 'react';
import { Box, Heading, Stack, Flex, Text, useDisclosure, IconButton, SlideFade, Slide } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { FaRegEye, FaRegClock, FaTable, FaThList, FaListOl, FaStream } from 'react-icons/fa';

import { MediaProvider } from '../../lib';
import { SiteContentLayout } from '../../components/site-content-layout';
import { RoomView } from '../../components/room-view';
import { QueuePanel } from '../../components/queue-panel';
import { CurrentClipBar } from '../../components/current-clip-bar';
import { Breadcrumbs } from '../../components/site-content-layout';
import { CurrentThreadPanel } from '../../components/current-panel';

const CurrentClipPlayer = dynamic(
	() => {
		return import('../../components/current-clip-player');
	},
	{ ssr: false }
);

function MobileQueue() {}

export default function Mobile() {
	const { isOpen: isOpenQueuePanel, onClose: onCloseQueuePanel, onToggle: onToggleQueuePanel } = useDisclosure();
	const { isOpen: isOpenThreadPanel, onClose: onCloseThreadPanel, onToggle: onToggleThreadPanel } = useDisclosure();

	return (
		<MediaProvider>
			<Stack h="100%" w="100%" spacing={0} justify="center" align="center" bg="white" overflow="hidden">
				<Flex
					h={10}
					justify="flex-start"
					align="center"
					w="100%"
					p={2}
					pl={3}
					pr={3}
					overflow="hidden"
					whiteSpace="nowrap"
				>
					<Breadcrumbs />
				</Flex>
				<Box w="100%" overflow="hidden" flex={1}>
					<Box h="100%" w="100%" overflow="hidden">
						<Box
							as={SlideFade}
							in={isOpenQueuePanel}
							direction="bottom"
							overflow="hidden"
							h="100%"
							unmountOnExit={true}
						>
							<QueuePanel closePanel={onCloseQueuePanel} />
						</Box>

						<Box
							as={SlideFade}
							in={isOpenThreadPanel}
							direction="bottom"
							overflow="hidden"
							h="100%"
							unmountOnExit={true}
						>
							<Stack
								w="100%"
								overflow="hidden"
								spacing={0}
								flexShrink={0}
								h="100%"
								display={{ base: 'flex', xl: 'flex' }}
							>
								<CurrentThreadPanel />
							</Stack>
						</Box>
					</Box>
				</Box>
				<CurrentClipBar />
				<Flex bg="outline.500" w="100%" h={12}>
					<Flex
						flex={1}
						align="center"
						justify="center"
						borderColor="outline.900"
						borderTopWidth={1}
						spacing={1}
					>
						<Box
							as="button"
							pt={1}
							pb={1}
							pl={2}
							pr={2}
							mr={2}
							borderRadius={3}
							color="white"
							_hover={{
								textDecoration: 'underline',
								color: 'primary.300',
							}}
						>
							<Flex justify="center" align="center">
								<Box w={4} h={4} mr={2} as={FaTable} />
								<Text fontFamily="slab" fontSize={1} mt={1}>
									Main
								</Text>
							</Flex>
						</Box>
					</Flex>
					<Flex flex={1} align="center" justify="center" borderColor="outline.900" borderTopWidth={1}>
						<Box
							as="button"
							pt={1}
							pb={1}
							pl={2}
							pr={2}
							mr={2}
							borderRadius={3}
							color="white"
							_hover={{
								textDecoration: 'underline',
								color: 'primary.300',
							}}
							onClick={() => {
								onCloseQueuePanel();
								onToggleThreadPanel();
							}}
						>
							<Flex justify="center" align="center">
								<Box w={4} h={4} mr={2} as={FaThList} />
								<Text fontFamily="slab" mt={1} fontSize={1}>
									Thread
								</Text>
							</Flex>
						</Box>
					</Flex>
					<Flex flex={1} align="center" justify="center" borderTopWidth={1} borderColor="outline.900">
						<Box
							pb={1}
							pl={2}
							pr={2}
							mr={2}
							borderRadius={3}
							color={isOpenQueuePanel ? 'primary.300' : 'white'}
							_hover={{
								textDecoration: 'underline',
								color: 'primary.300',
							}}
							onClick={() => {
								onCloseThreadPanel();
								onToggleQueuePanel();
							}}
						>
							<Flex justify="center" align="center">
								<Box w={4} h={4} mr={2} as={FaListOl} />
								<Text fontFamily="slab" mt={1} fontSize={1}>
									Queue
								</Text>
							</Flex>
						</Box>
					</Flex>
				</Flex>
			</Stack>
		</MediaProvider>
	);
}
