import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeo = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
  const success = async (pos) => {
    const crd = pos.coords;
    const res = await fetch(`
    https://api.opencagedata.com/geocode/v1/json?q=${crd.latitude}+${crd.longitude}&key=6a224fd582e949f48c5481d44b7905d0
    `)
    const result = await res.json();
    const city = result.results[0].components.city
    const weather = await getWeatherData(city)
    resetWeatherContent(city, weather)
  }
  const errorF = (err) => {
    console.log(err.message);
  }
  window.navigator.geolocation.getCurrentPosition(success, errorF, options)

}

