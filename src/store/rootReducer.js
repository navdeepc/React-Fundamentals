import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/reducer';
import { authorReducer } from './authors/reducer';
import { courseReducer } from './courses/reducer';

export const rootReducer = combineReducers({
	user: userReducer,
	authors: authorReducer,
	courses: courseReducer,
});
