import {
	Angry,
	AngryNatural,
	DefaultEyebrow,
	DefaultNatural,
	FlatNatural,
	FrownNatural,
	RaisedExcited,
	RaisedExcitedNatural,
	SadConcerned,
	SadConcernedNatural,
	UnibrowNatural,
	UpDown,
	UpDownNatural,
} from './';

export default function Eyebrows({ eyebrowType = 'DefaultEyebrow' }) {
	switch (eyebrowType) {
		case 'Angry':
			return <Angry />;
		case 'AngryNatural':
			return <AngryNatural />;
		case 'DefaultEyebrow':
			return <DefaultEyebrow />;
		case 'DefaultNatural':
			return <DefaultNatural />;
		case 'FlatNatural':
			return <FlatNatural />;
		case 'FrownNatural':
			return <FrownNatural />;
		case 'RaisedExcited':
			return <RaisedExcited />;
		case 'RaisedExcitedNatural':
			return <RaisedExcitedNatural />;
		case 'SadConcerned':
			return <SadConcerned />;
		case 'SadConcernedNatural':
			return <SadConcernedNatural />;
		case 'UnibrowNatural':
			return <UnibrowNatural />;
		case 'UpDown':
			return <UpDown />;
		case 'UpDownNatural':
			return <UpDownNatural />;
		default:
			return <DefaultEyebrow />;
	}
}
