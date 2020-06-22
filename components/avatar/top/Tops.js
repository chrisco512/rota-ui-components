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
	...rest
}) {
	switch (topType) {
		case 'Eyepatch':
			return <Eyepatch {...rest} />;
		case 'Hat':
			return <Hat facialHairColor={facialHairColor} facialHairType={facialHairType} {...rest} />;
		case 'Hijab':
			return <Hijab hatColor={hatColor} {...rest} />;
		case 'LongHairBigHair':
			return (
				<LongHairBigHair
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairBob':
			return (
				<LongHairBob
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairBun':
			return (
				<LongHairBun
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairCurly':
			return (
				<LongHairCurly
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairCurvy':
			return (
				<LongHairCurvy
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairDreads':
			return (
				<LongHairDreads
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairFrida':
			return (
				<LongHairFrida
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairFro':
			return (
				<LongHairFro
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairFroBand':
			return (
				<LongHairFroBand
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairMiaWallace':
			return (
				<LongHairMiaWallace
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairNotTooLong':
			return (
				<LongHairNotTooLong
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairShavedSides':
			return (
				<LongHairShavedSides
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairStraight':
			return (
				<LongHairStraight
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairStraight2':
			return (
				<LongHairStraight2
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'LongHairStraightStrand':
			return (
				<LongHairStraightStrand
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'NoHair':
			return <NoHair facialHairColor={facialHairColor} facialHairType={facialHairType} {...rest} />;
		case 'ShortHairDreads01':
			return (
				<ShortHairDreads01
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairDreads02':
			return (
				<ShortHairDreads02
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairFrizzle':
			return (
				<ShortHairFrizzle
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairShaggyMullet':
			return (
				<ShortHairShaggyMullet
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairShortCurly':
			return (
				<ShortHairShortCurly
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairShortFlat':
			return (
				<ShortHairShortFlat
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairShortRound':
			return (
				<ShortHairShortRound
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairShortWaved':
			return (
				<ShortHairShortWaved
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairSides':
			return (
				<ShortHairSides
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairTheCaesar':
			return (
				<ShortHairTheCaesar
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'ShortHairTheCaesarSidePart':
			return (
				<ShortHairTheCaesarSidePart
					hairColor={hairColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'Turban':
			return (
				<Turban
					hatColor={hatColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'WinterHat1':
			return (
				<WinterHat1
					hatColor={hatColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'WinterHat2':
			return (
				<WinterHat2
					hatColor={hatColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'WinterHat3':
			return (
				<WinterHat3
					hatColor={hatColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		case 'WinterHat4':
			return (
				<WinterHat4
					hatColor={hatColor}
					facialHairColor={facialHairColor}
					facialHairType={facialHairType}
					{...rest}
				/>
			);
		default:
			return <NoHair {...rest} />;
	}
}
