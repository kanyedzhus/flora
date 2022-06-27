const API = "http://localhost:5000";
export const fetchFromAPI = async (endpoint, options) => {
	// setting defaults for method and body. if a method is passed in the options obj, that will override the default here
	const { method, body } = { method: "POST", body: null, ...options };

	const response = await fetch(`${API}/${endpoint}`, {
		method,
		// if there is a body, then stringify it, then spread out the contents of the object
		...(body && { body: JSON.stringify(body) }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(options);
	return response.json();
};
