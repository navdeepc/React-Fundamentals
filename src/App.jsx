import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import CreateCourse from './components/CreateCourse/CreateCourse';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { useDispatch } from 'react-redux';
import { userLogout } from './store/user/actions';

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [token, setToken] = useState(() => localStorage.getItem('token') || '');

	const [user, setUser] = useState({});

	const setUserDetails = (value) => {
		setUser(value);
	};
	const setTokenVlaue = (value) => {
		setToken(value);
	};

	useEffect(() => {
		let user = localStorage.getItem('userdetails');
		let token = localStorage.getItem('token');
		if (user && token) {
			setUser(JSON.parse(user));
		} else {
			navigateToLogin();
		}
	}, []);

	function navigateToLogin() {
		clearCredentials();
		navigate('/login');
	}

	function clearCredentials() {
		localStorage.clear();
		setToken('');
		setUser({});
		dispatch(
			userLogout({
				token: '',
				name: '',
				email: '',
			})
		);
	}

	return (
		<div className='container-fluid'>
			<Header
				user={user}
				tokenVal={token}
				logout={() => navigateToLogin()}
			></Header>
			<div className='border border-primary rounded position-relative p-3 body-content-min-height'>
				<Routes>
					<Route path='/' element={token ? <Courses /> : <Login />} />
					<Route
						path='login'
						element={
							<Login setUser={setUserDetails} setToken={setTokenVlaue} />
						}
					/>
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
	);
}

export default App;
