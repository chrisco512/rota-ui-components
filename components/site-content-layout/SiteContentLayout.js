import { Flex, Stack, useColorMode, Box, useBreakpointValue } from '@chakra-ui/react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { MediaProvider } from '../../lib';
import { CurrentClipBar } from '../current-clip-bar';
import { QueuePanel } from '../queue-panel';
import { CurrentPanel } from '../current-panel';
import { Breadcrumbs } from '.';

const osComponentOptions = {
	paddingAbsolute: false,
	overflowBehavior: {
		x: 'hidden',
	},
};

function MainPanel({ children }) {
	return (
		<Stack
			className="mobile-height-fix"
			flex={1}
			overflow="hidden"
			spacing={0}
			borderRightWidth={1}
			borderColor="outline.500"
			justify="center"
		>
			<OverlayScrollbarsComponent
				style={{ width: '100%' }}
				className="main-scroll os-host-flexbox"
				options={osComponentOptions}
			>
				<Flex
					position="sticky"
					top={0}
					mr="-0.5em"
					ml="-0.5em"
					bg="white"
					borderBottomWidth={1}
					p={4}
					h={12}
					align="center"
				>
					<Breadcrumbs />
				</Flex>
				<Stack spacing={0} align="center">
					<Box w="100%" maxW={{ xl: '3xl', '2xl': '4xl' }}>
						{children}
					</Box>
				</Stack>
			</OverlayScrollbarsComponent>
		</Stack>
	);
}

export default function SiteContentLayout({ children }) {
	const { colorMode } = useColorMode();
	const bpValue = useBreakpointValue({ base: 'be', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl' });

	return (
		<MediaProvider>
			<Stack
				className="mobile-height-fix"
				w="100%"
				spacing={0}
				borderColor="outline.500"
				borderWidth={1}
				overflow="hidden"
			>
				<Flex w="100%" flexGrow={1} overflow="hidden">
					<Stack w={{ lg: 72, xl: 80, '2xl': 96 }} overflow="hidden" spacing={0} flexShrink={0}>
						<CurrentPanel />
					</Stack>
					<MainPanel>{children}</MainPanel>
					<Stack w={{ lg: 72, xl: 80, '2xl': 96 }} overflow="hidden" spacing={0} flexShrink={0}>
						<QueuePanel />
					</Stack>
				</Flex>
				<CurrentClipBar />
				<div style={{ position: 'fixed', bottom: 8, right: 8 }}>{bpValue}</div>
			</Stack>
		</MediaProvider>
	);
}
