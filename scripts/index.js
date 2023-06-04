import { getWeatherData } from "./api.js"
import { createContent } from "./appContent.js";
import { createHeader } from "./appHeader.js";


export const app = async () => {

  const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Краснодар');
  const header = createHeader(weather.name);
  const content = createContent(weather)
  document.body.append(header, content)

}
app()

