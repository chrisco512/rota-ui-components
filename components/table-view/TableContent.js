import { Box, Flex, Text, Accordion, AccordionItem } from '@chakra-ui/react';
import { threads } from '../../lib/dummydata';
import { TableThreadItem, TableInfo } from '.';

function TableThreads() {
	return (
		<Box flex={1} overflow="hidden">
			<Text as="h4" fontFamily="slab" fontSize={4} color="outline.500">
				Threads
			</Text>
			<Accordion allowToggle>
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
	);
}

function TableContent() {
	return (
		<Flex>
			<TableInfo />
			<TableThreads />
		</Flex>
	);
}

export default TableContent;
