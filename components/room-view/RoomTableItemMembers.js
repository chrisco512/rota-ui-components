import { Grid, Box } from '@chakra-ui/react';

import { RoomTableItemMemberAvatar, RoomTableItemMemberEmpty } from '.';

const MAX_TABLE_ITEM_MEMBERS = 6;

function RoomTableItemMembers({ members = [] }) {
	const membersToDisplay = members.slice(0, MAX_TABLE_ITEM_MEMBERS);
	const emptySeats = new Array(MAX_TABLE_ITEM_MEMBERS - membersToDisplay.length);

	return (
		<Box mr={4}>
			<Grid templateColumns="repeat(3, 1fr)" gridGap={1}>
				{membersToDisplay.map((member) => <RoomTableItemMemberAvatar avatar={member.avatar} />)}
				{emptySeats.fill(<RoomTableItemMemberEmpty />)}
			</Grid>
		</Box>
	);
}

export default RoomTableItemMembers;
