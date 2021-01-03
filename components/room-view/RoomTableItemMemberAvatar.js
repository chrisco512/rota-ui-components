import { Box } from '@chakra-ui/react';

import Avatar from '../avatar';

function RoomTableItemMemberAvatar({
	bg = 'green.500',
	avatar = {
		topType: 'LongHairDreads',
		accessoriesType: 'Blank',
		hairColor: 'BrownDark',
		hatColor: 'Red',
		facialHairType: 'BeardLight',
		facialHairColor: 'BrownDark',
		clotheType: 'BlazerShirt',
		clotheColor: 'PastelRed',
		graphicType: 'Deer',
		eyeType: 'Squint',
		eyebrowType: 'RaisedExcitedNatural',
		mouthType: 'Smile',
		skinColor: 'DarkBrown',
	},
}) {
	return (
		<Box bg={bg} h={6} w={6} rounded="md">
			<Avatar {...avatar} />
		</Box>
	);
}

export default RoomTableItemMemberAvatar;
