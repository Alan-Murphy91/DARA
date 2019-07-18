export const getData = async () => {
	try {
		const response = await fetch('http://localhost:9988/api/vehicle/');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export const getDataWithID = async (id) => {
	try {
		const response = await fetch(`http://localhost:9988/api/vehicle/${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
