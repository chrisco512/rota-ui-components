import { useColorMode, Menu, MenuButton, MenuItem, IconButton, MenuList, MenuDivider } from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';

import { textColor } from '../../styles/theme';

export default function CurrentThreadClipItemMenu() {
	const { colorMode } = useColorMode();

	return (
		<Menu placement="bottom-end">
			<MenuButton as={IconButton} icon={<FaEllipsisV />} bg="none" color={textColor[colorMode]} />
			<MenuList color={textColor[colorMode]} fontFamily="book">
				<MenuItem>New</MenuItem>
				<MenuItem>New Window</MenuItem>
				<MenuDivider />
				<MenuItem>Open...</MenuItem>
				<MenuItem>Save File</MenuItem>
			</MenuList>
		</Menu>
	);
}
