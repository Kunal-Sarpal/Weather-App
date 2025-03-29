# Weather App 🌦️

The Weather App is a sleek and intuitive web application built with React, Redux, and Tailwind CSS that allows users to fetch real-time weather information for different cities. Designed for efficiency, the app enhances the user experience with features like search history tracking, error handling, and responsive design.

It utilizes localStorage with a queue data structure to store and manage the last 5 searched cities, ensuring quick access to recent queries. The app also leverages React Toastify for smooth, interactive notifications, keeping users informed of search updates and errors.

Whether you’re checking today’s weather or reviewing past searches, the Weather App offers a seamless and user-friendly experienc

## Features 🚀
- Fetches real-time weather data
- Displays temperature, humidity, and weather conditions
- Stores recent searches (max 5) in `localStorage`
- Responsive UI using **Tailwind CSS**
- Error handling for invalid city names
- Date and Time display using `moment.js`

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

The app will run on `http://localhost:3000` by default.

---

## 🏗️ Project Structure
```
/weather-app
│── /src
│   ├── /components
│   │   ├── Card.jsx
│   │   ├── DateAndTime.jsx
│   │   ├── LeftCard.jsx
│   │   ├── RightCard.jsx
│   │   ├── ErrorMsg.jsx
│   ├── /store
│   │   ├── actions/getData.jsx
│   │   ├── reducers/weatherReducer.jsx
│   ├── /pages
│   │   ├── Home.jsx
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md

```
## 🌐 API Used
The app fetches weather data from the **OpenWeatherMap API**.

> **Note:** To use this app, get a free API key from [OpenWeatherMap](https://openweathermap.org/) and add it to your environment variables.

```sh
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

---



## 🛠️ Tech Stack
- **React** (Frontend UI)
- **Redux** (State Management)
- **Tailwind CSS** (Styling)
- **Moment.js** (Date & Time Formatting)
- **OpenWeatherMap API** (Weather Data)

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing
Feel free to fork the repo, create a new branch, and submit a pull request! 🙌

---

## 📞 Contact
For any queries, reach out at [your-email@example.com](mailto:sarpalkunal7@gmail.com).
