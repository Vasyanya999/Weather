const ApiKey = '6aa91a7cba3e77f408d42fc146f11f30'
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${ApiKey}`)
    return await response.json()
  } catch (error) {
    console.log(error.message);
  }
}