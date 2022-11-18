import { ADD_COURSES, GET_COURSES } from './types';

const coursesInitialState = [];

export const courseReducer = (state = coursesInitialState, action) => {
	let payload = action.payload;
	switch (action.type) {
		case GET_COURSES:
			return payload;
			break;
		case ADD_COURSES:
			return [payload, ...state];
			break;
		default:
			return state;
			break;
	}
};
