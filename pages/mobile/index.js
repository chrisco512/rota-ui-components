import dynamic from 'next/dynamic';

import { MediaProvider } from '../../lib';
import { MobileContentLayout } from '../../components/site-content-layout';

dynamic(
	() => {
		return import('../../components/current-clip-player');
	},
	{ ssr: false }
);

export default function Mobile() {
	return (
		<MediaProvider>
			<MobileContentLayout />
		</MediaProvider>
	);
}
