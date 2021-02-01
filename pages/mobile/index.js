import Link from 'next/link';
import { useState, useReducer } from 'react';
import { Box, Heading, Stack, Flex, Text, useDisclosure, IconButton, SlideFade, Slide } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { FaRegEye, FaRegClock, FaTable, FaThList, FaListOl, FaStream } from 'react-icons/fa';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

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

const osComponentOptions = {
	paddingAbsolute: false,
	// scrollbars: {
	// 	autoHide: 'never',
	// },
	overflowBehavior: {
		x: 'hidden',
	},
};

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
					flexShrink={0}
				>
					<Breadcrumbs />
				</Flex>
				<Stack w="100%" overflow="hidden" flex={1} spacing={0}>
					<Stack flex={1} w="100%" overflow="hidden" position="relative" spacing={0}>
						<Stack
							w="100%"
							top={0}
							bottom={0}
							as={SlideFade}
							in={isOpenMainPanel}
							direction="bottom"
							overflow="hidden"
							spacing={0}
							position="absolute"
						>
							<OverlayScrollbarsComponent
								style={{ width: '100%' }}
								className="main-scroll"
								options={osComponentOptions}
							>
								<TableView />
							</OverlayScrollbarsComponent>
						</Stack>
						<Stack
							w="100%"
							top={0}
							bottom={0}
							as={SlideFade}
							in={isOpenQueuePanel}
							direction="bottom"
							overflow="hidden"
							// flex={1}
							spacing={0}
							unmountOnExit={true}
							position="absolute"
						>
							<QueuePanel closePanel={toggleQueuePanel} />
						</Stack>
						<Stack
							w="100%"
							top={0}
							bottom={0}
							as={SlideFade}
							in={isOpenThreadPanel}
							direction="bottom"
							overflow="hidden"
							// flex={1}
							spacing={0}
							unmountOnExit={true}
							position="absolute"
						>
							<Stack
								w="100%"
								overflow="hidden"
								spacing={0}
								flexShrink={0}
								flex={1}
								spacing={0}
								display={{ base: 'flex', xl: 'flex' }}
								position="relative"
							>
								<CurrentThreadPanel closePanel={toggleThreadPanel} />
							</Stack>
						</Stack>
					</Stack>
				</Stack>
				<CurrentClipBar />
				<Flex bg="outline.500" w="100%" h={12} flexShrink={0}>
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
