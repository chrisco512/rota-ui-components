import { BlazerShirt, BlazerSweater, CollarSweater, GraphicShirt } from './';

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
		default:
			return <BlazerShirt color={clotheColor} />;
	}
}
