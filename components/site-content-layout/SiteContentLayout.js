import { Flex, Stack, useColorMode, Box } from '@chakra-ui/core';

import { MediaProvider } from '../../lib';
import { CurrentClipBar } from '../current-clip-bar';
import { QueuePanel } from '../queue-panel';
import { CurrentPanel } from '../current-panel';
import { TableView } from '../table-view';
import { Breadcrumbs } from '.';

function MainPanel({ children }) {
	return (
		<Flex
			flexGrow={1}
			height="100%"
			flexDirection="column"
			overflowY="auto"
			overflowX="hidden"
			className="main-scroll"
		>
			<Flex
				flex={1}
				flexDirection="column"
				borderRightWidth="1px"
				borderColor="outline.500"
				pl={5}
				pr={5}
				pt={6}
				pb={5}
			>
				{children}
			</Flex>
		</Flex>
	);
}

export default function SiteContentLayout(props) {
	const { colorMode } = useColorMode();
	const { text } = props;

	return (
		<MediaProvider>
			<Stack
				mr={8}
				ml={8}
				mb={8}
				w="100%"
				h="100%"
				borderColor="outline.500"
				borderWidth={1}
				overflow="hidden"
				spacing={0}
			>
				<Flex w="100%" flexGrow={1} overflow="hidden">
					<CurrentPanel />
					<MainPanel>
						<Breadcrumbs />
						<TableView />
					</MainPanel>
					<QueuePanel />
				</Flex>
				<CurrentClipBar />
			</Stack>
		</MediaProvider>
	);
}
