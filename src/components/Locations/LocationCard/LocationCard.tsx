/* eslint-disable react-hooks/rules-of-hooks */
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Box, Typography, IconButton } from '@mui/material';
import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { updateIsEditModeOn } from '../../../Redux/Slices/GlobalSlice/GlobalSlice';
import { IWeatherData } from '../../../Redux/Slices/WeatherSlice/types';
import { selectGlobalIsEditModeOpen } from '../../../Redux/selectors';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { StyledLocationCard } from './LocationCard.styled';
import { lightTextColors } from '../../../utility/Themes/variables';
import { removeLocation } from '../../../Redux/Slices/SessionSlice/SessionSlice';
import { useAppDispatch } from '../../../utility/hooks/hooks';

export interface ILocationCardProps extends IWeatherData {
  index: number;
  type: 'favorite' | 'saved';
}

export const LocationCard = (props: ILocationCardProps) => {
  const dispatch = useAppDispatch();
  const isEditModeOpen = useSelector(selectGlobalIsEditModeOpen);
  const { current, location } = props;
  const currentTemp = useTempUnits('current', props);
  const maxTemp = useTempUnits('max', props);
  const minTemp = useTempUnits('min', props);
  const shortRegion = location.region.slice(0, location.region.indexOf(','));
  useEffect(() => {
    const cleanUp = () => {
      dispatch(updateIsEditModeOn(false));
    };
    return cleanUp;
  }, [dispatch]);
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const index = target.dataset['index'];
    dispatch(removeLocation(index));
  };
  return (
    <StyledLocationCard>
      <Box className="location__info">
        <Typography variant="h6" sx={{ color: lightTextColors.text1 }}>
          {location.name}
        </Typography>
        <Typography variant="caption" sx={{ color: lightTextColors.text2 }}>
          {shortRegion?`${shortRegion}, ${location.country}`:location.country}
        </Typography>
        <Typography variant="caption" sx={{ color: lightTextColors.text3 }}>
          {location.localtime}
        </Typography>
      </Box>
      {isEditModeOpen && props.type != 'favorite' ? (
        <IconButton
          aria-label="delete"
          className="location__edit"
          onClick={e => handleDelete(e)}
          data-index={props.index}
        >
          <DeleteRoundedIcon className="location__edit__icon" />
        </IconButton>
      ) : (
        <Box className="location__weather">
          <Typography variant="h5" sx={{ color: lightTextColors.text1 }}>
            <img
              src={current.condition.icon}
              alt="weather icon"
              className="location__weather__img"
            />
            {currentTemp}
          </Typography>
          <Typography variant="caption" sx={{ color: lightTextColors.text3 }}>
            {maxTemp} / {minTemp}
          </Typography>
        </Box>
      )}
    </StyledLocationCard>
  );
};
