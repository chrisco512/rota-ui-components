import {
	Concerned,
	DefaultMouth,
	Disbelief,
	Eating,
	Grimace,
	Sad,
	ScreamOpen,
	Serious,
	Smile,
	Tongue,
	Twinkle,
	Vomit,
} from './';

export default function Mouths({ mouthType = 'DefaultMouth' }) {
	switch (mouthType) {
		case 'Concerned':
			return <Concerned />;
		case 'DefaultMouth':
			return <DefaultMouth />;
		case 'Disbelief':
			return <Disbelief />;
		case 'Eating':
			return <Eating />;
		case 'Grimace':
			return <Grimace />;
		case 'Sad':
			return <Sad />;
		case 'ScreamOpen':
			return <ScreamOpen />;
		case 'Serious':
			return <Serious />;
		case 'Smile':
			return <Smile />;
		case 'Tongue':
			return <Tongue />;
		case 'Twinkle':
			return <Twinkle />;
		case 'Vomit':
			return <Vomit />;
		default:
			return <DefaultMouth />;
	}
}
