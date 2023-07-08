import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledLocationsPage } from './LocationsPage.styled';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Skeleton from '@mui/material/Skeleton';
import {
  ILocationCardProps,
  LocationCard,
} from '../../components/Locations/LocationCard/LocationCard';
import { colors, lightTextColors } from '../../utility/Themes/variables';
import { updateIsEditModeOn } from '../../Redux/Slices/GlobalSlice/GlobalSlice';
import { useSelector } from 'react-redux';
import {
  selectGlobalIsEditModeOpen,
  selectSessionFavoriteLocation,
  selectSessionSavedLocationsUrls,
  selectWeatherIsLoading,
  selectWeatherSavedLocations,
} from '../../Redux/selectors';
import { useEffect, useCallback } from 'react';
import { useAppDispatch } from '../../utility/hooks/hooks';
import { updateSavedLocations } from '../../Redux/Slices/WeatherSlice/operations';
import { IWeatherData } from '../../Redux/Slices/WeatherSlice/types';

export const LocationsPage = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const isLoading = useSelector(selectWeatherIsLoading);
  const favoriteLocation = useSelector(selectSessionFavoriteLocation);
  const savedLocations = useSelector(selectWeatherSavedLocations);
  const isEditModeOpen = useSelector(selectGlobalIsEditModeOpen);
  const isSavedLocationsExists = savedLocations?.length > 0;
  const savedLocationsUrls = useSelector(selectSessionSavedLocationsUrls);
  const fetchSavedLocations = useCallback(
    (savedLocations: string[]) => {
      dispatch(updateSavedLocations(savedLocations));
    },
    [dispatch]
  );
  useEffect(() => {
    fetchSavedLocations(savedLocationsUrls);
  }, [dispatch, fetchSavedLocations, savedLocationsUrls]);
  const handleOpenEditMode = () => {
    dispatch(updateIsEditModeOn(true));
  };
  const handleCloseEditMode = () => {
    dispatch(updateIsEditModeOn(false));
  };
  const handleAddLocation = () => {
    navigation('/locations/search');
  };
  const handleGoBack = () => {
    navigation('/settings');
  };
  const favProps: ILocationCardProps = {
    ...favoriteLocation,
    index: 999,
    type: 'favorite',
  };
  return (
    <StyledLocationsPage>
      <Typography
        variant="h5"
        className="title"
        sx={{ color: '#e0e7fd', fontWeight: 700 }}
      >
        Your Locations
      </Typography>
      <IconButton
        aria-label="go back"
        onClick={handleGoBack}
        className="button button--go-back"
      >
        <KeyboardBackspaceRoundedIcon
          className="go-back__icon"
          fontSize="large"
          sx={{ color: colors.primary }}
        />
      </IconButton>
      <ul className="locations-list">
        {' '}
        <li className="locations-list__item">
          <Typography
            variant="body2"
            sx={{ color: colors.primaryLight }}
            className="locations-list__item__title"
          >
            Favorite Location
          </Typography>
          {isLoading ? (
            <Skeleton variant="rectangular" className="location-card" />
          ) : (
            <LocationCard {...favProps} />
          )}
        </li>
        <li className="locations-list__item">
          <Typography
            variant="body2"
            sx={{ color: colors.primaryLight }}
            className="locations-list__item__title"
          >
            Saved Locations{' '}
          </Typography>{' '}
          <ul className="saved-locations-list">
            {isLoading ? (
              <>
                {' '}
                <Skeleton variant="rectangular" className="location-card" />
                <Skeleton variant="rectangular" className="location-card" />
                <Skeleton variant="rectangular" className="location-card" />
                <Skeleton variant="rectangular" className="location-card" />
              </>
            ) : isSavedLocationsExists ? (
              savedLocations.map((location: IWeatherData, index: number) => {
                const props: ILocationCardProps = {
                  ...location,
                  index,
                  type: 'saved',
                };
                return (
                  <li className="saved-locations-list__item" key={index}>
                    {' '}
                    <LocationCard {...props} />
                  </li>
                );
              })
            ) : (
              <Typography
                variant="caption"
                className="saved-locations-list--empty"
              >
                No saved locations
              </Typography>
            )}
          </ul>
        </li>
      </ul>{' '}
      {isEditModeOpen ? (
        <Box className="edit-buttons">
          <IconButton
            aria-label="close edit"
            className="button--close-edit"
            onClick={handleCloseEditMode}
          >
            <ClearRoundedIcon
              sx={{ color: lightTextColors.text1 }}
              fontSize="large"
            />
          </IconButton>
        </Box>
      ) : (
        <Box className="edit-buttons">
          <IconButton
            aria-label="add"
            className="button--add"
            onClick={handleAddLocation}
          >
            <AddRoundedIcon
              sx={{ color: lightTextColors.text1 }}
              fontSize="large"
            />
          </IconButton>
          <IconButton
            aria-label="edit"
            className="button--edit"
            onClick={handleOpenEditMode}
          >
            <EditNoteRoundedIcon
              sx={{ color: lightTextColors.text1 }}
              fontSize="large"
            />
          </IconButton>
        </Box>
      )}
    </StyledLocationsPage>
  );
};
