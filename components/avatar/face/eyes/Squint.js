import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';

export default function Squint() {
	const [ path1Id ] = useState(nanoid);
	const [ path2Id ] = useState(nanoid);
	const [ mask1Id ] = useState(nanoid);
	const [ mask2Id ] = useState(nanoid);

	const path1 = `react-path-${path1Id}`;
	const mask1 = `react-mask-${mask1Id}`;
	const path2 = `react-path-${path2Id}`;
	const mask2 = `react-mask-${mask2Id}`;

	return (
		<g id="Eyes/Squint-😊" transform="translate(0.000000, 8.000000)">
			<defs>
				<path
					d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
					id={path1}
				/>
				<path
					d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
					id={path2}
				/>
			</defs>
			<g id="Eye" transform="translate(16.000000, 13.000000)">
				<mask id={mask1} fill="white">
					<use xlinkHref={'#' + path1} />
				</mask>
				<use id="The-white-stuff" fill="#FFFFFF" xlinkHref={'#' + path1} />
				<circle fillOpacity="0.699999988" fill="#000000" mask={`url(#${mask1})`} cx="14" cy="10" r="6" />
			</g>
			<g id="Eye" transform="translate(68.000000, 13.000000)">
				<mask id={mask2} fill="white">
					<use xlinkHref={'#' + path2} />
				</mask>
				<use id="Eyeball-Mask" fill="#FFFFFF" xlinkHref={'#' + path2} />
				<circle fillOpacity="0.699999988" fill="#000000" mask={`url(#${mask2})`} cx="14" cy="10" r="6" />
			</g>
		</g>
	);
}
