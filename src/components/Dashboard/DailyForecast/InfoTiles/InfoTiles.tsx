import { Typography } from '@mui/material';
import { StyledInfoTiles } from './InfoTiles.styled';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import {
  IWeatherCurrent,
  IWeatherForecast,
  IWeatherLocation,
} from '../../../../Redux/Slices/WeatherSlice/types';
import { useSelector } from 'react-redux';
import {
  selectSessionSettings,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
} from '../../../../Redux/selectors';
import { ISessionSettings } from '../../../../Redux/Slices/SessionSlice/types';

export const InfoTiles = () => {
  const currentWeather: IWeatherCurrent = useSelector(
    selectWeatherCurrentWeather
  );
  const forecast: IWeatherForecast[] = useSelector(selectWeatherForecast);
  const userSettings: ISessionSettings = useSelector(selectSessionSettings);

  const humidity: number = currentWeather.humidity;
  const windSpeed: number =
    userSettings.speedUnit === 'km/h'
      ? currentWeather.wind_kph
      : currentWeather.wind_mph;
  const speedUnit: string = userSettings.speedUnit;

  const sunriseTime: string = forecast[0].astro.sunrise;
  const sunsetTime: string = forecast[0].astro.sunset;

  const declareUvIndex: (index: number) => string = index => {
    if (index <= 2) {
      return 'low';
    } else if (index > 2 && index <= 5) {
      return 'moderate';
    } else if (index > 5 && index <= 7) {
      return 'high';
    } else if (index > 7 && index <= 10) {
      return 'very high';
    } else {
      return 'extreme';
    }
  };
  const uvIndex: string = declareUvIndex(currentWeather.uv);
  return (
    <StyledInfoTiles>
      <div className="infoTile">
        <WbSunnyIcon className="infoTile__icon infoTile__icon--uv" />
        <Typography className="infoTile__header">UV index</Typography>
        <Typography className="infoTile__value">{uvIndex}</Typography>
      </div>
      <div className="infoTile">
        <WaterDropIcon className="infoTile__icon infoTile__icon--humidity" />
        <Typography className="infoTile__header">Humidity</Typography>
        <Typography className="infoTile__value">{humidity}%</Typography>
      </div>
      <div className="infoTile">
        <AirIcon className="infoTile__icon infoTile__icon--wind" />
        <Typography className="infoTile__header">Wind</Typography>
        <Typography className="infoTile__value">
          {windSpeed}
          <span className="infoTile__value--windSpeed"> {speedUnit}</span>
        </Typography>
      </div>
      <div className="infoTile infoTile--sunPos">
        <div className="infoTile__type infoTile__sunRise">
          <Typography className="infoTile__type__header">Sunrise</Typography>
          <Typography className="infoTile__type__value">
            {sunriseTime}
          </Typography>
        </div>{' '}
        <div className="infoTile__type infoTile__sunSet">
          <Typography className="infoTile__type__header">Sunset</Typography>
          <Typography className="infoTile__type__value">
            {sunsetTime}
          </Typography>
        </div>{' '}
        <WbTwilightIcon className="infoTile__icon infoTile__icon--sunPos" />
      </div>
    </StyledInfoTiles>
  );
};
