import { useSelector } from 'react-redux'
import {
    selectSessionSettings,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
} from '../../Redux/selectors'
import {
  IWeatherCurrent,
  IWeatherForecast,
} from '../../Redux/Slices/WeatherSlice/types'
import { ISessionSettings } from '../../Redux/Slices/SessionSlice/types'

export const useTempUnits = (
  type: 'current' | 'feelsLike' | 'min' | 'max' | 'avg'
) => {
  const forecast: IWeatherForecast[] = useSelector(selectWeatherForecast)
  const currentWeather: IWeatherCurrent = useSelector(
    selectWeatherCurrentWeather
  )
  const userSettings: ISessionSettings = useSelector(selectSessionSettings)
  if (!forecast || !currentWeather) return '--'
  switch (type) {
    case 'current':
      return userSettings.tempUnit === 'C'
        ? `${currentWeather.temp_c}°C`
        : `${currentWeather.temp_f}°F`
      break
    case 'feelsLike':
      return userSettings.tempUnit === 'C'
        ? `${currentWeather.feelslike_c}°C`
        : `${currentWeather.feelslike_f}°F`
      break
    case 'min':
      return userSettings.tempUnit === 'C'
        ? `${forecast[0].day.mintemp_c}°C`
        : `${forecast[0].day.mintemp_f}°F`
      break
    case 'max':
      return userSettings.tempUnit === 'C'
        ? `${forecast[0].day.maxtemp_c}°C`
        : `${forecast[0].day.maxtemp_f}°F`
      break
    case 'avg':
      return userSettings.tempUnit === 'C'
        ? `${forecast[0].day.avgtemp_c}°C`
        : `${forecast[0].day.avgtemp_f}°F`

    default:
      return '--'
  }
}
