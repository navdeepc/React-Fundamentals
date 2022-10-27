import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';
import React, { useState } from 'react';

function App() {
	const [addNewCourseSection, toggleClick] = useState(false);
	const [AuthorsList, updateAuthorsList] = useState(mockedAuthorsList);
	const [CoursesList, updateCoursesList] = useState(mockedCoursesList);

	// function toggleCourseSection() {
	// 	return (
	// 		<div className='border border-primary rounded'>
	// 			{
	// 				if(addNewCourseSection){
	// 				<CreateCourse authorList={mockedAuthorsList}></CreateCourse>} else
	// 				{
	// 					<div className='border border-primary rounded'>
	// 						<Courses
	// 							courseList={mockedCoursesList}
	// 							authorList={mockedAuthorsList}
	// 							addNewCourseClick={(addNewCourseSection = true)}
	// 						></Courses>
	// 					</div>
	// 				}
	// 			}
	// 		</div>
	// 	);
	// }

	function setAuthorList(val) {
		updateAuthorsList((oldArray) => [val, ...oldArray]);
	}

	function setCourseList(val) {
		updateCoursesList((oldArray) => [val, ...oldArray]);
	}

	function toggleCourseSection() {
		if (addNewCourseSection) {
			return (
				<CreateCourse
					authorList={[...AuthorsList]}
					courseList={[...CoursesList]}
					setAuthorsList={(e) => setAuthorList(e)}
					addNewCourseClick={() => toggleClick(false)}
					setCourseList={(e) => setCourseList(e)}
				></CreateCourse>
			);
		} else {
			return (
				<Courses
					courseList={[...CoursesList]}
					authorList={AuthorsList}
					addNewCourseClick={() => toggleClick(true)}
				></Courses>
			);
		}
	}

	return (
		<div className='container-fluid'>
			<Header></Header>
			<div className='border border-primary rounded'>
				{toggleCourseSection()}
			</div>
			{/* <Body></Body> */}
		</div>
	);
}

export default App;
