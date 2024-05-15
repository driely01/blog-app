import {useState, useEffect} from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		setTimeout(() => { // just simulating the fetch large data.
			fetch(url)
				.then((res) => {
						if (!res.ok)
								throw Error('could not fetch the data for that resource');
					return res.json();
				})
				.then(data => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch(err => {
					setError(err.message);
					setIsPending(false);
					setData(null);
				});
		}, 100)
	}, [url]);
	return {data, setData, isPending, error};
}

export default useFetch;