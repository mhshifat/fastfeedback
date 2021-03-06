const fetcher = async (url, token) => {
	const res = await fetch(url, {
		method: "GET",
		headers: new Headers({
			"Coontent-Type": "application/json",
			token,
		}),
		credentials: "same-origin",
	});
	return res.json();
};

export default fetcher;
