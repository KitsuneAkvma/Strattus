import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectWeatherCurrentWeather } from '../../Redux/selectors';
import { IWeatherData } from '../../Redux/Slices/WeatherSlice/types';
import { day, night } from './Themes.styled';

export const TimeThemeProvider = ({ children }: any) => {
  const currentWeather: IWeatherData = useSelector(selectWeatherCurrentWeather);
  return (
    <ThemeProvider theme={currentWeather?.current?.is_day ? day : night}>
      {children}
    </ThemeProvider>
  );
};
