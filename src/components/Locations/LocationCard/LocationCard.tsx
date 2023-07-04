/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import { StyledLocationCard } from './LocationCard.styled';
import { Typography, Box } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {
  selectGlobalIsEditModeOpen,
  selectWeatherCurrentLocation,
  selectWeatherCurrentWeather,
} from '../../../Redux/selectors';
import {
  IWeatherCurrent,
  IWeatherLocation,
} from '../../../Redux/Slices/WeatherSlice/types';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { useEffect } from 'react';
import { updateIsEditModeOn } from '../../../Redux/Slices/GlobalSlice/GlobalSlice';
import { useDispatch } from 'react-redux';

export const LocationCard = () => {
  const dispatch = useDispatch();
  const isEditModeOpen = useSelector(selectGlobalIsEditModeOpen);

  const currentWeather: IWeatherCurrent = useSelector(
    selectWeatherCurrentWeather
  );
  const currentLocation: IWeatherLocation = useSelector(
    selectWeatherCurrentLocation
  );
  const currentTemp = useTempUnits('current');
  const maxTemp = useTempUnits('max');
  const minTemp = useTempUnits('min');

  useEffect(() => {
    const cleanUp = () => {
      dispatch(updateIsEditModeOn(false));
    };
    return cleanUp;
  }, [dispatch]);

  return (
    <StyledLocationCard>
      <Box className="location__info">
        <Typography variant="h6">{currentLocation.name}</Typography>{' '}
        <Typography variant="caption" sx={{ color: '#c3c3c3dd' }}>
          {currentLocation.region}{' '}
        </Typography>{' '}
        <Typography variant="caption" sx={{ color: '#c3c3c3dd' }}>
          {currentLocation.localtime}
        </Typography>
      </Box>{' '}
      {isEditModeOpen ? (
        <Box className="location__edit">
          <DeleteRoundedIcon />{' '}
        </Box>
      ) : (
        <Box className="location__weather">
          <Typography variant="h4">
            <img
              src={currentWeather.condition.icon}
              alt="weather icon"
              className="location__weather__img"
            />{' '}
            {currentTemp}
          </Typography>
          <Typography variant="caption" sx={{ color: '#c3c3c3dd' }}>
            {maxTemp} / {minTemp}
          </Typography>
        </Box>
      )}
    </StyledLocationCard>
  );
};
