import { Blank, Kurt, Prescription01, Prescription02, Round, Sunglasses, Wayfarers } from './';

export default function Accessories({ accessoriesType = 'Blank' }) {
	console.log({ accessoriesType });
	switch (accessoriesType) {
		case 'Kurt':
			return <Kurt />;
		case 'Prescription01':
			return <Prescription01 />;
		case 'Prescription02':
			return <Prescription02 />;
		case 'Round':
			return <Round />;
		case 'Sunglasses':
			return <Sunglasses />;
		case 'Wayfarers':
			return <Wayfarers />;
		case 'Blank':
			return <Blank />;
		default:
			return <Blank />;
	}
}
