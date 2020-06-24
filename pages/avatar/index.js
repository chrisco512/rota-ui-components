import { useState } from 'react';
import { Box, Heading, Text, Flex, IconButton, Stack } from '@chakra-ui/core';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Avatar } from '../../components/avatar';

const topOptions = [
	'NoHair',
	'Eyepatch',
	'Hat',
	'Hijab',
	'Turban',
	'WinterHat1',
	'WinterHat2',
	'WinterHat3',
	'WinterHat4',
	'LongHairBigHair',
	'LongHairBob',
	'LongHairBun',
	'LongHairCurly',
	'LongHairCurvy',
	'LongHairDreads',
	'LongHairFrida',
	'LongHairFro',
	'LongHairFroBand',
	'LongHairMiaWallace',
	'LongHairNotTooLong',
	'LongHairShavedSides',
	'LongHairStraight',
	'LongHairStraight2',
	'LongHairStraightStrand',
	'ShortHairDreads01',
	'ShortHairDreads02',
	'ShortHairFrizzle',
	'ShortHairShaggy',
	'ShortHairShaggyMullet',
	'ShortHairShortCurly',
	'ShortHairShortFlat',
	'ShortHairShortRound',
	'ShortHairShortWaved',
	'ShortHairSides',
	'ShortHairTheCaesar',
	'ShortHairTheCaesarSidePart',
];

const hatColorOptions = [
	'Black',
	'Blue01',
	'Blue02',
	'Blue03',
	'Gray01',
	'Gray02',
	'Heather',
	'PastelBlue',
	'PastelGreen',
	'PastelOrange',
	'PastelRed',
	'PastelYellow',
	'Pink',
	'Red',
	'White',
];

