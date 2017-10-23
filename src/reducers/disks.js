import { FETCH_ALL_DISKS_FULFILLED } from '../actions/disks';

const initialState = {
	disks: []
}

function reducer(state = initialState, action) {
	if (action.type === FETCH_ALL_DISKS_FULFILLED) {
		return {
			disks: action.disks.slice(0, 4)
		}	
	}
	return state;
};

export default reducer; 