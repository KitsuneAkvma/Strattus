import { Box, ListItemButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { updateIsSideBarOpen } from '../../../../Redux/Slices/GlobalSlice/GlobalSlice';
import { updateSelectedLocation } from '../../../../Redux/Slices/WeatherSlice/WeatherSlice';
import { IWeatherData } from '../../../../Redux/Slices/WeatherSlice/types';
import { selectSessionSavedLocationsUrls } from '../../../../Redux/selectors';
import { useAppDispatch } from '../../../../utility/hooks/hooks';
import { useTempUnits } from '../../../../utility/hooks/useTempUnit';
import { StyledLocationDrawerItem } from './LocationItem.styled';

interface ILocationItemProps extends IWeatherData {
  index: number;
}

export const LocationItem = (props: ILocationItemProps) => {
  const weatherData = props;
  const { location, current, index } = weatherData;
  const currentTemp = useTempUnits('current', weatherData);
  const savedLocations = useSelector(selectSessionSavedLocationsUrls);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const clickedLocation = savedLocations[index];
    dispatch(updateSelectedLocation(clickedLocation));
    dispatch(updateIsSideBarOpen(false));
  };

  return (
    <StyledLocationDrawerItem>
      <ListItemButton
        sx={{ borderRadius: '20px' }}
        className="location__item"
        onClick={() => handleClick()}
      >
        {' '}
        <Typography variant="subtitle1" className="location__item__name">
          {location.name}
        </Typography>
        <Box className="location__item__info">
          <img
            src={current.condition.icon}
            alt="weather icon"
            className="location__item__info__icon"
          />
          <Typography
            variant="subtitle1"
            className="location__item__info__temp"
          >
            {currentTemp}
          </Typography>
        </Box>
      </ListItemButton>
    </StyledLocationDrawerItem>
  );
};
