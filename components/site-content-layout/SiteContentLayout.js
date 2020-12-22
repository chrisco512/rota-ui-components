import { Flex, Stack, useColorMode } from '@chakra-ui/core';

import { MediaProvider } from '../../lib';
import { CurrentClipBar } from '../current-clip-bar';
import { QueuePanel } from '../queue-panel';
import { CurrentPanel } from '../current-panel';
import { TableView } from '../table-view';
import { Breadcrumbs } from '.';

function MainPanel({ children }) {
	return (
		<Flex flexGrow={1} height="100%" pl={5} pr={5} pt={6} pb={5} flexDirection="column" overflowY="auto">
			{children}
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
