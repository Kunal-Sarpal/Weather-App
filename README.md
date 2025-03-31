# Weather App ☂️

This is a weather application built with **React, Redux, and Tailwind CSS** that fetches and displays weather information for different cities. The app saves recent searches using `localStorage` and a **queue data structure** to maintain the last 5 searches. It also includes error handling for invalid inputs and API failures.

## Features 🚀
- **Real-time weather data** from OpenWeatherMap API
- Displays **temperature, humidity, and weather conditions**
- Saves recent searches (max **5**) using `localStorage`
- **Queue-based search history management**
- **Responsive UI** using Tailwind CSS
- **Error handling** for invalid city names or API failures
- **Date and Time display** using `moment.js`
- **Toast notifications** using `react-toastify`

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

## 🏢 Project Structure
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

---

## 🌐 API Usage
This app fetches weather data from the **OpenWeatherMap API**.

> **Important:** You need an API key from [OpenWeatherMap](https://openweathermap.org/) to use this application.

### Steps to Get an API Key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Get a free API key from the dashboard
3. Add the API key to your `.env` file:
```sh
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### Rate Limits
The free OpenWeatherMap API has rate limits:
- **60 requests per minute** (free plan)
- Higher limits available for **paid plans**

---

## 🛠️ Tech Stack
- **React** - Frontend UI
- **Redux** - State management
- **Tailwind CSS** - Styling
- **Moment.js** - Date & time formatting
- **React Toastify** - Notifications
- **OpenWeatherMap API** - Weather data

---

## 🗃️ License
This project is open-source and available under the **MIT License**.

---

## 👍 Contributing
Want to improve this project? Feel free to **fork**, **create a branch**, and **submit a pull request**! 🚀

---

## 📱 Contact
For any queries, reach out at (mailto:sarpalkunal7@gmail.com).

