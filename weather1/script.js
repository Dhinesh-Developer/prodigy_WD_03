async function getWeather() {
    const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherResult').innerHTML = `
                <p>Weather in ${data.name}:</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = <p>${data.message}</p>;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = <p>Failed to fetch weather data.</p>;
    }
}