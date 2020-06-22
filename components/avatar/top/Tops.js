import {
	Eyepatch,
	Hat,
	Hijab,
	LongHairBigHair,
	LongHairBob,
	LongHairBun,
	LongHairCurly,
	LongHairCurvy,
	LongHairDreads,
	LongHairFrida,
	LongHairFro,
	LongHairFroBand,
	LongHairMiaWallace,
	LongHairNotTooLong,
	LongHairShavedSides,
	LongHairStraight,
	LongHairStraight2,
	LongHairStraightStrand,
	NoHair,
	ShortHairDreads01,
	ShortHairDreads02,
	ShortHairFrizzle,
	ShortHairShaggyMullet,
	ShortHairShortCurly,
	ShortHairShortFlat,
	ShortHairShortRound,
	ShortHairShortWaved,
	ShortHairSides,
	ShortHairTheCaesar,
	ShortHairTheCaesarSidePart,
	Turban,
	WinterHat1,
	WinterHat2,
	WinterHat3,
	WinterHat4,
} from './';

export default function Tops({
	topType = 'LongHairStraight',
	hairColor = 'Brown',
	hatColor = 'Red',
	facialHairColor = 'Brown',
	facialHairType = 'Blank',
}) {
	switch (topType) {
		case 'Eyepatch':
			return <Eyepatch />;
		case 'Hat':
			return <Hat facialHairColor={facialHairColor} facialHairType={facialHairType} />;
		case 'Hijab':
			return <Hijab hatColor={hatColor} />;
		case 'LongHairBigHair':
			return (
				<LongHairBigHair
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairBob':
			return (
				<LongHairBob hairColor={hairColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />
			);
		case 'LongHairBun':
			return (
				<LongHairBun hairColor={hairColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />
			);
		case 'LongHairCurly':
			return (
				<LongHairCurly
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairCurvy':
			return (
				<LongHairCurvy
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairDreads':
			return (
				<LongHairDreads
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairFrida':
			return (
				<LongHairFrida
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairFro':
			return (
				<LongHairFro hairColor={hairColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />
			);
		case 'LongHairFroBand':
			return (
				<LongHairFroBand
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairMiaWallace':
			return (
				<LongHairMiaWallace
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairNotTooLong':
			return (
				<LongHairNotTooLong
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairShavedSides':
			return (
				<LongHairShavedSides
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairStraight':
			return (
				<LongHairStraight
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairStraight2':
			return (
				<LongHairStraight2
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'LongHairStraightStrand':
			return (
				<LongHairStraightStrand
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'NoHair':
			return <NoHair facialHairColor={facialHairColor} facialHairType={facialHairType} />;
		case 'ShortHairDreads01':
			return (
				<ShortHairDreads01
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairDreads02':
			return (
				<ShortHairDreads02
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairFrizzle':
			return (
				<ShortHairFrizzle
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairShaggyMullet':
			return (
				<ShortHairShaggyMullet
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairShortCurly':
			return (
				<ShortHairShortCurly
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairShortFlat':
			return (
				<ShortHairShortFlat
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairShortRound':
			return (
				<ShortHairShortRound
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairShortWaved':
			return (
				<ShortHairShortWaved
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairSides':
			return (
				<ShortHairSides
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairTheCaesar':
			return (
				<ShortHairTheCaesar
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'ShortHairTheCaesarSidePart':
			return (
				<ShortHairTheCaesarSidePart
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
				/>
			);
		case 'Turban':
			return <Turban hatColor={hatColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />;
		case 'WinterHat1':
			return <WinterHat1 hatColor={hatColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />;
		case 'WinterHat2':
			return <WinterHat2 hatColor={hatColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />;
		case 'WinterHat3':
			return <WinterHat3 hatColor={hatColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />;
		case 'WinterHat4':
			return <WinterHat4 hatColor={hatColor} facialHairColor={facialHairColor} facialHairType={facialHairType} />;
		default:
			return <Blank />;
	}
}
