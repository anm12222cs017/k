async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("humidity").innerText = data.main.humidity;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById("weatherInfo").classList.remove("hidden");
        document.getElementById("errorMessage").classList.add("hidden");
    } catch (error) {
        document.getElementById("errorMessage").innerText = error.message;
        document.getElementById("errorMessage").classList.remove("hidden");
        document.getElementById("weatherInfo").classList.add("hidden");
    }
}
