export default function convertLengthInSecondsToText({ lengthInSeconds = 0 }) {
	const minutes = Math.floor(lengthInSeconds / 60);
	const seconds = lengthInSeconds % 60;

	const formattedMinutes = minutes ? `${minutes}m` : ``;
	const formattedSeconds = seconds < 10 ? `0${seconds}s` : `${seconds}s`;

	return `${formattedMinutes}${formattedSeconds}`;
}
