import { ThemeProvider } from 'styled-components'
import { day, dusk, morning, night } from './Themes.styled'
import { useSelector } from 'react-redux'
import {
  selectWeatherCurrentLocation,
  selectWeatherForecast,
} from '../../Redux/selectors'
import { IWeatherForecast } from '../../Redux/Slices/WeatherSlice/types'
import { useConverterTo24h } from '../hooks/useConverter'

export const TimeThemeProvider = ({ children }: any) => {
  const location = useSelector(selectWeatherCurrentLocation)
  const forecast: Array<IWeatherForecast> = useSelector(selectWeatherForecast)
  const { sunrise, sunset } = forecast
    ? forecast[0].astro
    : { sunrise: undefined, sunset: undefined }
  const sunrise24h = useConverterTo24h(sunrise)
  const sunset24h = useConverterTo24h(sunset)

  const time = location ? new Date(location?.localtime) : undefined

  const getTimeOfDay = (date: Date | undefined) => {
    if (!date || !forecast || !sunrise24h || !sunset24h) return day

    const hour = date.getHours()
    const sunriseStart = sunrise24h[0]
    const sunriseEnd = sunrise24h[0] + 1
    const sunsetStart = sunset24h[0]
    const sunsetEnd = sunset24h[0] + 1
    console.dir({ sunriseStart, sunriseEnd, sunsetStart, sunsetEnd })
    if (hour >= sunriseStart && hour < sunriseEnd) return morning
    else if (hour >= sunriseEnd && hour < sunriseStart) return day
    else if (hour >= sunsetStart && hour < sunsetEnd) return dusk
    else return night
  }

  return <ThemeProvider theme={getTimeOfDay(time)}>{children}</ThemeProvider>
}
