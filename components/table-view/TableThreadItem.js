import { Box, Flex, Text, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { Fragment } from 'react';

import { customTheme } from '../../styles/theme';
import { members } from '../../lib/dummydata';
import { TableThreadClipItem, TableThreadClipListHeader, TableThreadItemHeader } from './';

function TableThreadItem({ thread = { title: 'Generic Table Thread Item', dateCreated: new Date(), clips: [] } }) {
	const { title, clips } = thread;
	const threadLengthInSeconds = clips.reduce((accumulator, currentClip) => {
		return accumulator + (currentClip.length ? currentClip.length : 0);
	}, 0);

	return (
		<Fragment>
			<h3>
				<AccordionButton
					zIndex={9000}
					borderColor="outline.500"
					_expanded={{
						borderLeftWidth: 1,
						borderRightWidth: 1,
						backgroundColor: customTheme.colors.neutral['3'],
					}}
					_focus={{ backgroundColor: customTheme.colors.neutral['3'] }}
					pl={{ base: '0.5rem', md: '1rem' }}
					pr={{ base: '0.5rem', md: '1rem' }}
				>
					<TableThreadItemHeader
						title={title}
						lastPosted={clips.length > 0 ? clips[0].datePosted : new Date()}
						threadLengthInSeconds={threadLengthInSeconds}
					/>
				</AccordionButton>
			</h3>
			<AccordionPanel
				p={0}
				overflowY="auto"
				h={300}
				borderTopWidth={1}
				borderTopColor="outline.500"
				className="grid-scroll"
				borderRightWidth={1}
				borderLeftWidth={1}
				borderColor="outline.500"
			>
				<Flex
					bg="gray.100"
					h={10}
					w="100%"
					position="sticky"
					top={0}
					zIndex={100}
					align="center"
					pt={1}
					pb={1}
					pl={2}
					pr={2}
					borderBottomWidth={1}
					borderColor="gray.300"
				>
					<Box
						as="button"
						pt={1}
						pb={1}
						pl={2}
						pr={2}
						mr={2}
						borderRadius={3}
						_hover={{
							textDecoration: 'underline',
							bg: 'primary.300',
						}}
					>
						<Flex justify="center" align="center">
							<Box as={FaPlay} h={3} w={3} color="outline.500" mr={2} />
							<Text fontSize={1} fontFamily="book" color="outline.500">
								Play Now
							</Text>
						</Flex>
					</Box>
					<Box
						as="button"
						pt={1}
						pb={1}
						pl={2}
						pr={2}
						borderRadius={3}
						_hover={{
							textDecoration: 'underline',
							bg: 'primary.300',
						}}
					>
						<Flex justify="center" align="center">
							<Box as={FaPlus} h={3} w={3} color="outline.500" mr={2} />
							<Text fontSize={1} fontFamily="book" color="outline.500">
								Play Last
							</Text>
						</Flex>
					</Box>
				</Flex>
				<TableThreadClipListHeader />
				{clips.map((clip) => {
					const { author, datePosted, length, id } = clip;
					const { name, mentionName, avatar } = members[author];
					return (
						<TableThreadClipItem
							key={id}
							authorName={name}
							mentionName={mentionName}
							avatar={avatar}
							datePosted={datePosted}
							lengthInSeconds={length}
						/>
					);
				})}
			</AccordionPanel>
		</Fragment>
	);
}

export default TableThreadItem;
