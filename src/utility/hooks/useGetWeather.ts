import axios, { AxiosResponse } from 'axios'
import { IWeatherData } from '../../Redux/Slices/WeatherSlice/types'

const API_KEY = process.env.WEATHER_API_KEY || null
const API_URL = API_KEY
  ? `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`
  : null

export const useGetWeather = async (
  location: string
): Promise<IWeatherData> => {
  try {
    const res: AxiosResponse<IWeatherData> = await axios.get(
      `${API_URL}&q=${location}&days=7&aqi=yes&alerts=yes`
    )
    return res.data
  } catch (err) {
    const message = String((err as Error).message)
    throw new Error(message)
  }
}
