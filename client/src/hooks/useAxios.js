import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function useAxios(method, path, query) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		


		if (!query.length) {
			
			setLoading(false);
			return;
		}

		if (method === 'GET') {
			axios
				.get(`${BASE_URL}${path}/${query}`)
				.then(res => {
					setData(res?.data);
				})
				.catch(({ response }) => {
					if (response.data === 'User not found') {
						setError(true);
					}
				});
		}

		if(method === 'POST') {
			console.log(query);
			// axios
			// 	.post(`${import.meta.env.VITE_API_BASE_URL}${path}`, {...query})
			// 	.then(res => {
			// 		setData(res?.data);
			// 	})
			// 	.catch(({ response }) => {
			// 		console.log(response);
			// 	});

		}

		setLoading(false);
	}, [path, query]);

	return { loading, data, error };
}

export default useAxios;
