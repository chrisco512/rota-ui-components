import { useContext } from 'react';
import MediaContext from './MediaContext';

// Returning data in this way seems to be triggering re-renders every time the timer changes
// I'm not sure if that's avoidable, especially since, for example, the CurrentThreadClipPlayer does
// not need to read that value.
const useMedia = () => {
	const { state = {}, dispatch } = useContext(MediaContext);
	const { player, timer } = state;

	return {
		player,
		timer,
		dispatch,
	};
};

export default useMedia;
