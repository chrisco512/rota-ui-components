import { createContext, useReducer } from 'react';

const MediaContext = createContext({ text: 'hmm' });
MediaContext.displayName = 'MediaContext';

function mediaReducer(state, action) {
	switch (action.type) {
		case 'SET_PLAYER':
			if (action.payload.player) {
				return {
					...state,
					player: action.payload.player,
				};
			}
			console.error('mediaReducer - No player included in payload');
			break;
		case 'SET_TIMER':
			return {
				...state,
				timer: action.payload.timer,
			};
			break;
	}
	return state;
}

export const MediaProvider = ({ children }) => {
	const initState = {
		player: null,
		timer: 0,
	};
	const [ state, dispatch ] = useReducer(mediaReducer, initState);

	return <MediaContext.Provider value={{ state, dispatch }}>{children}</MediaContext.Provider>;
};

export default MediaContext;
