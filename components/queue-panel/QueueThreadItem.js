import { Box, Flex, Stack, Text, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { Fragment } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { QueueThreadClipItem } from './';
import { customTheme } from '../../styles/theme';
import { queue as defaultQueue, members } from '../../lib/dummydata';
import convertLengthInSecondsToText from '../../lib/convertLengthInSecondsToText';

const osComponentOptions = {
	overflowBehavior: {
		x: 'hidden',
	},
};

function QueueThreadItem({ threadTitle, threadClips, tableTitle = 'Crypto Chat II', lengthInSeconds = 155 }) {
	return (
		<Fragment>
			<AccordionButton
				_expanded={{
					backgroundColor: customTheme.colors.neutral['3'],
				}}
			>
				<AccordionIcon />
				<Stack overflow="hidden" spacing={0} w="100%" ml={3}>
					<Flex textAlign="left" color="outline.500">
						<Text flexGrow={1} fontSize={0} fontFamily="bold" textTransform="uppercase" lineHeight={2}>
							{tableTitle}
						</Text>

						<Text fontSize={0} fontFamily="bold" lineHeight={2}>
							{convertLengthInSecondsToText({ lengthInSeconds: lengthInSeconds })}
						</Text>
					</Flex>
					<Flex textAlign="left" overflow="hidden">
						<Text flexGrow={1} isTruncated fontFamily="book" fontSize={1} lineHeight={2}>
							{threadTitle}
						</Text>
					</Flex>
				</Stack>
			</AccordionButton>
			<AccordionPanel
				padding={0}
				borderTopWidth={1}
				borderColor="outline.500"
				overflow="hidden"
				h={{ base: 144, md: 192 }}
			>
				<OverlayScrollbarsComponent className="grid-scroll" options={osComponentOptions}>
					{threadClips.map((clip) => {
						const { author, id, length } = clip;
						const { name, mentionName, avatar } = members[author];

						return (
							<QueueThreadClipItem
								key={id}
								authorName={name}
								mentionName={mentionName}
								avatar={avatar}
								lengthInSeconds={length}
							/>
						);
					})}
				</OverlayScrollbarsComponent>
			</AccordionPanel>
		</Fragment>
	);
}

export default QueueThreadItem;
