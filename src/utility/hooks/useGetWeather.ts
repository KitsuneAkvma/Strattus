import axios, { AxiosResponse } from 'axios';
import { IWeatherData } from '../../Redux/Slices/WeatherSlice/types';

const API_KEY = process.env.WEATHER_API_KEY;
const API_URL = API_KEY
  ? `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`
  : null;

export const useGetWeather = async (
  location: string
): Promise<IWeatherData> => {
  const fetchUrl = `${API_URL}&q=${location}&days=7&aqi=yes&alerts=yes`;

  try {
    const res: AxiosResponse<IWeatherData> = await axios.get(fetchUrl);
    console.log(res.data);
    return res.data;
  } catch (err) {
    const message = String((err as Error).message);
    throw new Error(message);
  }
};
