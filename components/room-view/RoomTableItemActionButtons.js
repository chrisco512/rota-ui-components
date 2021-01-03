import { Stack, IconButton } from '@chakra-ui/react';
import { FaPlay, FaPlus } from 'react-icons/fa';

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

export default RoomTableItemActionButtons;
