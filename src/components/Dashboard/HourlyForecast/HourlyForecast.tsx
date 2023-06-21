import { StyledHourlyForecast } from './HourlyForecast.styled'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import {
  selectSessionSettings,
  selectWeatherForecast,
} from '../../../Redux/selectors'
import {
  IWeatherForecast,
  IWeatherHourlyForecast,
} from '../../../Redux/Slices/WeatherSlice/types'
import { useTempUnits } from '../../../utility/hooks/useTempUnit'
import { ISessionSettings } from '../../../Redux/Slices/SessionSlice/types'

export const HourlyForecast = () => {
  const forecast: IWeatherForecast[] = useSelector(selectWeatherForecast)
  const userSettings: ISessionSettings = useSelector(selectSessionSettings)
  const today = forecast[0].day
  const hourlyToday = forecast[0].hour
  const determineHourlyTemp = (hour: IWeatherHourlyForecast) => {
    return userSettings.tempUnit === 'C' ? `${hour.temp_c}°` : `${hour.temp_f}°`
  }

  return (
    <StyledHourlyForecast>
      <header className="hourly__header">
        <Typography variant="subtitle2" component="h3">
          {today.condition.text} {useTempUnits('min')}-{useTempUnits('max')}{' '}
        </Typography>
      </header>
      <ul className="hourly__forecast">
        {hourlyToday.map((hour, i: number) => {
          const temp = determineHourlyTemp(hour)
          const timeNow = new Date(hour.time).getHours()

          return (
            <li className="hourly__forecast__item" key={i}>
              <div className="hourly__forecast__item__hour">{timeNow}:00</div>
              <img
                src={hour.condition.icon}
                alt="condition icon"
                className="hourly__forecast__item__icon"
              />
              <div className="hourly__forecast__item__temp">{temp}</div>
            </li>
          )
        })}
      </ul>
    </StyledHourlyForecast>
  )
}
