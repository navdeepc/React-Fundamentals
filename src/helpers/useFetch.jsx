import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hostURL } from '../constants';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const request = {
		get: async (url, token) => {
			try {
				let options = {};
				if (token) {
					options.headers = {
						Authorization: token,
					};
				}
				const response = await fetch(`${hostURL}${url}`, options);
				if (response.status === 401) {
					navigate('/login');
				}
				if (!response.ok) {
					throw response.status;
				}
				const data = await response.json();
				setData(data);
				return data;
			} catch (e) {
				setError(e);
				throw e;
			}
		},
		post: async (url, body, token) => {
			try {
				let options = {
					method: 'POST',
					body: JSON.stringify(body),
					headers: {
						'Content-Type': 'application/json',
					},
				};
				if (token) {
					options.headers.Authorization = token;
				}
				const response = await fetch(`${hostURL}${url}`, options);
				if (response.status === 401) {
					navigate('/login');
				}
				if (!response.ok) {
					throw response.status;
				}
				const data = await response.json();
				setData(data);
				return data;
			} catch (e) {
				setError(e);
				throw e;
			}
		},
		delete: async (url, body, token) => {
			try {
				let options = {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				};
				if (token) {
					options.headers.Authorization = token;
				}
				if (body) {
					options.body = body;
				}
				const response = await fetch(`${hostURL}${url}`, options);
				if (response.status === 401) {
					navigate('/login');
				}
				if (!response.ok) {
					throw response.status;
				}
				const data = await response.json();
				setData(data);
				return data;
			} catch (e) {
				setError(e);
				throw e;
			}
		},
	};

	return { request, data, error };
}

export default useFetch;
