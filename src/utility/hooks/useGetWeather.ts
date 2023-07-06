import axios, { AxiosResponse } from 'axios';
import { IWeatherData } from '../../Redux/Slices/WeatherSlice/types';

const API_KEY = process.env.WEATHER_API_KEY;
const API_URL = API_KEY
  ? `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`
  : null;
const API_SEARCH_URL = API_KEY
  ? `http://api.weatherapi.com/v1/search.json?key=${API_KEY}`
  : null;

type TSearchResult = IWeatherData[];

export const useGetWeather = async (
  location: string
): Promise<IWeatherData> => {
  const fetchUrl = `${API_URL}&q=${location}&days=3&aqi=yes&alerts=yes`;

  try {
    const res: AxiosResponse<IWeatherData> = await axios.get(fetchUrl);
    return res.data;
  } catch (err) {
    const message = String((err as Error).message);
    throw new Error(message);
  }
};
export const useSearchLocations = async (
  query: string
): Promise<TSearchResult> => {
  const fetchUrl = `${API_SEARCH_URL}&q=${query}`;

  try {
    const res: AxiosResponse<TSearchResult> = await axios.get(fetchUrl);

    return res.data;
  } catch (err) {
    const message = String((err as Error).message);
    throw new Error(message);
  }
};
