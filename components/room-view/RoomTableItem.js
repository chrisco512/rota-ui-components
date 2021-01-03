import { Flex } from '@chakra-ui/react';

import { RoomTableItemMeta, RoomTableItemActionButtons, RoomTableItemInfo, RoomTableItemMembers } from '.';

function RoomTableItem({ members = [] }) {
	return (
		<Flex borderBottomWidth={1} borderColor="outline.500" p={1} pt={2} pb={2} border>
			<RoomTableItemActionButtons />
			<RoomTableItemInfo />
			<RoomTableItemMembers members={members} />
			<RoomTableItemMeta />
		</Flex>
	);
}

export default RoomTableItem;
