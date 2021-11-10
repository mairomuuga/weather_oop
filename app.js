const ls = new LS();

const weatherLocation = ls.getLocationData();
console.log(weatherLocation)

const weather = new Weather(weatherLocation);
const ui = new UI();

const city = document.getElementById('submit-btn');
const input = document.querySelector('input').value;

console.log(city);

city.addEventListener('click', weather.changeCity());

function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error));
}

document.addEventListener('DOMContentLoaded', getWeather);