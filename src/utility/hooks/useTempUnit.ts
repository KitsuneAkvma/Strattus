import { useSelector } from 'react-redux';
import { ISessionSettings } from '../../Redux/Slices/SessionSlice/types';
import { IWeatherData } from '../../Redux/Slices/WeatherSlice/types';
import { selectSessionSettings } from '../../Redux/selectors';

type TTempType = 'current' | 'feelsLike' | 'min' | 'max' | 'avg';
export const useTempUnits = (type: TTempType, weather: IWeatherData) => {
  const userSettings: ISessionSettings = useSelector(selectSessionSettings);
  if (!weather) {
    return '...';
  }
  const { current, forecast } = weather;

  if (!forecast || !current) return '--';
  switch (type) {
    case 'current':
      return userSettings.tempUnit === 'C'
        ? `${current.temp_c}°C`
        : `${current.temp_f}°F`;
      break;
    case 'feelsLike':
      return userSettings.tempUnit === 'C'
        ? `${current.feelslike_c}°C`
        : `${current.feelslike_f}°F`;
      break;
    case 'min':
      return userSettings.tempUnit === 'C'
        ? `${forecast.forecastday[0].day.mintemp_c}°C`
        : `${forecast.forecastday[0].day.mintemp_f}°F`;
      break;
    case 'max':
      return userSettings.tempUnit === 'C'
        ? `${forecast.forecastday[0].day.maxtemp_c}°C`
        : `${forecast.forecastday[0].day.maxtemp_f}°F`;
      break;
    case 'avg':
      return userSettings.tempUnit === 'C'
        ? `${forecast.forecastday[0].day.avgtemp_c}°C`
        : `${forecast.forecastday[0].day.avgtemp_f}°F`;

    default:
      return '--';
  }
};
