import { Fragment } from 'react';
import { Text } from '@chakra-ui/react';

import { TableContent } from '.';

function TableTitle() {
	return (
		<Text
			as="h2"
			fontFamily="slab"
			fontSize={{ base: 4, lg: 5, xl: 7 }}
			mb={{ base: 2, md: 3 }}
			mt={{ base: 2, md: 3 }}
			color="outline.500"
		>
			Crypto Chat II
		</Text>
	);
}

export default function TableView() {
	return (
		<Fragment>
			<TableTitle />
			<TableContent />
		</Fragment>
	);
}
