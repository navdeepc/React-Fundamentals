import { ADD_AUTHORS, GET_AUTHORS } from './types';

export const getAuthorsAction = (payload) => ({ type: GET_AUTHORS, payload });
export const addAuthorsAction = (payload) => ({ type: ADD_AUTHORS, payload });
