import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FaSort } from 'react-icons/fa';
import { Fragment } from 'react';
import convertLengthInSecondsToText from '../../lib/convertLengthInSecondsToText';

function DraggableQueueThreadItem({ threadTitle, tableTitle = 'Crypto Chat II', lengthInSeconds = 155 }) {
	return (
		<Fragment>
			<Flex align="center">
				<Box color="primary.500" as={FaSort} h="1.25em" w="1.25em" />
				<Stack overflow="hidden" spacing={0} ml={3} w="100%">
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
			</Flex>
		</Fragment>
	);
}

export default DraggableQueueThreadItem;
