import { USER_LOGIN, USER_LOGOUT } from './types';

const userInitialState = {
	isAuth: false, // default value - false. After success login - true
	name: '', // default value - empty string. After success login - name of user
	email: '', // default value - empty string. After success login - email of user
	token: '', // default value - empty string or token value from localStorage. After success login - value from API /login response. See Swagger.
};

export const userReducer = (state = userInitialState, action) => {
	let payload = action.payload;
	switch (action.type) {
		case USER_LOGIN:
			payload['isAuth'] = true;
			return payload;
			break;
		case USER_LOGOUT:
			payload['isAuth'] = false;
			return payload;
			break;
		default:
			return state;
			break;
	}
};
