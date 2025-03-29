export const getWeatherMessage = (weather) => {
   

    const messages = {
        clear: [
            "It's a bright and sunny day! ☀️ Perfect for a walk outside!",
            "The sun is shining! Don't forget your sunglasses 😎",
            "Clear skies ahead! Enjoy the beautiful weather!",
        ],
        clouds: [
            "It's a bit cloudy today ☁️, but nothing too gloomy!",
            "Clouds are covering the sky, but that’s perfect for a cozy day! ☕",
            "A partly cloudy day! Maybe the sun will peek through soon! 🌤️",
        ],
        "scattered clouds": [
            "The sky is playing peek-a-boo with the clouds! 🌤️",
            "A mix of sun and clouds, the perfect balance! ⛅",
        ],
        "broken clouds": [
            "The sky is partly cloudy with breaks of sunshine! 🌥️",
            "Somewhere between sunny and cloudy! A bit of both worlds! 🌤️",
        ],
        rain: [
            "It's a rainy day! 🌧️ Don't forget your umbrella! ☂️",
            "Raindrops are falling! Time for a warm cup of coffee! ☕",
            "A rainy day is perfect for some good music and relaxation! 🎶",
        ],
        "moderate rain": [
            "The rain is gentle today! Perfect weather for hot tea! 🍵",
            "A peaceful rainy day! Enjoy the soothing sound of raindrops! ☔",
        ],
        "light rain": [
            "Just a drizzle outside! Might need a jacket! 🌦️",
            "Soft rain falling, a peaceful vibe all around! 🌧️",
        ],
        "heavy rain": [
            "It's pouring outside! Stay dry and safe! ⛈️",
            "Rainy storms ahead! Time to stay indoors and relax! 🏠",
        ],
        thunderstorm: [
            "Thunder is rolling! Stay safe indoors! ⛈️",
            "Stormy weather outside! Perfect time to cozy up with a book! 📖",
        ],
        snow: [
            "Snowflakes are dancing in the air! ❄️ Time for some hot cocoa! ☕",
            "It’s snowing! Bundle up and stay warm! 🧣",
        ],
        mist: [
            "A misty morning ahead! Drive safely! 🌫️",
            "A bit of mist in the air! Feels like a fairytale! ✨",
        ],
        fog: [
            "It's quite foggy outside! Watch your step! 🌁",
            "Foggy weather makes everything look mysterious! 🧐",
        ],
        haze: [
            "A hazy day ahead! Stay hydrated and take care! 💦",
            "The air is a bit hazy! Time for some indoor fun! 🎮",
        ],
        smoke: [
            "Air quality is low due to smoke. Consider staying indoors. 😷",
            "A smoky day! Avoid heavy outdoor activities! 🚫",
        ],
        tornado: [
            "Tornado warning! Stay indoors and take precautions! 🌪️",
            "Severe weather alert! Follow safety guidelines! 🚨",
        ],
    };

    const weatherMain = weather.toLowerCase();
   
    let possibleMessages = messages[weatherMain]  || ["Weather is unpredictable today! 🌍"];

    return possibleMessages[Math.floor(Math.random() * possibleMessages.length)];
};
