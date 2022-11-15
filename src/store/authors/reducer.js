import { ADD_AUTHORS, GET_AUTHORS } from './types';

const authorsInitialState = [];

export const authorReducer = (state = authorsInitialState, action) => {
	let payload = action.payload;
	switch (action.type) {
		case GET_AUTHORS:
			return payload;
			break;
		case ADD_AUTHORS:
			return [payload, ...state];
			break;
		default:
			return state;
			break;
	}
};
