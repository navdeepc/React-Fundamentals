import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const [addNewCourseSection, toggleClick] = useState(false);
	const [AuthorsList, updateAuthorsList] = useState(mockedAuthorsList);
	const [CoursesList, updateCoursesList] = useState(mockedCoursesList);

	function setAuthorList(val) {
		updateAuthorsList((oldArray) => [val, ...oldArray]);
	}

	function setCourseList(val) {
		updateCoursesList((oldArray) => [val, ...oldArray]);
	}

	return (
		<BrowserRouter>
			<div className='container-fluid'>
				<Header></Header>
				<div className='border border-primary rounded position-relative p-3 body-content-min-height'>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='login' element={<Login />} />
						<Route path='registration' element={<Registration />} />
						<Route path='courses' element={<Courses />} />
						<Route path='courses/:courseId' element={<CourseInfo />} />
						<Route path='courses/add' element={<CreateCourse />} />
					</Routes>
				</div>
				{/* <Header></Header>
			<div className='border border-primary rounded'>
				{toggleCourseSection()}
			</div> */}
				{/* <Body></Body> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
