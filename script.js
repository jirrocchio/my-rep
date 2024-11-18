// Fetch and parse the XML file for shoe brands
document.addEventListener('DOMContentLoaded', () => {
    const cellphoneData = [
        { name: 'Apple', model: 'iPhone 15 Pro', units: 500 },
        { name: 'Samsung', model: 'Galaxy S23 Ultra', units: 700 },
        { name: 'Xiaomi', model: 'Redmi Note 12', units: 1200 },
        { name: 'Google', model: 'Pixel 8', units: 300 }
    ];

    const brandList = document.getElementById('brand-list');
    
    cellphoneData.forEach(phone => {
        const brandItem = document.createElement('div');
        brandItem.classList.add('brand-item');
        
        brandItem.innerHTML = `
            <h3>${phone.name}</h3>
            <p>Model: ${phone.model}</p>
            <p>Units Available: ${phone.units}</p>
        `;
        
        brandList.appendChild(brandItem);
    });
});

// Function to display the shoe brands and their stock data
function displayBrandsAndStock(brands) {
    const container = document.getElementById('brand-list');
    brands.forEach(brand => {
        const brandElement = document.createElement('div');
        brandElement.classList.add('brand-item');
        brandElement.innerHTML = `
            <h3>${brand.name} - ${brand.model}</h3>
            <p>Units Available: ${brand.unitsAvailable}</p>
        `;
        container.appendChild(brandElement);
    });
}

// OpenWeather API - Fetch weather data
const apiKey = '671e55e5f8e629eb1f17e4921bfc8e50';  // Replace with your OpenWeather API key
const city = 'Guimba, Nueva Ecija';  // You can change this to any city
const units = 'metric';  // 'metric' for Celsius, 'imperial' for Fahrenheit

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

// Fetch and display weather data
fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const cityName = data.name;
        const country = data.sys.country;

        // Display weather info
        displayWeatherInfo(cityName, country, weatherDescription, temperature);
    })
    .catch(error => console.error("Error fetching weather data:", error));

// Function to display the weather data
function displayWeatherInfo(cityName, country, description, temp) {
    const weatherContainer = document.getElementById('weather-info');
    weatherContainer.innerHTML = `
        <h3>Weather in ${cityName}, ${country}</h3>
        <p>${description}</p>
        <p><strong>${temp}°C</strong></p>
    `;
}
