# Weather App 🌦️

This is a weather application built with **React, Redux, and Tailwind CSS** that fetches and displays weather information for different cities. The app also saves recent searches in `localStorage` and includes error handling.

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
npm start
```

The app will run on `http://localhost:3000` by default.

---

## 🏗️ Project Structure
```
/weather-app
│── /src
│   ├── /components
│   │   ├── Card.js
│   │   ├── DateAndTime.js
│   │   ├── LeftCard.js
│   │   ├── RightCard.js
│   │   ├── ErrorMsg.js
│   ├── /store
│   │   ├── actions/getData.js
│   │   ├── reducers/weatherReducer.js
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
```

---

## 🌐 API Used
The app fetches weather data from the **OpenWeatherMap API**.

> **Note:** To use this app, get a free API key from [OpenWeatherMap](https://openweathermap.org/) and add it to your environment variables.

```sh
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

---

## 🔧 Available Scripts

### Start Development Server
```sh
npm start
```
Runs the app in development mode at `http://localhost:3000/`.

### Build for Production
```sh
npm run build
```
Creates a production-ready build in the `/build` folder.

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
For any queries, reach out at [your-email@example.com](mailto:your-email@example.com).
