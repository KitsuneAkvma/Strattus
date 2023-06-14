import axios, { AxiosResponse } from "axios";

export interface IWeatherData {
  location: IWeatherLocation;
  current: IWeatherCurrent;
}
export interface IWeatherLocation {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}
export interface IWeatherCurrent {
  cloud: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

const API_KEY = process.env.WEATHER_API_KEY || null;
const API_URL = API_KEY
  ? `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`
  : null;

export const useGetWeather = async (
  location: string
): Promise<IWeatherData> => {
  try {
    const res: AxiosResponse<IWeatherData> = await axios.get(
      `${API_URL}&q=${location}`
    );
    return res.data;
  } catch (err) {
    const message = String((err as Error).message);
    throw new Error(message);
  }
};
