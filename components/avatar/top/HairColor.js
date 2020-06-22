function makeColor(name, color) {
	const ColorComponent = ({ maskId }) => (
		<g id="Color/Hair/Brown" mask={`url(#${maskId})`} fill={color}>
			<g transform="translate(0.000000, 0.000000) " id="Color">
				<rect x="0" y="0" width="264" height="280" />
			</g>
		</g>
	);

	ColorComponent.displayName = name;
	return ColorComponent;
}

const Auburn = makeColor('Auburn', '#A55728');
const Black = makeColor('Black', '#2C1B18');
const Blonde = makeColor('Blonde', '#B58143');
const BlondeGolden = makeColor('BlondeGolden', '#D6B370');
const Brown = makeColor('Brown', '#724133');
const BrownDark = makeColor('BrownDark', '#4A312C');
const PastelPink = makeColor('PastelPink', '#F59797');
const Platinum = makeColor('Platinum', '#ECDCBF');
const Red = makeColor('Red', '#C93305');
const SilverGray = makeColor('SilverGray', '#E8E1E1');

export default function Colors({ maskId, color }) {
	switch (color) {
		case 'Auburn':
			return <Auburn maskId={maskId} />;
		case 'Black':
			return <Black maskId={maskId} />;
		case 'Blonde':
			return <Blonde maskId={maskId} />;
		case 'BlondeGolden':
			return <BlondeGolden maskId={maskId} />;
		case 'Brown':
			return <Brown maskId={maskId} />;
		case 'BrownDark':
			return <BrownDark maskId={maskId} />;
		case 'PastelPink':
			return <PastelPink maskId={maskId} />;
		case 'Platinum':
			return <Platinum maskId={maskId} />;
		case 'Red':
			return <Red maskId={maskId} />;
		case 'SilverGray':
			return <SilverGray maskId={maskId} />;
		default:
			return <Brown maskId={maskId} />;
	}
}
