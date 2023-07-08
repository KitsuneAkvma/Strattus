import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ISessionSettings } from '../../../Redux/Slices/SessionSlice/types';
import {
  IWeatherDayForecast,
  IWeatherForecast,
} from '../../../Redux/Slices/WeatherSlice/types';
import {
  selectSessionSettings,
  selectWeatherCurrentWeather,
} from '../../../Redux/selectors';
import { StyledDailyForecast } from './DailyForecast.styled';

export const DailyForecast = () => {
  const weather = useSelector(selectWeatherCurrentWeather);
  const forecast = weather.forecast.forecastday;
  const userSettings: ISessionSettings = useSelector(selectSessionSettings);
  const weekDayMap: Map<number, string> = new Map([
    [0, 'Monday'],
    [1, 'Tuesday'],
    [2, 'Wednesday'],
    [3, 'Thursday'],
    [4, 'Friday'],
    [5, 'Saturday'],
    [6, 'Sunday'],
  ]);

  return (
    <StyledDailyForecast>
      {forecast.map((day: IWeatherForecast, i: number) => {
        const today: IWeatherDayForecast = day.day;
        const numberOfADay: number = new Date(day.date).getDay();
        const dayOfTheWeek: string =
          i === 0
            ? 'Today'
            : i === 1
            ? 'Tommorow'
            : weekDayMap.get(numberOfADay) || 'unknown';
        const rainChance: number =
          today.daily_chance_of_rain | today.daily_chance_of_snow;
        const icon: string = today.condition.icon;
        const maxTemp: string =
          userSettings.tempUnit === 'C'
            ? `${today.maxtemp_c}°`
            : `${today.maxtemp_f}°`;
        const minTemp: string =
          userSettings.tempUnit === 'C'
            ? `${today.mintemp_c}°`
            : `${today.mintemp_c}°`;
        return (
          <li className="daily__forecast__item" key={i}>
            <Typography
              variant="subtitle2"
              component="p"
              className="daily__forecast__item__day"
            >
              {dayOfTheWeek}
            </Typography>
            <span className="daily__forecast__item__rain">
              <WaterDropIcon className="daily__forecast__item__rain__icon" />
              <Typography
                variant="body1"
                className="daily__forecast__item__rain__chance"
              >
                {rainChance}%
              </Typography>
            </span>

            <span className="daily__forecast__item__condition">
              <img
                src={icon}
                alt="condition icon"
                className="daily__forecast__item__icon"
              />
              <Typography
                variant="caption"
                component="p"
                className="daily__forecast__item__temp__max-min"
              >
                {maxTemp} / {minTemp}
              </Typography>
            </span>
          </li>
        );
      })}
    </StyledDailyForecast>
  );
};
