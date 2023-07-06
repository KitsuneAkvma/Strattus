import { Typography } from '@mui/material';
import { StyledInfoTiles } from './InfoTiles.styled';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import {
  IWeatherData,
  IWeatherForecast,
} from '../../../Redux/Slices/WeatherSlice/types';
import { useSelector } from 'react-redux';
import {
  selectSessionSettings,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
} from '../../../Redux/selectors';
import { ISessionSettings } from '../../../Redux/Slices/SessionSlice/types';
import { useConverterTo24h } from '../../../utility/hooks/useConverter';

export const InfoTiles = () => {
  const currentWeather: IWeatherData = useSelector(selectWeatherCurrentWeather);
  const forecast: IWeatherForecast[] = useSelector(selectWeatherForecast);
  const userSettings: ISessionSettings = useSelector(selectSessionSettings);

  const humidity: number = currentWeather.current.humidity;
  const windSpeed: number =
    userSettings.speedUnit === 'km/h'
      ? currentWeather.current.wind_kph
      : currentWeather.current.wind_mph;
  const speedUnit: string = userSettings.speedUnit;

  const sunriseTime12h: string = forecast[0].astro.sunrise;
  const sunsetTime12h: string = forecast[0].astro.sunset;
  const sunriseTime24h: [number, number] | undefined =
    useConverterTo24h(sunriseTime12h);
  const sunsetTime24h: [number, number] | undefined =
    useConverterTo24h(sunsetTime12h);

  const declareUvIndex: (index: number) => string = index => {
    if (index <= 2) {
      return 'Low';
    } else if (index > 2 && index <= 5) {
      return 'Moderate';
    } else if (index > 5 && index <= 7) {
      return 'High';
    } else if (index > 7 && index <= 10) {
      return 'Very high';
    } else {
      return 'Extreme';
    }
  };
  const uvIndex: string = declareUvIndex(currentWeather.current.uv);
  return (
    <StyledInfoTiles>
      <div className="infoTile">
        <WbSunnyIcon className="infoTile__icon infoTile__icon--uv" />
        <Typography
          className="infoTile__header"
          variant="subtitle2"
          component="h4"
        >
          UV index
        </Typography>
        <Typography className="infoTile__value" variant="caption" component="p">
          {uvIndex}
        </Typography>
      </div>
      <div className="infoTile">
        <WaterDropIcon className="infoTile__icon infoTile__icon--humidity" />
        <Typography
          className="infoTile__header"
          variant="subtitle2"
          component="h4"
        >
          Humidity
        </Typography>
        <Typography className="infoTile__value" variant="caption" component="p">
          {humidity}%
        </Typography>
      </div>
      <div className="infoTile">
        <AirIcon className="infoTile__icon infoTile__icon--wind" />
        <Typography
          className="infoTile__header"
          variant="subtitle2"
          component="h4"
        >
          Wind
        </Typography>
        <Typography className="infoTile__value" variant="caption" component="p">
          {windSpeed}
          <span className="infoTile__value--windSpeed"> {speedUnit}</span>
        </Typography>
      </div>
      <div className="infoTile infoTile--sunPos">
        <div className="infoTile__type infoTile__sunRise">
          <Typography
            className="infoTile__type__header"
            variant="subtitle2"
            component="h4"
          >
            Sunrise
          </Typography>
          <Typography
            className="infoTile__value"
            variant="caption"
            component="p"
          >
            {sunriseTime24h?.join(':')}
          </Typography>
        </div>{' '}
        <div className="infoTile__type infoTile__sunSet">
          <Typography
            className="infoTile__type__header"
            variant="subtitle2"
            component="h4"
          >
            Sunset
          </Typography>
          <Typography
            className="infoTile__value"
            variant="caption"
            component="p"
          >
            {sunsetTime24h?.join(':')}
          </Typography>
        </div>{' '}
        <WbTwilightIcon className="infoTile__icon infoTile__icon--sunPos" />
      </div>
    </StyledInfoTiles>
  );
};
