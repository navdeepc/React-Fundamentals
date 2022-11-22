import { getCoursesAction } from './actions';
import { COURSES } from '../../constants';
import useFetch from '../../helpers/useFetch';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { hostURL } from './../../constants';

// function GetAllCourses() {
// 	const { request, data, error } = useFetch();

// 	return async function (dispatch) {
// 		request
// 			.get(COURSES)
// 			.then((res) => {
// 				dispatch(getCoursesAction(res.result));
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};
// }

// export default GetAllCourses;

export const GetAllCourses = () => async (dispatch) => {
	const response = await fetch(`${hostURL}${COURSES}`);
	const data = await response.json();
	dispatch(getCoursesAction(data.result));
};
