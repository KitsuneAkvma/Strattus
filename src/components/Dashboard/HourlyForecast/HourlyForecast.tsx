import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ISessionSettings } from '../../../Redux/Slices/SessionSlice/types';
import {
  IWeatherData,
  IWeatherHourlyForecast,
} from '../../../Redux/Slices/WeatherSlice/types';
import {
  selectSessionSettings,
  selectWeatherCurrentWeather,
} from '../../../Redux/selectors';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { StyledHourlyForecast } from './HourlyForecast.styled';

export const HourlyForecast = () => {
  const currentWeather: IWeatherData = useSelector(selectWeatherCurrentWeather);
  const { forecast } = currentWeather;
  const userSettings: ISessionSettings = useSelector(selectSessionSettings);
  const today = forecast.forecastday[0].day;
  const hourlyToday = forecast.forecastday[0].hour;
  const determineHourlyTemp = (hour: IWeatherHourlyForecast) => {
    return userSettings.tempUnit === 'C'
      ? `${hour.temp_c}°`
      : `${hour.temp_f}°`;
  };

  return (
    <StyledHourlyForecast>
      <header className="hourly__header">
        <Typography variant="subtitle2" component="h3">
          {today.condition.text} {useTempUnits('min', currentWeather)}-
          {useTempUnits('max', currentWeather)}{' '}
        </Typography>
      </header>
      <ul className="hourly__forecast">
        {hourlyToday.map((hour, i: number) => {
          const temp = determineHourlyTemp(hour);
          const timeNow = new Date(hour.time).getHours();

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
          );
        })}
      </ul>
    </StyledHourlyForecast>
  );
};
