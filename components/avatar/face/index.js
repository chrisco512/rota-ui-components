import Mouth from './mouth/Mouths';
import Eyebrow from './eyebrow/Eyebrows';
import Eyes from './eyes/Eyes';
import Nose from './nose/DefaultNose';

export default function Face({ mouthType = 'DefaultMouth', eyeType = 'DefaultEyes', eyebrowType = 'DefaultEyebrow' }) {
	return (
		<g id="Face" transform="translate(76.000000, 82.000000)" fill="#000000">
			<Mouth mouthType={mouthType} />
			<Nose />
			<Eyes eyeType={eyeType} />
			<Eyebrow eyebrowType={eyebrowType} />
		</g>
	);
}
