const getWeather = async (city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': API_KEY='71b10932a3msh0450b1645fe304ap122d94jsnef25136559e7',
			'X-RapidAPI-Host': API_HOST='the-weather-api.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if (result.success){
			cityFound = result.data
			newData()
			console.log('@@@ cityFound => ', cityFound)
		} else {
			alert('City was not found')
		}
	} catch (error) {
		console.error(error);
	}
}
