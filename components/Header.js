import {
	Text,
	Flex,
	Heading,
	Box,
	Button,
	Stack,
	IconButton,
	useColorMode,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerBody,
	DrawerFooter,
	useDisclosure,
	useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaRegListAlt, FaIndent } from 'react-icons/fa';

import Logo from './Logo';
import RotaLink from './RotaLink';
import { MenuList } from './Menu';
import { useMenu } from '../lib';

const MotionBox = motion.custom(Box);

function MenuDrawer({ isOpen, onOpen, onClose, btnRef }) {
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerBody>
					<MenuList />
				</DrawerBody>
				<DrawerFooter>Footer here</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export default function Header({}) {
	//const [ show, setShow ] = useState(false);
	//const handleToggle = () => setShow(!show);
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const iconSize = useBreakpointValue({ base: 'md', lg: 'lg' });

	const colorModeIcon = { light: <FaMoon />, dark: <FaSun /> };
	const { dispatch } = useMenu();

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="nowrap"
			padding={{ base: 2, sm: 3, lg: 5 }}
			bg="outline.500"
			color="white"
		>
			<MenuDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
			<RotaLink href="/">
				<Flex align="center" mr={5} cursor="pointer" style={{ userSelect: 'none', WebkitTouchCallout: 'none' }}>
					<MotionBox
						animate={{ rotate: 360 }}
						transition={{
							duration: 32,
							loop: Infinity,
						}}
					>
						<Logo h={{ base: 8, sm: 10, lg: 16 }} w={{ base: 8, sm: 10, lg: 16 }} />
					</MotionBox>
					<Heading as="h1" fontSize={{ base: 4, sm: 5, lg: 7 }} fontFamily="rust" ml={{ base: 2, sm: 3 }}>
						R<Text as="span" fontSize={{ base: 3, sm: 4, lg: 6 }} fontFamily="rust">
							ota
						</Text>
						<Text as="span" fontSize={{ base: 3, sm: 4, lg: 6 }} fontFamily="rust">
							cast
						</Text>
					</Heading>
				</Flex>
			</RotaLink>

			<Stack isInline alignItems="center">
				<IconButton
					aria-label="Toggle menu on desktop"
					icon={<FaIndent />}
					size={iconSize}
					variant="ghost"
					onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
					display={{ base: 'none', lg: 'flex' }}
				/>
				<IconButton
					aria-label="Toggle dark mode"
					icon={colorModeIcon[colorMode]}
					variant="ghost"
					size={iconSize}
					onClick={toggleColorMode}
				/>
				<IconButton
					ref={btnRef}
					aria-label="Open navigation menu"
					icon={<FaRegListAlt />}
					variant="ghost"
					onClick={onOpen}
					size={iconSize}
					display={{ base: 'flex', lg: 'none' }}
				/>
			</Stack>
		</Flex>
	);
}