const accessoriesOptions = [ 'Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers' ];
const hairColorOptions = [
	'Auburn',
	'Black',
	'Blonde',
	'BlondeGolden',
	'Brown',
	'BrownDark',
	'PastelPink',
	'Platinum',
	'Red',
	'SilverGray',
];
const facialHairOptions = [
	'Blank',
	'BeardLight',
	'BeardMajestic',
	'BeardMedium',
	'MoustacheFancy',
	'MoustacheMagnum',
];
const facialHairColorOptions = [ 'Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'Platinum', 'Red' ];
const clotheOptions = [
	'BlazerShirt',
	'BlazerSweater',
	'CollarSweater',
	'GraphicShirt',
	'Hoodie',
	'Overall',
	'ShirtCrewNeck',
	'ShirtScoopNeck',
	'ShirtVNeck',
];
const clotheColorOptions = [
	'Black',
	'Blue01',
	'Blue02',
	'Blue03',
	'Gray01',
	'Gray02',
	'Heather',
	'PastelBlue',
	'PastelGreen',
	'PastelOrange',
	'PastelRed',
	'PastelYellow',
	'Pink',
	'Red',
	'White',
];
const clotheGraphicOptions = [
	'Bat',
	'Cumbia',
	'Deer',
	'Diamond',
	'Hola',
	'Pizza',
	'Selena',
	'Bear',
	'SkullOutline',
	'Skull',
];
const eyebrowOptions = [
	'Angry',
	'AngryNatural',
	'DefaultEyebrow',
	'DefaultNatural',
	'FlatNatural',
	'FrownNatural',
	'RaisedExcited',
	'RaisedExcitedNatural',
	'SadConcerned',
	'SadConcernedNatural',
	'UnibrowNatural',
	'UpDown',
	'UpDownNatural',
];
const eyeOptions = [
	'Close',
	'Cry',
	'DefaultEyes',
	'Dizzy',
	'EyeRoll',
	'Happy',
	'Hearts',
	'Side',
	'Squint',
	'Surprised',
	'Wink',
	'WinkWacky',
];
const mouthOptions = [
	'Concerned',
	'DefaultMouth',
	'Disbelief',
	'Eating',
	'Grimace',
	'Sad',
	'ScreamOpen',
	'Serious',
	'Smile',
	'Tongue',
	'Twinkle',
	'Vomit',
];
const skinColorOptions = [ 'Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black' ];

function decrementOption(currentIndex, optionsArray) {
	let nextIndex = currentIndex - 1;

	if (nextIndex < 0) {
		nextIndex = optionsArray.length - 1;
	}

	return nextIndex;
}

function incrementOption(currentIndex, optionsArray) {
	let nextIndex = currentIndex + 1;

	if (nextIndex >= optionsArray.length) {
		nextIndex = 0;
	}

	return nextIndex;
}

function Selector({ optionName, optionIndex, setOption, optionsArray }) {
	return (
		<Flex align="center">
			<Text
				as="h3"
				fontSize={1}
				fontFamily="slab"
				pr={3}
				textTransform="uppercase"
				letterSpacing="wide"
				w={{ _: 'auto', lg: '128px' }}
			>
				{optionName}
			</Text>
			<IconButton
				aria-label="Decrement option"
				icon={FaMinus}
				size="lg"
				variant="outline"
				onClick={() => setOption(decrementOption(optionIndex, optionsArray))}
			/>
			<Flex justify="center" align="center" w={{ _: '128px' }}>
				<Text textAlign="center" fontFamily="mono" isTruncated>
					{optionsArray[optionIndex]}
				</Text>
			</Flex>
			<IconButton
				aria-label="Increment option"
				icon={FaPlus}
				size="lg"
				variant="outline"
				onClick={() => setOption(incrementOption(optionIndex, optionsArray))}
			/>
		</Flex>
	);
}

export default function AvatarPage() {
	const [ topIndex, setTopIndex ] = useState(14);
	const [ hatColorIndex, setHatColorIndex ] = useState(0);
	const [ accessoryIndex, setAccessoryIndex ] = useState(0);
	const [ hairColorIndex, setHairColorIndex ] = useState(5);
	const [ facialHairIndex, setFacialHairIndex ] = useState(1);
	const [ facialHairColorIndex, setFacialHairColorIndex ] = useState(5);
	const [ clotheIndex, setClotheIndex ] = useState(0);
	const [ clotheColorIndex, setClotheColorIndex ] = useState(0);
	const [ clotheGraphicIndex, setClotheGraphicIndex ] = useState(0);
	const [ eyebrowIndex, setEyebrowIndex ] = useState(7);
	const [ eyeIndex, setEyeIndex ] = useState(8);
	const [ mouthIndex, setMouthIndex ] = useState(8);
	const [ skinColorIndex, setSkinColorIndex ] = useState(5);

	return (
		<Box w={{ _: 'full', md: 'containers.md', lg: 'containers.md' }} p={4}>
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
				Avatar
			</Heading>
			<Flex flexDirection={{ _: 'column', lg: 'row' }} align="center">
				<Box mb={{ _: 3, lg: 0 }} pr={{ _: 0, lg: 3 }}>
					<Avatar
						eyeType={eyeOptions[eyeIndex]}
						eyebrowType={eyebrowOptions[eyebrowIndex]}
						mouthType={mouthOptions[mouthIndex]}
						topType={topOptions[topIndex]}
						hatColor={hatColorOptions[hatColorIndex]}
						accessoriesType={accessoriesOptions[accessoryIndex]}
						hairColor={hairColorOptions[hairColorIndex]}
						facialHairType={facialHairOptions[facialHairIndex]}
						facialHairColor={facialHairColorOptions[facialHairColorIndex]}
						clotheType={clotheOptions[clotheIndex]}
						clotheColor={clotheColorOptions[clotheColorIndex]}
						graphicType={clotheGraphicOptions[clotheGraphicIndex]}
						skinColor={skinColorOptions[skinColorIndex]}
					/>
				</Box>
				<Stack align="flex-end">
					<Selector
						optionName="Top"
						optionIndex={topIndex}
						optionsArray={topOptions}
						setOption={setTopIndex}
					/>
					<Selector
						optionName="Hat Color"
						optionIndex={hatColorIndex}
						optionsArray={hatColorOptions}
						setOption={setHatColorIndex}
					/>
					<Selector
						optionName="Accessories"
						optionIndex={accessoryIndex}
						optionsArray={accessoriesOptions}
						setOption={setAccessoryIndex}
					/>
					<Selector
						optionName="Hair Color"
						optionIndex={hairColorIndex}
						optionsArray={hairColorOptions}
						setOption={setHairColorIndex}
					/>
					<Selector
						optionName="Facial Hair"
						optionIndex={facialHairIndex}
						optionsArray={facialHairOptions}
						setOption={setFacialHairIndex}
					/>
					<Selector
						optionName="Facial Hair Color"
						optionIndex={facialHairColorIndex}
						optionsArray={facialHairColorOptions}
						setOption={setFacialHairColorIndex}
					/>
					<Selector
						optionName="Clothes"
						optionIndex={clotheIndex}
						optionsArray={clotheOptions}
						setOption={setClotheIndex}
					/>
					<Selector
						optionName="Fabric Color"
						optionIndex={clotheColorIndex}
						optionsArray={clotheColorOptions}
						setOption={setClotheColorIndex}
					/>
					<Selector
						optionName="Graphic Type"
						optionIndex={clotheGraphicIndex}
						optionsArray={clotheGraphicOptions}
						setOption={setClotheGraphicIndex}
					/>
					<Selector
						optionName="Eyes"
						optionIndex={eyeIndex}
						optionsArray={eyeOptions}
						setOption={setEyeIndex}
					/>
					<Selector
						optionName="Eyebrows"
						optionIndex={eyebrowIndex}
						optionsArray={eyebrowOptions}
						setOption={setEyebrowIndex}
					/>
					<Selector
						optionName="Mouths"
						optionIndex={mouthIndex}
						optionsArray={mouthOptions}
						setOption={setMouthIndex}
					/>
					<Selector
						optionName="Skin"
						optionIndex={skinColorIndex}
						optionsArray={skinColorOptions}
						setOption={setSkinColorIndex}
					/>
				</Stack>
			</Flex>
			<Box>
				<SyntaxHighlighter language="jsx" style={okaidia}>
					{`
<Avatar 
	eyeType="${eyeOptions[eyeIndex]}" 
	eyebrowType="${eyebrowOptions[eyebrowIndex]}"
	mouthType="${mouthOptions[mouthIndex]}"
	topType="${topOptions[topIndex]}"
	hatColor="${hatColorOptions[hatColorIndex]}"
	accessoriesType="${accessoriesOptions[accessoryIndex]}"
	hairColor="${hairColorOptions[hairColorIndex]}"
	facialHairType="${facialHairOptions[facialHairIndex]}"
	facialHairColor="${facialHairColorOptions[facialHairColorIndex]}"
	clotheType="${clotheOptions[clotheIndex]}"
	clotheColor="${clotheColorOptions[clotheColorIndex]}"
	graphicType="${clotheGraphicOptions[clotheGraphicIndex]}"
	skinColor="${skinColorOptions[skinColorIndex]}"
/>
					`}
				</SyntaxHighlighter>
			</Box>
			<Box bg="green.500" h={32} w={32} pos="absolute" bottom={3} right={6} display={{ _: 'block', lg: 'none' }}>
				<Avatar
					style={{ height: '100%', width: '100%' }}
					eyeType={eyeOptions[eyeIndex]}
					eyebrowType={eyebrowOptions[eyebrowIndex]}
					mouthType={mouthOptions[mouthIndex]}
					topType={topOptions[topIndex]}
					hatColor={hatColorOptions[hatColorIndex]}
					accessoriesType={accessoriesOptions[accessoryIndex]}
					hairColor={hairColorOptions[hairColorIndex]}
					facialHairType={facialHairOptions[facialHairIndex]}
					facialHairColor={facialHairColorOptions[facialHairColorIndex]}
					clotheType={clotheOptions[clotheIndex]}
					clotheColor={clotheColorOptions[clotheColorIndex]}
					graphicType={clotheGraphicOptions[clotheGraphicIndex]}
					skinColor={skinColorOptions[skinColorIndex]}
				/>
			</Box>
		</Box>
	);
}
