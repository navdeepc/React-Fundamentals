import { ADD_COURSES, GET_COURSES } from './types';

export const getCoursesAction = (payload) => ({ type: GET_COURSES, payload });
export const addCoursesAction = (payload) => ({ type: ADD_COURSES, payload });
