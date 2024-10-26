Here’s the updated README with your name and a “made with love” note:

---

# Weather App

## Overview
The Weather App is a JavaScript-based web application that provides users with real-time weather information for cities worldwide. It connects to the OpenWeatherMap API to display current weather conditions such as temperature, humidity, and wind speed, as well as a 5-day forecast.

🌐 **Live Demo**: [Weather App](https://aditya-mnnit.github.io/Weather_App_/)

## Features
- **Search by City**: Users can enter a city name to get instant weather updates.
- **Current Weather**: Displays up-to-date temperature, humidity, wind speed, and general weather conditions.
- **5-Day Forecast**: Provides a weather outlook for the next 5 days.
- **Responsive Design**: Optimized for both desktop and mobile.
- **User-Friendly Interface**: A clean, intuitive design for quick and easy weather checking.

## Screenshots
[Add screenshots of the application to showcase its interface]

---

## API Integration
The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data. You will need an API key to access this data, which should be added in `script.js`.

### Example API Call
Here’s a sample of how the API call is constructed:
```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
```

---

## Project Structure
```plaintext
📁 Weather_App_
├── 📁 assets            # Contains images, icons, and additional resources
├── 📄 index.html        # Main HTML layout for the app
├── 📄 style.css         # Styling for the app
├── 📄 script.js         # Contains JavaScript logic, including API calls
└── README.md            # Project documentation
```

---

## Getting Started

### Prerequisites
- An **API Key** from [OpenWeatherMap](https://openweathermap.org/api)

### Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/aditya-mnnit/Weather_App_.git
   cd Weather_App_
   ```

2. **Add API Key**
   - Register at [OpenWeatherMap](https://openweathermap.org/) to obtain an API key.
   - Add your API key in `script.js` where the API call is made:
     ```javascript
     const API_KEY = 'YOUR_API_KEY';
     ```

3. **Run the Application**
   - Open `index.html` directly in your browser, or use a local development server for live updates.

---

## Usage
1. **Enter a City**: Type the name of a city into the search bar to get the current weather.
2. **View Weather Information**: The app will display the current temperature, weather description, humidity, and wind speed.
3. **Check the 5-Day Forecast**: Review future weather conditions in an easy-to-read format.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m "Added feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License.

---

Made with ❤️ by Aditya Singh Yadav. Enjoy exploring the weather around the world with the Weather App! ☀️🌧️🌦
