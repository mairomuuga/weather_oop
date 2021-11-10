class Weather {
	constructor(city) {
		this.key = '1948d3c988bdc7ab86efad6356810ddc3';
		this.city = city;
	}

	async getWeather() {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
		const responseData = await response.json();
		return responseData;
	}

	changeCity(city) {
		this.city = city;
		document.getElementById('city-name').value = "";
		console.log("click")
	}
}