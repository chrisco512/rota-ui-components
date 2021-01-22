import { createContext, useReducer } from 'react';

const MenuContext = createContext({ state: {}, dispatch: null });
MenuContext.displayName = 'MenuContext';

function menuReducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return {
				...state,
				showMenu: !state.showMenu,
			};
	}
	return state;
}

export const MenuProvider = ({ children }) => {
	const initState = {
		showMenu: true,
	};
	const [ state, dispatch ] = useReducer(menuReducer, initState);

	return <MenuContext.Provider value={{ state, dispatch }}>{children}</MenuContext.Provider>;
};

export default MenuContext;
