import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { LOGIN } from '../../constants';
import useFetch from '../../helpers/useFetch';
import React, { useEffect } from 'react';

function Login({ setUser, setToken }) {
	const navigate = useNavigate();

	let [email, setEmail, setEmailValue] = Input({
		labelText: 'Email',
		id: 'email123',
		placeholder: 'Enter email',
		labelClass: 'd-block pb-1 text-start',
		class: 'd-block border-warning w-100 mb-3',
		name: 'email',
		type: 'email',
	});
	let [pswd, setPassword, setPswdValue] = Input({
		labelText: 'Password',
		id: 'pswd123',
		placeholder: 'Enter password',
		labelClass: 'd-block pb-1 text-start',
		class: 'd-block border-warning w-100 mb-3',
		name: 'password',
		type: 'password',
	});
	const { request, data, error } = useFetch();

	useEffect(() => {
		let token = localStorage.getItem('token');
		let user = localStorage.getItem('userdetails');
		if (token && user) {
			navigate('/courses');
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const body = {
			email: email,
			password: pswd,
		};
		request
			.post(LOGIN, 'POST', body)
			.then((res) => {
				localStorage.setItem('token', res.result);
				localStorage.setItem('userdetails', JSON.stringify(res.user));
				setUser(res.user);
				setToken(res.result);
				navigate('/courses');
			})
			.catch((err) => {
				console.log(err);
				alert('Login Failed. Please try again!');
			});
	};

	return (
		<div className='position-absolute center-element text-center'>
			<h4>Login</h4>
			<form className='pt-2' onSubmit={handleSubmit}>
				{setEmail}
				{setPassword}
				<Button
					name='Login'
					class='btn btn-info bg-transparent'
					disabled={!email || !pswd}
				></Button>
				<span className='d-block pt-2'>
					If you do not have an account you can{' '}
					<Link to='/registration'>Registration</Link>
				</span>
			</form>
		</div>
	);
}

export default Login;
