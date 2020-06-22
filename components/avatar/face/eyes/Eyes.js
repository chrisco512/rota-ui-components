import { Close, Cry, DefaultEyes, Dizzy, EyeRoll, Happy, Hearts, Side, Squint, Surprised, Wink, WinkWacky } from './';

export default function Eyes({ eyeType = 'DefaultEyes' }) {
	switch (eyeType) {
		case 'Close':
			return <Close />;
		case 'Cry':
			return <Cry />;
		case 'DefaultEyes':
			return <DefaultEyes />;
		case 'Dizzy':
			return <Dizzy />;
		case 'EyeRoll':
			return <EyeRoll />;
		case 'Happy':
			return <Happy />;
		case 'Hearts':
			return <Hearts />;
		case 'Side':
			return <Side />;
		case 'Squint':
			return <Squint />;
		case 'Surprised':
			return <Surprised />;
		case 'Wink':
			return <Wink />;
		case 'WinkWacky':
			return <WinkWacky />;
		default:
			return <DefaultEyes />;
	}
}
