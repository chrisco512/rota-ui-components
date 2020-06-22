import {
	BlazerShirt,
	BlazerSweater,
	CollarSweater,
	GraphicShirt,
	Hoodie,
	Overall,
	ShirtCrewNeck,
	ShirtScoopNeck,
	ShirtVNeck,
} from './';

export default function Clothes({ clotheType = 'BlazerShirt', clotheColor = 'PastelRed', graphicType = 'Deer' }) {
	switch (clotheType) {
		case 'BlazerShirt':
			return <BlazerShirt color={clotheColor} />;
		case 'BlazerSweater':
			return <BlazerSweater color={clotheColor} />;
		case 'CollarSweater':
			return <CollarSweater color={clotheColor} />;
		case 'GraphicShirt':
			return <GraphicShirt color={clotheColor} graphicType={graphicType} />;
		case 'Hoodie':
			return <Hoodie color={clotheColor} />;
		case 'Overall':
			return <Overall color={clotheColor} />;
		case 'ShirtCrewNeck':
			return <ShirtCrewNeck color={clotheColor} />;
		case 'ShirtScoopNeck':
			return <ShirtScoopNeck color={clotheColor} />;
		case 'ShirtVNeck':
			return <ShirtVNeck color={clotheColor} />;
		default:
			return <BlazerShirt color={clotheColor} />;
	}
}
