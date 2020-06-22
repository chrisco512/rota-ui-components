import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';

import FacialHair from './facialhair/FacialHairs';
import HairColor from './HairColor';

export default function ShortHairTheCaesar({ children, hairColor, facialHairType, facialHairColor }) {
	const [ path1Id ] = useState(nanoid);
	const [ path2Id ] = useState(nanoid);
	const [ mask1Id ] = useState(nanoid);
	const [ mask2Id ] = useState(nanoid);
	const [ filter1Id ] = useState(nanoid);

	const path1 = `react-path-${path1Id}`;
	const path2 = `react-path-${path2Id}`;
	const filter1 = `react-filter-${filter1Id}`;
	const mask1 = `react-mask-${mask1Id}`;
	const mask2 = `react-mask-${mask2Id}`;

	return (
		<g id="Top" strokeWidth="1" fillRule="evenodd">
			<defs>
				<rect id={path1} x="0" y="0" width="264" height="280" />
				<path
					d="M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z"
					id={path2}
				/>
				<filter x="-0.8%" y="-2.0%" width="101.5%" height="108.0%" filterUnits="objectBoundingBox" id={filter1}>
					<feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
					<feColorMatrix
						values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
						type="matrix"
						in="shadowOffsetOuter1"
						result="shadowMatrixOuter1"
					/>
					<feMerge>
						<feMergeNode in="shadowMatrixOuter1" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<mask id={mask1} fill="white">
				<use xlinkHref={'#' + path1} />
			</mask>
			<g id="Mask" />
			<g id="Top/Short-Hair/The-Caesar" mask={`url(#${mask1})`}>
				<g transform="translate(-1.000000, 0.000000)">
					<FacialHair facialHairColor={facialHairColor} facialHairType={facialHairType} />
					<g id="Hair" strokeWidth="1" fillRule="evenodd" transform="translate(75.000000, 34.000000)">
						<mask id={mask2} fill="white">
							<use xlinkHref={'#' + path2} />
						</mask>
						<use id="Caesar" fill="#28354B" xlinkHref={'#' + path2} />
						<HairColor maskId={mask2} color={hairColor} />
					</g>
					{children}
				</g>
			</g>
		</g>
	);
}
