// Fetching country data from API
async function fetchCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw new Error('Failed to fetch country data');
        }
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        displayError(error);
    }
}

// Displaying countries
function displayCountries(countries) {
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    const title = document.createElement("h1");
    title.textContent = "Countries Weather Update";
    title.className = "text-center";
    container.appendChild(title);

    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    countries.forEach(country => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4";
        row.appendChild(col);

        const card = createCountryCard(country);
        col.appendChild(card);
    });
}

// Creating a card for each country
function createCountryCard(country) {
    const card = document.createElement("div");
    card.className = "card h-100 border-black";

    const img = document.createElement("img");
    img.className = "card-img-top border-black";
    img.src = country.flags.png;
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column align-items-center";
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title fw-bold";
    cardTitle.textContent = country.name.common;
    cardBody.appendChild(cardTitle);

    const capital = createCardParagraph(`Capital: ${country.capital}`);
    cardBody.appendChild(capital);

    const region = createCardParagraph(`Region: ${country.region}`);
    cardBody.appendChild(region);

    const population = createCardParagraph(`Population: ${country.population.toLocaleString()}`);
    cardBody.appendChild(population);

    const countryCode = createCardParagraph(`Country Code: ${country.cca3}`);
    cardBody.appendChild(countryCode);

    const btn = document.createElement("button");
    btn.className = "btn btn-primary mt-auto";
    btn.textContent = "Click for weather";
    btn.addEventListener("click", () => showWeather(country.capital));
    cardBody.appendChild(btn);

    return card;
}

// Helper function to create paragraph elements
function createCardParagraph(text) {
    const p = document.createElement("p");
    p.className = "card-text";
    p.textContent = text;
    return p;
}

// Fetching weather data for a country's capital
async function fetchWeather(city) {
    const apiKey = "ff4489edb69dfaec1eb032e4ed3bbce9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
}

// Displaying weather information
async function showWeather(city) {
    try {
        const weatherData = await fetchWeather(city);
        displayWeather(weatherData);
    } catch (error) {
        displayWeatherError();
    }
}

// Displaying weather information on UI
function displayWeather(weatherData) {
    const temperature = weatherData.main.temp.toFixed(1);
    let emoji = "";
    
    if (temperature < 10) emoji = "🥶";
    else if (temperature < 20) emoji = "🍃";
    else if (temperature < 30) emoji = "🌤️";
    else emoji = "🥵";

    const message = `${temperature}°C ${emoji}`;
    const tempDisplay = document.querySelector("#temp-display");

    if (tempDisplay) {
        tempDisplay.textContent = message;
    } else {
        console.error("Element with id 'temp-display' not found.");
    }
}

// Displaying error message for weather fetch failure
function displayWeatherError() {
    const tempDisplay = document.querySelector("#temp-display");

    if (tempDisplay) {
        tempDisplay.textContent = "Please try again later 🙏";
    } else {
        console.error("Element with id 'temp-display' not found.");
    }
}

// Displaying error message for country data fetch failure
function displayError(error) {
    const container = document.createElement("div");
    container.className = "container vh-100 d-flex justify-content-center align-items-center";
    document.body.appendChild(container);

    const errorMsg = document.createElement("h1");
    errorMsg.textContent = `${error.message} - please try again later!`;
    container.appendChild(errorMsg);
}

// Initial function call to fetch and display countries
fetchCountries();

/************************** End **************************/
