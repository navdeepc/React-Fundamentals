import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import React, { useState } from 'react';

function Courses({ courseList, authorList, addNewCourseClick }) {
	const [filtererdList, searchCourseListList] = useState(courseList);

	function filterList(val) {
		if (!val) {
			searchCourseListList(courseList);
		} else {
			let newList = courseList.filter(
				(x) =>
					x.title.toLowerCase().includes(val.toLowerCase()) ||
					x.id.toLowerCase().includes(val.toLowerCase())
			);
			searchCourseListList(newList);
		}
	}
	return (
		<div className='p-3'>
			<div className='search-add-section pb-3'>
				<SearchBar
					click={addNewCourseClick}
					filterList={(e) => filterList(e)}
				></SearchBar>
			</div>
			<div className='card-section'>
				{filtererdList.map((x) => {
					const authors = authorList
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
