import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { REGISTRATION } from '../../constants';
import useFetch from '../../helpers/useFetch';
import React, { useEffect } from 'react';

function Registration() {
	const navigate = useNavigate();

	let [email, setEmail, setEmailValue] = Input({
		labelText: 'Email',
		id: 'Email',
		placeholder: 'Enter email',
		labelClass: 'd-block pb-1 text-start',
		class: 'd-block border-warning w-100 mb-3',
		name: 'email',
		type: 'email',
	});
	let [pswd, setPassword, setPswdValue] = Input({
		labelText: 'Password',
		id: 'Password',
		placeholder: 'Enter password',
		labelClass: 'd-block pb-1 text-start',
		class: 'd-block border-warning w-100 mb-3',
		name: 'password',
		type: 'password',
	});
	let [name, setName, setNameValue] = Input({
		labelText: 'Name',
		id: 'Name',
		placeholder: 'Enter name',
		labelClass: 'd-block pb-1 text-start',
		class: 'd-block border-warning w-100 mb-3',
		name: 'Name',
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
		// const formData = new FormData(e.target);
		// console.log([...formData.entries()]);
		e.preventDefault();
		const body = {
			name: name,
			email: email,
			password: pswd,
		};
		request
			.post(REGISTRATION, 'POST', body)
			.then((res) => {
				console.log(res);
				navigate('/login');
			})
			.catch((err) => {
				console.log(err);
				alert('Sorry, Sign up failed!');
			});
	};
	return (
		<div className='position-absolute center-element text-center'>
			<h4>Registration</h4>
			<form className='pt-2' onSubmit={handleSubmit}>
				{setName}
				{setEmail}
				{setPassword}
				<Button
					name='Registration'
					class='btn btn-info bg-transparent'
					disabled={!email || pswd.length < 6 || !name}
				></Button>
				<span className='d-block pt-2'>
					If you have an account you can <Link to='/login'>Login</Link>
				</span>
			</form>
		</div>
	);
}

export default Registration;
