const inputSection = document.querySelector(".inputSection");
const cityInput = document.querySelector(".cityInput");
const weatherInfo = document.querySelector(".weatherInfo");
const apiKey = "d10f4a53ffcab79d63b8850d0cba9103";

inputSection.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    console.log(response);

    if (!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();

}

function displayWeatherInfo(data){
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
    weatherInfo.textContent = "";
    weatherInfo.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    weatherInfo.appendChild(cityDisplay);
    weatherInfo.appendChild(tempDisplay);
    weatherInfo.appendChild(humidityDisplay);
    weatherInfo.appendChild(descDisplay);
    weatherInfo.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "⁉";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    weatherInfo.textContent = "";
    weatherInfo.style.display = "flex";
    weatherInfo.appendChild(errorDisplay);
}