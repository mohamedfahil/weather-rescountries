# weather-rescountries

This application fetches country data and displays it alongside weather information for each country's capital city. It leverages APIs to provide real-time data and offers a dynamic user interface for easy interaction.

## Features:

- **Fetching Country Data**: Utilizes the [REST Countries API](https://restcountries.com/v3.1/all) to retrieve details about various countries including their names, capitals, regions, populations, and flags.
  
- **Displaying Country Information**: Generates cards dynamically for each country, showcasing key details and providing a button to fetch weather information.
  
- **Fetching Weather Data**: Uses the [OpenWeatherMap API](https://api.openweathermap.org) to retrieve weather data based on the capital city of each country.
  
- **Displaying Weather Information**: Presents weather information such as temperature with an appropriate emoji indicating the current conditions (e.g., cold, mild, warm, hot).
  
- **Error Handling**: Provides error messages if there are issues fetching country data or weather information, ensuring a smooth user experience.

## Technologies Used:

- **HTML, CSS, JavaScript (ES6+)**: For building the front-end interface and functionality.
  
- **Fetch API**: To make asynchronous requests to external APIs and handle responses.
  
- **Bootstrap**: Utilized for responsive design and layout of country cards.

## How to Use:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. View country cards with details and click the "Click for weather" button on each card to fetch and display weather information for the respective country's capital.

## Note:
- Ensure an active internet connection to fetch live data from APIs.
- Some features (like displaying weather) may require an API key for proper functionality.
This format is suitable for displaying in VS Code's Markdown preview 