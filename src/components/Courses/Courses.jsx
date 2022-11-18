import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import React, { useEffect, useState } from 'react';
// import { mockedAuthorsList, mockedCoursesList } from '../../constants'; // replaced with authors and courses
import { AUTHORS, COURSES } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { getAuthors, getCourses } from './../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import useFetch from './../../helpers/useFetch';
import { getCoursesAction } from '../../store/courses/actions';
import { getAuthorsAction } from './../../store/authors/actions';

function Courses(
	{
		//  courseList, authorList, addNewCourseClick
	}
) {
	const navigate = useNavigate();
	const courses = useSelector(getCourses);
	const authorList = useSelector(getAuthors);
	const dispatch = useDispatch();
	const { request, data, error } = useFetch();

	const [filtererdList, searchCourseListList] = useState([]);

	useEffect(() => {
		getAllAuthors();
		getAllCourses();
	}, []);

	useEffect(() => {
		searchCourseListList([...courses]);
	}, [courses]);

	function filterList(val) {
		if (!val) {
			searchCourseListList([...courses]);
		} else {
			let newList = [...courses].filter(
				(x) =>
					x.title.toLowerCase().includes(val.toLowerCase()) ||
					x.id.toLowerCase().includes(val.toLowerCase())
			);
			searchCourseListList(newList);
		}
	}

	function navigateToAddCourse() {
		navigate('/courses/add');
	}

	function getAllCourses() {
		request
			.get(COURSES)
			.then((res) => {
				dispatch(getCoursesAction(res.result));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function getAllAuthors() {
		request
			.get(AUTHORS)
			.then((res) => {
				dispatch(getAuthorsAction(res.result));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<div className='search-add-section pb-3'>
				<SearchBar
					click={() => navigateToAddCourse()}
					filterList={(e) => filterList(e)}
				></SearchBar>
			</div>
			<div className='card-section'>
				{filtererdList.map((x) => {
					const authors = [...authorList]
						.filter((e) => x.authors.includes(e.id))
						.map((e) => e.name);
					return (
						<CourseCard key={x.id} course={x} authors={authors}></CourseCard>
					);
				})}
			</div>
		</div>
	);
}

export default Courses;
