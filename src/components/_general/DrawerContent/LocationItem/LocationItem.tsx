import { IWeatherData } from '../../../../Redux/Slices/WeatherSlice/types';
import { useTempUnits } from '../../../../utility/hooks/useTempUnit';
import { Typography, Box } from '@mui/material';
import { StyledLocationDrawerItem } from './LocationItem.styled';

export const LocationItem = (props: IWeatherData) => {
  const weatherData = props;
  const { location, current } = weatherData;
  const currentTemp = useTempUnits('current', weatherData);
  return (
    <StyledLocationDrawerItem>
      <Typography variant="subtitle1" className="location__item__name">
        {location.name}
      </Typography>
      <Box className="location__item__info">
        <img
          src={current.condition.icon}
          alt="weather icon"
          className="location__item__info__icon"
        />
        <Typography variant="subtitle1" className="location__item__info__temp">
          {currentTemp}
        </Typography>
      </Box>
    </StyledLocationDrawerItem>
  );
};
