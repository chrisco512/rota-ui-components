import { Fragment } from 'react';
import { Text, Stack } from '@chakra-ui/react';

import { members } from '../../lib/dummydata';
import { RoomTableItem } from '.';

function RoomTitle() {
	return (
		<Text as="h2" fontFamily="slab" fontSize={7} mb={3} mt={3} color="outline.500">
			Main Room
		</Text>
	);
}
export default function RoomView() {
	return (
		<Fragment>
			<RoomTitle />
			<Text as="h4" fontFamily="slab" fontSize={4} color="outline.500">
				Tables
			</Text>
			<Stack spacing={0} borderTopWidth={2} borderBottomWidth={1} borderColor="outline.500">
				<RoomTableItem members={[ members.haleyto, members.allensm, members.chrisjo ]} />
			</Stack>
		</Fragment>
	);
}
