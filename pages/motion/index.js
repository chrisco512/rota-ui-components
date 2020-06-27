import Link from 'next/link';
import { useState } from 'react';
import { Box, Heading, Stack, Text, Flex } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const MotionBox = motion.custom(Box);

import { TableView } from '../../components/table-view';

export default function Motion() {
	return (
		<Stack h="100%" w="100%" p={5} spacing={3} align="center">
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={6} pb={6}>
				Motion
			</Heading>
			<Box>
				<motion.div animate={{ scale: 2 }} transition={{ duration: 1 }}>
					<Text fontFamily="slab">Test an animation here</Text>
				</motion.div>
			</Box>
			<Box>
				<motion.div width="100%" height={32 * 1.2} y={-32 * 1.2} style={{ overflow: 'hidden' }}>
					<motion.div
						animate={{ y: 0 }}
						transition={{ ease: 'easeOut', duration: 0.4 }}
						h={32 * 1.2}
						initial={{ y: 32 * 1.2 }}
					>
						<Text fontFamily="slab" fontSize="32px">
							First Line
						</Text>
					</motion.div>
				</motion.div>

				<motion.div width="100%" height={32 * 1.2} y={0} style={{ overflow: 'hidden' }}>
					<motion.div
						animate={{ y: 0 }}
						transition={{ ease: 'easeOut', duration: 0.4 }}
						h={32 * 1.2}
						initial={{ y: -32 * 1.2 }}
						overflow="hidden"
					>
						<Text fontFamily="slab" fontSize="32px">
							Second Line
						</Text>
					</motion.div>
				</motion.div>
			</Box>
			<Box>
				<motion.div
					style={{ overflow: 'hidden', backgroundColor: '#FF0000', width: '240px', whiteSpace: 'nowrap' }}
				>
					<Flex>
						<MotionBox
							initial={{ x: '240px' }}
							animate={{ x: '-100%' }}
							transition={{ duration: 16, loop: Infinity, ease: 'linear' }}
						>
							<Flex>
								<Text fontFamily="slab" fontSize="24px" mr="64px">
									Attempting a marquee
								</Text>
							</Flex>
						</MotionBox>
					</Flex>
				</motion.div>
			</Box>
		</Stack>
	);
}
