import { Box, Flex, Stack, useColorMode, Grid, Text } from '@chakra-ui/core';
import Avatar from '../avatar';
import { bgColor } from '../../styles/theme';
import { ThreadClipSummary } from '../thread-clip-summary';

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
				<Text fontSize={3} isTruncated fontFamily="book" mr={8} ml={8}>
					{title}
				</Text>
			</Flex>
			<Stack w="100%" flexGrow={1} overflowY="auto" className="thread-scroll" spacing={-1}>
				{children}
			</Stack>
		</Stack>
	);
}

export default function TableView(props) {
	const { colorMode } = useColorMode();
	const { text } = props;

	return (
		<Flex w="90%" h="600px" borderColor="outline.500" borderWidth={1} overflow="hidden" flexDirection="column">
			<Stack spacing={0} pl={3} pr={3} pb={3} overflow="hidden" height="100%" width="100%">
				<Text as="h2" fontSize={6} fontFamily="slab" m={3}>
					Crypto Chat II
				</Text>
				<Flex overflowX="auto" flex={1}>
					<ThreadPanel>
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
					</ThreadPanel>
					<ThreadPanel title="Some other really long title that no one will read">
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
					</ThreadPanel>
					<ThreadPanel title="Best Collectibles">
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
					</ThreadPanel>
					<ThreadPanel title="Help me understand...">
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
						<ThreadClipSummary />
					</ThreadPanel>
				</Flex>
			</Stack>
		</Flex>
	);
}
