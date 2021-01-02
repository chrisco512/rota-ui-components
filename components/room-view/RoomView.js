import { Fragment } from 'react';
import { Text, Grid, Tag, TagLabel, Stack, Flex, Box, IconButton, Icon } from '@chakra-ui/react';
import { FaPlay, FaPlus, FaRegEye, FaRegClock } from 'react-icons/fa';

import Avatar from '../avatar';
import { queue as defaultQueue, members } from '../../lib/dummydata';

function RoomTitle() {
	return (
		<Text as="h2" fontFamily="slab" fontSize={7} mb={3} mt={3} color="outline.500">
			Main Room
		</Text>
	);
}

function RoomTableItemActionButtons() {
	return (
		<Stack mr={2} ml={1} spacing={1}>
			<IconButton
				h={6}
				w={6}
				minW={0}
				variant="outline"
				colorScheme="primary"
				borderRadius={3}
				aria-label="Quick Play"
				icon={<FaPlay />}
				color="primary.300"
			/>
			<IconButton
				h={6}
				w={6}
				minW={0}
				variant="outline"
				colorScheme="primary"
				borderRadius={3}
				aria-label="Quick Add"
				icon={<FaPlus />}
				color="primary.300"
			/>
		</Stack>
	);
}

function RoomTableItemInfo() {
	return (
		<Stack spacing={1} flex={1}>
			<Flex h={6} align="center">
				<Text fontFamily="bold" mr={1} fontSize={2} color="outline.500">
					{`Crypto Chat - `}
				</Text>
				<Text fontFamily="book" fontSize={1}>
					<Tag size="sm" rounded="full" variant="solid" colorScheme="primary">
						<TagLabel>№ 234</TagLabel>
					</Tag>
				</Text>
			</Flex>
			<Flex h={6} align="center">
				<Text fontFamily="book" fontSize={1}>
					Why is compound so dominant right now?
				</Text>
			</Flex>
		</Stack>
	);
}

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

function RoomTableItemMemberEmpty() {
	return <Box h={6} w={6} rounded="md" borderColor="outline.500" borderWidth={1} borderStyle="dotted" />;
}

function RoomTableItemMembers() {
	return (
		<Box mr={4}>
			<Grid templateColumns="repeat(3, 1fr)" gridGap={1}>
				<RoomTableItemMemberAvatar avatar={members.chrisjo.avatar} />
				<RoomTableItemMemberAvatar avatar={members.haleyto.avatar} bg="blue.500" />
				<RoomTableItemMemberEmpty />
				<RoomTableItemMemberEmpty />
				<RoomTableItemMemberEmpty />
				<RoomTableItemMemberEmpty />
			</Grid>
		</Box>
	);
}

function RoomTableItemMeta() {
	return (
		<Stack spacing={1} mr={3}>
			<Flex h={6} align="center">
				<Box mr={2} w={4} h={4} as={FaRegClock} color="outline.500" />
				<Text fontFamily="book" fontSize={1}>
					2m ago
				</Text>
			</Flex>
			<Flex h={6} align="center">
				<Box mr={2} w={4} h={4} as={FaRegEye} color="outline.500" />
				<Text fontFamily="book" fontSize={1}>
					3
				</Text>
			</Flex>
		</Stack>
	);
}

function RoomTableItem() {
	return (
		<Flex borderBottomWidth={1} borderColor="outline.500" p={1} pt={2} pb={2} border>
			<RoomTableItemActionButtons />
			<RoomTableItemInfo />
			<RoomTableItemMembers />
			<RoomTableItemMeta />
		</Flex>
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
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
				<RoomTableItem />
			</Stack>
		</Fragment>
	);
}
