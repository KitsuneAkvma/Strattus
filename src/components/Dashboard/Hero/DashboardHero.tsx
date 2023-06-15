import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import {
  IGeoLocationData,
  ISessionSettings,
} from '../../../Redux/Slices/SessionSlice/types'
import {
  IWeatherCurrent,
  IWeatherForecast,
} from '../../../Redux/Slices/WeatherSlice/types'
import {
  selectSessionGeoLocation,
  selectSessionSettings,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
} from '../../../Redux/selectors'

import { StyledDashboardHero } from './DashboardHero.styled'
import { useDispatch } from 'react-redux'
import { updateIsSideBarOpen } from '../../../Redux/Slices/GlobalSlice/GlobalSlice'

export const DashboardHero = () => {
  const dispatch = useDispatch()
  const geoLocation: IGeoLocationData = useSelector(selectSessionGeoLocation)
  const city = geoLocation?.city?.name || 'London'
  const currentWeather: IWeatherCurrent = useSelector(
    selectWeatherCurrentWeather
  )
  const userSettings: ISessionSettings = useSelector(selectSessionSettings)
  const forecast: Array<IWeatherForecast> = useSelector(selectWeatherForecast)
  const determineTempUnit = (
    type: 'current' | 'feelsLike' | 'min' | 'max' | 'avg'
  ) => {
    if (!forecast || !currentWeather) return '--'
    switch (type) {
      case 'current':
        return userSettings.tempUnit === 'C'
          ? `${currentWeather.temp_c}°C`
          : `${currentWeather.temp_f}°F`
        break
      case 'feelsLike':
        return userSettings.tempUnit === 'C'
          ? `${currentWeather.feelslike_c}°`
          : `${currentWeather.feelslike_f}°`
        break
      case 'min':
        return userSettings.tempUnit === 'C'
          ? `${forecast[0].day.mintemp_c}°`
          : `${forecast[0].day.mintemp_f}°`
        break
      case 'max':
        return userSettings.tempUnit === 'C'
          ? `${forecast[0].day.maxtemp_c}°`
          : `${forecast[0].day.maxtemp_f}°`
        break
      case 'avg':
        return userSettings.tempUnit === 'C'
          ? `${forecast[0].day.avgtemp_c}°`
          : `${forecast[0].day.avgtemp_f}°`

      default:
        return '--'
    }
  }
  const handleDrawerOpen = () => dispatch(updateIsSideBarOpen(true))
  return (
    <StyledDashboardHero>
      {' '}
      <IconButton className="hero__button" aria-label="open menu" size="large" onClick={handleDrawerOpen}>
        <MenuIcon className="hero__button__icon" fontSize="inherit" />
      </IconButton>
      <div className="hero__current">
        <div
          className="hero__current__condition"
          aria-label="Current conditions"
        >
          <Typography variant="h2" component="p" sx={{ fontWeight: 700 }}>
            {determineTempUnit('current')}
          </Typography>
          <Typography variant="h5" component="p">
            {currentWeather.condition.text}
          </Typography>
        </div>
        <img
          className="hero__current__image"
          src={currentWeather.condition.icon}
        />
      </div>
      <div className="hero__location">
        <Typography variant="h6" component="p">
          {city}
        </Typography>{' '}
        <Typography variant="body2" component="p">
          {determineTempUnit('min')}/{determineTempUnit('max')} Feels like{' '}
          {determineTempUnit('feelsLike')}
        </Typography>
      </div>
    </StyledDashboardHero>
  )
}
