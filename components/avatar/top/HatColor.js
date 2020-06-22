function makeColor(name, color) {
	const ColorComponent = ({ maskId }) => (
		<g id="Color/HatColor/Red" mask={`url(#${maskId})`} fillRule="evenodd" fill={color}>
			<rect id="🖍Color" x="0" y="0" width="264" height="280" />
		</g>
	);

	ColorComponent.displayName = name;
	return ColorComponent;
}

const Black = makeColor('Black', '#262E33');
const Blue01 = makeColor('Blue01', '#65C9FF');
const Blue02 = makeColor('Blue02', '#5199E4');
const Blue03 = makeColor('Blue03', '#25557C');
const Gray01 = makeColor('Gray01', '#E6E6E6');
const Gray02 = makeColor('Gray02', '#929598');
const Heather = makeColor('Heather', '#3C4F5C');
const PastelBlue = makeColor('PastelBlue', '#B1E2FF');
const PastelGreen = makeColor('PastelGreen', '#A7FFC4');
const PastelOrange = makeColor('PastelOrange', '#FFDEB5');
const PastelRed = makeColor('PastelRed', '#FFAFB9');
const PastelYellow = makeColor('PastelYellow', '#FFFFB1');
const Pink = makeColor('Pink', '#FF488E');
const Red = makeColor('Red', '#FF5C5C');
const White = makeColor('White', '#FFFFFF');

export default function Colors({ maskId, color }) {
	switch (color) {
		case 'Black':
			return <Black maskId={maskId} />;
		case 'Blue01':
			return <Blue01 maskId={maskId} />;
		case 'Blue02':
			return <Blue02 maskId={maskId} />;
		case 'Blue03':
			return <Blue03 maskId={maskId} />;
		case 'Gray01':
			return <Gray01 maskId={maskId} />;
		case 'Gray02':
			return <Gray02 maskId={maskId} />;
		case 'Heather':
			return <Heather maskId={maskId} />;
		case 'PastelBlue':
			return <PastelBlue maskId={maskId} />;
		case 'PastelGreen':
			return <PastelGreen maskId={maskId} />;
		case 'PastelOrange':
			return <PastelOrange maskId={maskId} />;
		case 'PastelRed':
			return <PastelRed maskId={maskId} />;
		case 'PastelYellow':
			return <PastelYellow maskId={maskId} />;
		case 'Pink':
			return <Pink maskId={maskId} />;
		case 'Red':
			return <Red maskId={maskId} />;
		case 'White':
			return <White maskId={maskId} />;
		default:
			return <Red maskId={maskId} />;
	}
}
