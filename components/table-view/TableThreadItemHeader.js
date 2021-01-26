import { Box, Text, AccordionIcon, useBreakpointValue } from '@chakra-ui/react';
import { Fragment } from 'react';
import { format, differenceInHours, differenceInSeconds } from 'date-fns';
import convertLengthInSecondsToText from '../../lib/convertLengthInSecondsToText';

function TableThreadItemHeader({
	title = 'Generic title',
	lastPosted = new Date(),
	threadLengthInSeconds = 22,
	isExpanded,
}) {
	const showDetails = useBreakpointValue({ base: false, md: true });

	return (
		<Fragment>
			<AccordionIcon flexShrink={0} />
			<Box flex={1} textAlign="left" ml={3} overflow="hidden">
				<Text isTruncated fontFamily="book" fontSize={{ base: 0, md: 1 }}>
					{title}
				</Text>
			</Box>
			<Box w={16} textAlign="left" ml={2} flexShrink={0}>
				<Text isTruncated fontSize={{ base: 0, md: 1 }} fontFamily="book" textAlign="center">
					{differenceInHours(new Date(), lastPosted) > 1 ? (
						format(lastPosted, 'MM/dd/yyyy')
					) : (
						`${convertLengthInSecondsToText({
							lengthInSeconds: differenceInSeconds(new Date(), lastPosted),
						})} ago`
					)}
				</Text>
			</Box>
			{showDetails ? (
				<Box w={16} textAlign="left" ml={2} flexShrink={0}>
					<Text isTruncated fontSize={{ base: 0, md: 1 }} fontFamily="book" textAlign="center">
						{convertLengthInSecondsToText({ lengthInSeconds: threadLengthInSeconds })}
					</Text>
				</Box>
			) : null}
		</Fragment>
	);
}

export default TableThreadItemHeader;
