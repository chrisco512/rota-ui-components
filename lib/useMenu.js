import { useContext } from 'react';
import MenuContext from './MenuContext';

const useMenu = () => {
	const { state, dispatch } = useContext(MenuContext);
	const { showMenu } = state;

	return {
		showMenu,
		dispatch,
	};
};

export default useMenu;
