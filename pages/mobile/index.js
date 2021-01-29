import Link from 'next/link';
import { useState, useReducer } from 'react';
import { Box, Heading, Stack, Flex, Text, useDisclosure, IconButton, SlideFade, Slide } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { FaRegEye, FaRegClock, FaTable, FaThList, FaListOl, FaStream } from 'react-icons/fa';

import { MediaProvider } from '../../lib';
import { QueuePanel } from '../../components/queue-panel';
import { CurrentClipBar } from '../../components/current-clip-bar';
import { Breadcrumbs } from '../../components/site-content-layout';
import { CurrentThreadPanel } from '../../components/current-panel';
import { TableView } from '../../components/table-view';

const CurrentClipPlayer = dynamic(
	() => {
		return import('../../components/current-clip-player');
	},
	{ ssr: false }
);

function MobileNavButton({ text, icon, onClick, isOpen }) {
	return (
		<Flex flex={1} align="center" justify="center" borderColor="outline.900" borderTopWidth={1}>
			<Box
				as="button"
				pt={1}
				pb={1}
				pl={2}
				pr={2}
				mr={2}
				borderRadius={3}
				color={isOpen ? 'primary.300' : 'white'}
				_hover={{
					textDecoration: 'underline',
				}}
				onClick={onClick}
			>
				<Flex justify="center" align="center">
					<Box w={4} h={4} mr={2} as={icon} />
					<Text fontFamily="slab" fontSize={1} mt={1}>
						{text}
					</Text>
				</Flex>
			</Box>
		</Flex>
	);
}

export default function Mobile() {
	const { isOpen: isOpenQueuePanel, onClose: onCloseQueuePanel, onOpen: onOpenQueuePanel } = useDisclosure();
	const { isOpen: isOpenThreadPanel, onClose: onCloseThreadPanel, onOpen: onOpenThreadPanel } = useDisclosure();
	const { isOpen: isOpenMainPanel, onOpen: onOpenMainPanel, onClose: onCloseMainPanel } = useDisclosure({
		defaultIsOpen: true,
	});

	function openMainPanel() {
		onOpenMainPanel();
		onCloseThreadPanel();
		onCloseQueuePanel();
	}

	function toggleThreadPanel() {
		if (isOpenThreadPanel) {
			openMainPanel();
		} else {
			onCloseMainPanel();
			onCloseQueuePanel();
			onOpenThreadPanel();
		}
	}

	function toggleQueuePanel() {
		if (isOpenQueuePanel) {
			openMainPanel();
		} else {
			onCloseMainPanel();
			onCloseThreadPanel();
			onOpenQueuePanel();
		}
	}

	return (
		<MediaProvider>
			<Stack
				className="mobile-height-fix"
				w="100%"
				spacing={0}
				justify="center"
				align="center"
				bg="white"
				overflow="hidden"
			>
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
					borderBottomWidth="1px"
					borderColor="outline.500"
				>
					<Breadcrumbs />
				</Flex>
				<Box w="100%" overflow="hidden" flex={1}>
					<Box h="100%" w="100%" overflow="hidden">
						<Box
							as={SlideFade}
							in={isOpenMainPanel}
							direction="bottom"
							overflowY="auto"
							h="100%"
							unmountOnExit={true}
							className="main-scroll"
						>
							<Box
								minH="100%"
								borderRightWidth="1px"
								borderColor="outline.500"
								borderTopWidth="1px"
								borderTopColor="transparent"
								pr={2}
								pl={2}
							>
								<TableView />
							</Box>
						</Box>
						<Box
							as={SlideFade}
							in={isOpenQueuePanel}
							direction="bottom"
							overflow="hidden"
							h="100%"
							unmountOnExit={true}
						>
							<QueuePanel closePanel={toggleQueuePanel} />
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
								<CurrentThreadPanel closePanel={toggleThreadPanel} />
							</Stack>
						</Box>
					</Box>
				</Box>
				<CurrentClipBar />
				<Flex bg="outline.500" w="100%" h={12}>
					<MobileNavButton text="Main" icon={FaTable} isOpen={isOpenMainPanel} onClick={openMainPanel} />
					<MobileNavButton
						text="Thread"
						icon={FaThList}
						onClick={toggleThreadPanel}
						isOpen={isOpenThreadPanel}
					/>
					<MobileNavButton
						text="Queue"
						icon={FaListOl}
						onClick={toggleQueuePanel}
						isOpen={isOpenQueuePanel}
					/>
				</Flex>
			</Stack>
		</MediaProvider>
	);
}
