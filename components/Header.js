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
} from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaRegListAlt } from 'react-icons/fa';

import Logo from './Logo';
import RotaLink from './RotaLink';
import { MenuList } from './Menu';

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
	const [ show, setShow ] = useState(false);
	const handleToggle = () => setShow(!show);
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	const colorModeIcon = { light: <FaMoon />, dark: <FaSun /> };

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			padding={{ base: 4, md: 5 }}
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
						<Logo h={{ base: 12, md: 16 }} w={{ base: 12, md: 16 }} />
					</MotionBox>
					<Heading as="h1" fontSize={{ base: 6, md: 7 }} fontFamily="rust" ml={4}>
						R<Text as="span" fontSize={{ base: 5, md: 6 }} fontFamily="rust">
							ota
						</Text>
						<Text as="span" fontSize={{ base: 5, md: 6 }} fontFamily="rust">
							cast
						</Text>
					</Heading>
				</Flex>
			</RotaLink>

			<Stack isInline alignItems="center">
				<IconButton
					aria-label="Toggle dark mode"
					icon={colorModeIcon[colorMode]}
					size="lg"
					variant="ghost"
					onClick={toggleColorMode}
				/>
				<IconButton
					ref={btnRef}
					aria-label="Open navigation menu"
					icon={<FaRegListAlt />}
					size="lg"
					variant="ghost"
					onClick={onOpen}
					display={{ base: 'block', lg: 'none' }}
				/>
			</Stack>
		</Flex>
	);
}
