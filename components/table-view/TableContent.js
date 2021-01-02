import { Box, Flex, Text, Accordion, AccordionItem } from '@chakra-ui/core';
import { threads } from '../../lib/dummydata';
import { TableThreadItem, TableInfo } from '.';

function TableThreads() {
	return (
		<Box flex={2}>
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