# Strattus - Weather Web App

<img src="public/svg/logo.svg" alt="app-icon" width="100" height="100">

Strattus is a weather web application designed to provide users with comprehensive weather information. The application utilizes the [Weather API](https://www.weatherapi.com) to retrieve weather data, including current weather conditions, location details, forecast, air quality, and alerts. It also uses the `navigator` object to handle geolocation and fetch weather data based on the user's location. User needs to accept it of course that's why it is hosted on Netlify, because I dont have SSL certificate for thissubdomain 😅.
It's _highly_ inspired by samsung's weather app.

## Key Features

- **Current Weather**: Get up-to-date information on the current weather conditions, including temperature, humidity, wind speed, UV index, and more.
- **Temperature and Speed Units**: Users can customize their preferences for temperature units (Celsius and Fahrenheit) and speed units (km/h and mph).
- **Forecast**: Access the hourly forecast for the current day and a 3-day forecast ahead to plan your activities accordingly.
- **Air Quality**: Stay informed about the air quality index, pollution levels, and driving/jogging conditions for a healthier outdoor experience.
- **Location Search**: Search for specific locations and save them for easy access. The saved locations can be managed (added, edited, or deleted) in the dedicated menu. (WIP)
- **Favorites**: Mark a location as a favorite, and it will be displayed in the drawer on the left side of the screen for quick reference.
- **Dashboard**: View detailed information for saved locations, including current weather, temperature variations, and additional data.
- **Appearance**: The app's appearance adapts to the time of day, providing a visually pleasing experience.
- **Mobile and Desktop Support**: In the future, the app will be developed using React Native for mobile devices and Electron for desktop applications.

## Technologies Used

- Typescript
- React
- React Redux
- Styled-components
- Material-UI
- SWC
- Vite
- Lodash.debounce
- Prettier
- ESLint

## Website and Hosting

Strattus is hosted on a custom domain ([http://strattus.mateusz-martin.online](http://strattus.mateusz-martin.online)), providing users with easy access to weather information and features.

## License

Strattus is licensed under the MIT License. This means that you are free to use, modify, and distribute the code for both commercial and non-commercial purposes. The MIT License promotes open collaboration and innovation.

For more details, please see the LICENSE file.

## Contributions

We believe in the power of open source and welcome contributions from the community to enhance Strattus further. Your contributions, whether in the form of code improvements, bug fixes, or new features, are valuable and appreciated. Together, let's make weather management simpler and more accessible for everyone.

If you would like to contribute to Strattus, please refer to the CONTRIBUTING.md file for guidelines and instructions.

Thank you for your interest in Strattus. If you have any questions or would like to explore more about the project, please feel free to reach out.

(remember to add `./.env` file !)

## Privacy Policy

Your privacy is important to us. When you visit our Strattus web app, we want you to feel secure and confident that your personal information is protected. Here's what you need to know:

- We do not collect or store any personal data or personally identifiable information (PII) about you.
- Any data you enter or interact with within the Strattus web app stays within your own browser and is not transmitted to external servers.
- We do not track or monitor your activities outside or inside Strattus web app.
- We do not share your data with any third parties.
- We do not use cookies or similar tracking technologies.

If you have any questions or concerns about our privacy practices, please feel free to reach out. We value your privacy and strive to ensure a secure browsing experience.
