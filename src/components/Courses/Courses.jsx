import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import React, { useEffect, useState } from 'react';
// import { mockedAuthorsList, mockedCoursesList } from '../../constants'; // replaced with authors and courses

import { useNavigate } from 'react-router-dom';
import { getAuthors, getCourses } from './../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllCourses } from './../../store/courses/thunk';
import { GetAllAuthors } from '../../store/authors/thunk';

function Courses(
	{
		//  courseList, authorList, addNewCourseClick
	}
) {
	const navigate = useNavigate();
	const courses = useSelector(getCourses);
	const authorList = useSelector(getAuthors);
	const dispatch = useDispatch();

	const [filtererdList, searchCourseListList] = useState([]);

	useEffect(() => {
		dispatch(GetAllAuthors());
		dispatch(GetAllCourses());
	}, []);

	useEffect(() => {
		console.log(courses);
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
