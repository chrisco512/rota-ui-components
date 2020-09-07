import {
	Box,
	Flex,
	Stack,
	useColorMode,
	Grid,
	Text,
	Accordion,
	AccordionHeader,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Progress,
	Breadcrumb,
	BreadcrumbLink,
	BreadcrumbItem,
	Icon,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	IconButton,
	PseudoBox,
} from '@chakra-ui/core';
import { FaWaveSquare, FaEllipsisV } from 'react-icons/fa';
import { Fragment } from 'react';
import { formatDistance, differenceInDays, format, differenceInHours, differenceInSeconds } from 'date-fns';
import dynamic from 'next/dynamic';

import Avatar from '../avatar';
import { customTheme } from '../../styles/theme';
import { ThreadClipSummary, ThreadClipProgress } from '../thread-clip-summary';
import { textColor } from '../../styles/theme';
import { members, threads, queue } from './dummydata';
import convertLengthInSecondsToText from '../../lib/convertLengthInSecondsToText';

const CurrentThreadClipPlayer = dynamic(
	() => {
		return import('../current-thread-clip-player');
	},
	{ ssr: false }
);

function ThreadClipGridSummary({
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
	datePosted = new Date(),
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
					{differenceInHours(new Date(), datePosted) > 1 ? (
						format(datePosted, 'MM/dd/yyyy')
					) : (
						`${convertLengthInSecondsToText({
							lengthInSeconds: differenceInSeconds(new Date(), datePosted),
						})} ago`
					)}
				</Text>
			</Box>
			<Box w={16} textAlign="left" ml={1} flexShrink={0}>
				<Text isTruncated fontSize={0} fontFamily="book" textAlign="center" color={textColor[colorMode]}>
					{convertLengthInSecondsToText({ lengthInSeconds: lengthInSeconds })}
				</Text>
			</Box>
		</Flex>
	);
}

