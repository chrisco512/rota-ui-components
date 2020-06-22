function makeColor(name, color) {
	const ColorComponent = ({ maskId }) => (
		<g id="Color/Skin/Brown" mask={`url(#${maskId})`} fill={color}>
			<g transform="translate(0.000000, 0.000000) " id="Color">
				<rect x="0" y="0" width="264" height="280" />
			</g>
		</g>
	);

	ColorComponent.displayName = name;
	return ColorComponent;
}

const Tanned = makeColor('Tanned', '#FD9841');
const Yellow = makeColor('Yellow', '#F8D25C');
const Pale = makeColor('Pale', '#FFDBB4');
const Light = makeColor('Light', '#EDB98A');
const Brown = makeColor('Brown', '#D08B5B');
const DarkBrown = makeColor('DarkBrown', '#AE5D29');
const Black = makeColor('Black', '#614335');

export default function Skin({ maskId, color }) {
	switch (color) {
		case 'Tanned':
			return <Tanned maskId={maskId} />;
		case 'Yellow':
			return <Yellow maskId={maskId} />;
		case 'Pale':
			return <Pale maskId={maskId} />;
		case 'Light':
			return <Light maskId={maskId} />;
		case 'Brown':
			return <Brown maskId={maskId} />;
		case 'DarkBrown':
			return <DarkBrown maskId={maskId} />;
		case 'Black':
			return <Black maskId={maskId} />;
		default:
			return <Brown maskId={maskId} />;
	}
}
