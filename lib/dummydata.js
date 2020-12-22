import { format, formatDistance, subMinutes, subDays } from 'date-fns';
import { v4 as uuid } from 'uuid';

const members = {
	chrisjo: {
		mentionName: 'chrisjo',
		name: 'Christopher Johnson',
		avatar: {
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
	},
	allensm: {
		mentionName: 'aaallen',
		name: 'Allen Smith',
		avatar: {
			eyeType: 'DefaultEyes',
			mouthType: 'Serious',
			eyebrowType: 'UpDown',
			topType: 'NoHair',
			accessoriesType: 'Prescription02',
			hatColor: 'White',
			hairColor: 'Brown',
			facialHairType: 'BeardLight',
			facialHairColor: 'Brown',
			clotheType: 'ShirtCrewNeck',
			clotheColor: 'PastelBlue',
			graphicType: 'Cumbia',
			skinColor: 'Pale',
		},
	},
	haleyto: {
		mentionName: 'sassy',
		name: 'Haley Tobon',
		avatar: {
			eyeType: 'DefaultEyes',
			eyebrowType: 'DefaultEyebrow',
			mouthType: 'Smile',
			topType: 'LongHairStraightStrand',
			hatColor: 'White',
			accessoriesType: 'Kurt',
			hairColor: 'BlondeGolden',
			facialHairType: 'Blank',
			facialHairColor: 'Blonde',
			clotheType: 'ShirtScoopNeck',
			clotheColor: 'Pink',
			graphicType: 'Cumbia',
			skinColor: 'Pale',
		},
	},
};

const thread1 = {
	id: uuid(),
	title: 'Why is Compound so dominant right now? And title is really long?',
	dateCreated: subDays(new Date(), 1), //yesterday
	clips: [
		{
			id: 100,
			length: 30,
			datePosted: subMinutes(new Date(), 15),
			author: 'haleyto',
		},
		{
			id: 101,
			length: 12,
			datePosted: subMinutes(new Date(), 125),
			author: 'allensm',
		},
		{
			id: 102,
			length: 52,
			datePosted: subDays(new Date(), 1),
			author: 'chrisjo',
		},
	],
};

const thread2 = {
	id: uuid(),
	title: 'How did you find out about crypto?',
	dateCreated: subDays(new Date(), 1), //yesterday
	clips: [
		{
			id: 200,
			length: 14,
			datePosted: subMinutes(new Date(), 5),
			author: 'allensm',
		},
		{
			id: 201,
			length: 17,
			datePosted: subMinutes(new Date(), 97),
			author: 'allensm',
		},
		{
			id: 202,
			length: 112,
			datePosted: subDays(new Date(), 3),
			author: 'haleyto',
		},
		{
			id: 203,
			length: 7,
			datePosted: subMinutes(new Date(), 5),
			author: 'chrisjo',
		},
		{
			id: 204,
			length: 32,
			datePosted: subMinutes(new Date(), 97),
			author: 'chrisjo',
		},
		{
			id: 205,
			length: 25,
			datePosted: subDays(new Date(), 3),
			author: 'haleyto',
		},
	],
};

const threads = [
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
	thread1,
	thread2,
];

const queue = [
	thread1,
	thread2,
	{ ...thread1, id: uuid() },
	{ ...thread2, id: uuid() },
	{ ...thread2, id: uuid() },
	{ ...thread1, id: uuid() },
	{ ...thread2, id: uuid() },
	{ ...thread2, id: uuid() },
	{ ...thread1, id: uuid() },
	{ ...thread2, id: uuid() },
];

export { members, threads, queue };
