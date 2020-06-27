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
} from '@chakra-ui/core';
import Avatar from '../avatar';
import { customTheme } from '../../styles/theme';
import { ThreadClipSummary, ThreadClipProgress } from '../thread-clip-summary';

function ThreadPanel({ title = 'Why is Compound so dominant?', children, ...rest }) {
	return (
		<Stack
			w="384px"
			mr={3}
			flexShrink={0}
			overflow="hidden"
			backgroundColor="secondary.500"
			spacing={0}
			borderColor="outline.500"
			borderWidth={2}
			{...rest}
		>
			<Flex
				h={16}
				bg="secondary.500"
				p={2}
				borderWidth={1}
				borderColor="outline.500"
				borderBottomWidth={2}
				justify="center"
				align="center"
				flexGrow={0}
				flexShrink={0}
			>
				<marquee>A title here</marquee>
			</Flex>
			<Stack w="100%" flexGrow={1} overflowY="auto" className="thread-scroll" spacing={-1}>
				{children}
			</Stack>
		</Stack>
	);
}

function ThreadListScrollView({ style, ...props }) {
	return (
		<Stack bg="purple.500" flexGrow={1} overflowY="auto" spacing={-1}>
			<ThreadClipSummary text="Some text to include in the da bubble. If the text must wrap this is what it might look like. See this link for details: https://www.ign.com. I might just keep going and dragging on with what I need to say here." />
			<ThreadClipSummary />
			<ThreadClipSummary />
			<ThreadClipSummary />
			<ThreadClipSummary text="Mmmhmm." />
			<ThreadClipSummary />
			<ThreadClipSummary text=":-D" />
			<ThreadClipSummary />
			<ThreadClipSummary />
		</Stack>
	);
}

function ThreadListThumb() {
	return <div style={{ backgroundColor: '#FF0000', borderLeft: `2px solid ${customTheme.colors.outline['500']}` }} />;
}

function ThreadListTrack({ ...props }) {
	console.log({ props });

	return (
		<div
			style={{
				backgroundColor: customTheme.colors.outline['500'],
				width: 10,
				height: '100%',
				right: 0,
				position: 'absolute',
			}}
		/>
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
			<Stack bg="red.200" w="360px" spacing={0} borderRightWidth={3} borderColor="outline.500">
				<Flex bg="white" height="202px" flexShrink={0} align="center" justify="center" flexDirection="column">
					<Box h="120px" w="120px" bg="white" borderRadius={8}>
						<Avatar />
					</Box>
					<Box mt={3} color="outline.500">
						<Text fontSize={2} fontFamily="slab">
							Christopher Johnson{' '}
							<Text as="span" fontSize={1}>
								@ChrisJo
							</Text>
						</Text>
					</Box>
					<Box w="196px" mt={2}>
						<ThreadClipProgress lengthInSeconds={24} percentPlayed={38} showSeconds={false} w="100%" />
					</Box>
				</Flex>
				<Flex bg="secondary.500" align="center" justify="center">
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
				<Stack w="100%" flexGrow={1} overflowY="auto" className="thread-scroll" spacing={-1}>
					<ThreadClipSummary text="Some text to include in the da bubble. If the text must wrap this is what it might look like. See this link for details: https://www.ign.com. I might just keep going and dragging on with what I need to say here." />
					<ThreadClipSummary />
					<ThreadClipSummary />
					<ThreadClipSummary />
					<ThreadClipSummary />
					<ThreadClipSummary />
					<ThreadClipSummary />
					<ThreadClipSummary />
					<ThreadClipSummary />
				</Stack>
			</Stack>

			<Flex flexGrow={1} height="100%" pl={5} pr={5} pt={6} pb={5} flexDirection="column" overflow="hidden">
				<Text as="h2" fontFamily="slab" fontSize={7} mb={3}>
					Crypto Chat II
				</Text>
				<Flex bg="green.500" h="100%">
					<Flex bg="red.200" flex="1" p={4}>
						<Text>Column A</Text>
					</Flex>
					<Flex bg="red.100" flex="2" p={4}>
						<Text>Column B</Text>
					</Flex>
				</Flex>
			</Flex>
			<Stack bg="red.200" w="360px" overflow="hidden" spacing={0} borderLeftWidth={3} borderColor="outline.500">
				<Flex bg="secondary.500" align="center" justify="center">
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
				<Stack flexGrow={1} overflowY="auto" spacing={-1}>
					<Accordion allowToggle>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 1 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 2 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 3 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 3 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 3 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 3 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 3 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader>
								<Box flex="1" textAlign="left">
									Section 3 title
								</Box>
								<AccordionIcon />
							</AccordionHeader>
							<AccordionPanel pb={4}>
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
								<ThreadClipSummary />
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Stack>
			</Stack>
		</Flex>
	);
}