function QueueClipGridSummary({
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

function ThreadClipGridColumnHeader() {
	const { colorMode } = useColorMode();

	return (
		<Flex bg="gray.100" h={5} align="center" position="sticky" top={10} zIndex={99}>
			<Box w={10} overflow="hidden" ml="2" mr="2">
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="book"
					textAlign="center"
					fontFamily="slab"
					textTransform="uppercase"
					mt={1}
				>
					Icon
				</Text>
			</Box>
			<Box flexGrow={1} overflow="hidden">
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="book"
					fontFamily="slab"
					textTransform="uppercase"
					mt={1}
				>
					Author
				</Text>
			</Box>
			<Box w={16} overflow="hidden" ml={1}>
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="book"
					textAlign="center"
					fontFamily="slab"
					textTransform="uppercase"
					mt={1}
				>
					Posted
				</Text>
			</Box>
			<Box w={16} overflow="hidden" ml={1}>
				<Text
					fontSize={0}
					color={textColor[colorMode]}
					fontFamily="slab"
					textAlign="center"
					textTransform="uppercase"
					mt={1}
				>
					Time
				</Text>
			</Box>
		</Flex>
	);
}

function TableThreadItemHeader({ title = 'Generic title', lastPosted = new Date(), threadLengthInSeconds = 22 }) {
	return (
		<Fragment>
			<AccordionIcon flexShrink={0} />
			<Box flex={1} textAlign="left" ml={3} overflow="hidden">
				<Text isTruncated fontFamily="book" fontSize={1}>
					{title}
				</Text>
			</Box>
			<Box w={16} textAlign="left" ml={2} flexShrink={0}>
				<Text isTruncated fontSize={1} fontFamily="book" textAlign="center">
					{differenceInHours(new Date(), lastPosted) > 1 ? (
						format(lastPosted, 'MM/dd/yyyy')
					) : (
						`${convertLengthInSecondsToText({
							lengthInSeconds: differenceInSeconds(new Date(), lastPosted),
						})} ago`
					)}
				</Text>
			</Box>
			<Box w={16} textAlign="left" ml={2} flexShrink={0}>
				<Text isTruncated fontSize={1} fontFamily="book" textAlign="center">
					{convertLengthInSecondsToText({ lengthInSeconds: threadLengthInSeconds })}
				</Text>
			</Box>
		</Fragment>
	);
}

function TableThreadItem({ thread = { title: 'Generic Table Thread Item', dateCreated: new Date(), clips: [] } }) {
	const { title, clips } = thread;
	const threadLengthInSeconds = clips.reduce((accumulator, currentClip) => {
		return accumulator + (currentClip.length ? currentClip.length : 0);
	}, 0);

	return (
		<Fragment>
			<AccordionHeader
				zIndex={9000}
				borderColor="outline.500"
				_expanded={{
					borderLeftWidth: 1,
					borderRightWidth: 1,
					backgroundColor: customTheme.colors.neutral['3'],
				}}
				_focus={{ backgroundColor: customTheme.colors.neutral['3'] }}
			>
				<TableThreadItemHeader
					title={title}
					lastPosted={clips.length > 0 ? clips[0].datePosted : new Date()}
					threadLengthInSeconds={threadLengthInSeconds}
				/>
			</AccordionHeader>
			<AccordionPanel
				pb={0}
				pt={0}
				overflowY="auto"
				h={300}
				borderTopWidth={1}
				borderTopColor="outline.500"
				className="grid-scroll"
				borderRightWidth={1}
				borderLeftWidth={1}
				borderColor="outline.500"
			>
				<Box bg="green.500" h={10} w="100%" position="sticky" top={0} zIndex={100} />
				<ThreadClipGridColumnHeader />
				{clips.map((clip) => {
					const { author, datePosted, length, id } = clip;
					const { name, mentionName, avatar } = members[author];
					return (
						<ThreadClipGridSummary
							key={id}
							authorName={name}
							mentionName={mentionName}
							avatar={avatar}
							datePosted={datePosted}
							lengthInSeconds={length}
						/>
					);
				})}
			</AccordionPanel>
		</Fragment>
	);
}

function QueueItem({ threadTitle, threadClips }) {
	return (
		<Fragment>
			<AccordionHeader
				_expanded={{
					backgroundColor: customTheme.colors.neutral['3'],
				}}
			>
				<AccordionIcon />
				<Stack overflow="hidden" spacing={0} w="100%">
					<Flex textAlign="left" ml={3} color="outline.500">
						<Text flexGrow={1} fontSize={0} fontFamily="bold" textTransform="uppercase" lineHeight={2}>
							Crypto Chat II
						</Text>

						<Text fontSize={0} fontFamily="bold" lineHeight={2}>
							2m30s
						</Text>
					</Flex>
					<Flex textAlign="left" ml={3} overflow="hidden">
						<Text flexGrow={1} isTruncated fontFamily="book" fontSize={1} lineHeight={2}>
							{threadTitle}
						</Text>
					</Flex>
				</Stack>
			</AccordionHeader>
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
							<QueueClipGridSummary
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

function Breadcrumbs() {
	return (
		<Breadcrumb spacing="8px" separator={<Icon color="gray.300" name="chevron-right" />}>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">
					<Text fontFamily="book" color="outline.500">
						Home
					</Text>
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/about">
					<Text fontFamily="book" color="outline.500">
						Technology
					</Text>
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href="/contact">
					<Text fontFamily="book" color="outline.500">
						Crypto Chat II
					</Text>
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}

function TableTitle() {
	console.log({ colors: customTheme.colors });
	return (
		<Text as="h2" fontFamily="slab" fontSize={7} mb={3} mt={3} color="outline.500">
			Crypto Chat II
		</Text>
	);
}

function TableLeftColumn() {
	return (
		<Box flexShrink={0} w="33%">
			<Text as="h4" fontFamily="slab" fontSize={4} color="outline.500">
				Members
			</Text>
			<Grid templateColumns="repeat(auto-fill, 48px)" gap={1}>
				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>

				<Box bg="green.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>

				<Box bg="yellow.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>

				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>

				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>

				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>

				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>

				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
			</Grid>
		</Box>
	);
}

function TableContent() {
	return (
		<Flex h="100%">
			<TableLeftColumn />
			<Box flexGrow={1} overflow="hidden">
				<Text as="h4" fontFamily="slab" fontSize={4} color="outline.500">
					Threads
				</Text>
				<Accordion allowToggle w="100%">
					{threads.map((thread, index) => (
						<AccordionItem
							key={index}
							borderTopColor="outline.500"
							borderBottomColor="outline.500"
							key={thread.id}
						>
							<TableThreadItem thread={thread} />
						</AccordionItem>
					))}
				</Accordion>
			</Box>
		</Flex>
	);
}

function CurrentThreadPanel() {
	return (
		<Stack bg="red.200" w="360px" spacing={0} borderRightWidth={3} borderColor="outline.500">
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
			<CurrentThreadClipPlayer />
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
			<Stack w="100%" flexGrow={1} overflowY="auto" className="thread-scroll" spacing={0}>
				<ThreadClipSummary
					borderRightWidth="1px"
					borderColor="outline.500"
					text="Some text to include in the da bubble. If the text must wrap this is what it might look like. See this link for details: https://www.ign.com. I might just keep going and dragging on with what I need to say here."
				/>
				<ThreadClipSummary borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
				<ThreadClipSummary borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
				<ThreadClipSummary borderTopWidth="1px" borderRightWidth="1px" borderColor="outline.500" />
			</Stack>
		</Stack>
	);
}

function MainPanel({ children }) {
	return (
		<Flex flexGrow={1} height="100%" pl={5} pr={5} pt={6} pb={5} flexDirection="column" overflowY="auto">
			{children}
		</Flex>
	);
}

function QueuePanel() {
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
				<Text
					fontSize={3}
					isTruncated
					fontFamily="slab"
					pt={3}
					pb={2}
					whiteSpace="nowrap"
					color="outline.500"
					textTransform="uppercase"
				>
					Queue
				</Text>
			</Flex>
			<Box overflowY="auto" className="thread-scroll" flex={1}>
				<Box minH="100%" borderRightWidth="1px" borderColor="outline.500">
					<Stack spacing={0}>
						<Accordion allowToggle>
							{queue.map((thread, index) => (
								<AccordionItem
									borderTopColor="outline.500"
									borderBottomColor="outline.500"
									borderTopWidth={index === 0 ? 0 : '1px'}
									borderColor="outline.500"
									key={index}
								>
									<QueueItem threadTitle={thread.title} threadClips={thread.clips} />
								</AccordionItem>
							))}
						</Accordion>
						<Box p={3}>
							<Text fontFamily="slab" color="outline.500" textAlign="center">
								End of Queue
							</Text>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Stack>
	);
}

export default function TableView(props) {
	const { colorMode } = useColorMode();
	const { text } = props;

	return (
		<Flex
			mr={8}
			ml={8}
			mb={8}
			w="100%"
			h="100%"
			flexGrow={1}
			borderColor="outline.500"
			borderWidth={1}
			overflow="hidden"
		>
			<CurrentThreadPanel />
			<MainPanel>
				<Breadcrumbs />
				<TableTitle />
				<TableContent />
			</MainPanel>
			<QueuePanel />
		</Flex>
	);
}
