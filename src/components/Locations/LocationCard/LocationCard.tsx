/* eslint-disable react-hooks/rules-of-hooks */
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsEditModeOn } from '../../../Redux/Slices/GlobalSlice/GlobalSlice';
import { IWeatherData } from '../../../Redux/Slices/WeatherSlice/types';
import {
  selectGlobalIsEditModeOpen,
  selectWeatherCurrentWeather,
} from '../../../Redux/selectors';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { StyledLocationCard } from './LocationCard.styled';

export const LocationCard = (props: IWeatherData) => {
  const dispatch = useDispatch();
  const isEditModeOpen = useSelector(selectGlobalIsEditModeOpen);
  const { current, location } = props;
  const currentTemp = useTempUnits('current', props);
  const maxTemp = useTempUnits('max', props);
  const minTemp = useTempUnits('min', props);

  useEffect(() => {
    const cleanUp = () => {
      dispatch(updateIsEditModeOn(false));
    };
    return cleanUp;
  }, [dispatch]);

  return (
    <StyledLocationCard>
      <Box className="location__info">
        <Typography variant="h6">{location.name}</Typography>{' '}
        <Typography variant="caption" sx={{ color: '#c3c3c3dd' }}>
          {location.region}{' '}
        </Typography>{' '}
        <Typography variant="caption" sx={{ color: '#c3c3c3dd' }}>
          {location.localtime}
        </Typography>
      </Box>{' '}
      {isEditModeOpen ? (
        <Box className="location__edit">
          <DeleteRoundedIcon />{' '}
        </Box>
      ) : (
        <Box className="location__weather">
          <Typography variant="h5">
            <img
              src={current.condition.icon}
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
