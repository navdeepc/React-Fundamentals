import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import React, { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { useNavigate } from 'react-router-dom';

function Courses(
	{
		//  courseList, authorList, addNewCourseClick
	}
) {
	const [filtererdList, searchCourseListList] = useState([
		...mockedCoursesList,
	]);

	const navigate = useNavigate();

	function filterList(val) {
		if (!val) {
			searchCourseListList([...mockedCoursesList]);
		} else {
			let newList = [...mockedCoursesList].filter(
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
					const authors = [...mockedAuthorsList]
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
