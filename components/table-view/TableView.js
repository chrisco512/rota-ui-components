import { Fragment } from 'react';
import { Text } from '@chakra-ui/core';

import { TableThreads } from '.';

function TableTitle() {
	return (
		<Text as="h2" fontFamily="slab" fontSize={7} mb={3} mt={3} color="outline.500">
			Crypto Chat II
		</Text>
	);
}

export default function TableView() {
	return (
		<Fragment>
			<TableTitle />
			<TableThreads />
		</Fragment>
	);
}
