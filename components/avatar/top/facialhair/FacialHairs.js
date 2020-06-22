import { BeardLight, BeardMajestic, BeardMedium, Blank, MoustacheFancy, MoustacheMagnum } from './';

export default function FacialHairs({ facialHairType = 'Blank', facialHairColor = 'Brown' }) {
	switch (facialHairType) {
		case 'BeardLight':
			return <BeardLight facialHairColor={facialHairColor} />;
		case 'BeardMajestic':
			return <BeardMajestic facialHairColor={facialHairColor} />;
		case 'BeardMedium':
			return <BeardMedium facialHairColor={facialHairColor} />;
		case 'Blank':
			return <Blank />;
		case 'MoustacheFancy':
			return <MoustacheFancy facialHairColor={facialHairColor} />;
		case 'MoustacheMagnum':
			return <MoustacheMagnum facialHairColor={facialHairColor} />;
		default:
			return <Blank />;
	}
}
