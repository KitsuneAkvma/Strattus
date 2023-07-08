import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledLocationsPage } from './LocationsPage.styled';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { LocationCard } from '../../components/Locations/LocationCard/LocationCard';
import { colors, lightTextColors } from '../../utility/Themes/variables';
import { updateIsEditModeOn } from '../../Redux/Slices/GlobalSlice/GlobalSlice';
import { useSelector } from 'react-redux';
import {
  selectGlobalIsEditModeOpen,
  selectSessionFavoriteLocation,
  selectSessionSavedLocationsUrls,
  selectWeatherSavedLocations,
} from '../../Redux/selectors';
import { useEffect, useCallback } from 'react';
import { useAppDispatch } from '../../utility/hooks/hooks';
import { updateSavedLocations } from '../../Redux/Slices/WeatherSlice/operations';
import { IWeatherData } from '../../Redux/Slices/WeatherSlice/types';

export const LocationsPage = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
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
    navigation(-1);
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
        <Box className="locations-list__item">
          <Typography
            variant="body2"
            sx={{ color: colors.primaryLight }}
            className="locations-list__item__title"
          >
            Favorite Location{' '}
          </Typography>
          <LocationCard {...favoriteLocation} />
        </Box>{' '}
        <Box className="locations-list__item">
          <Typography
            variant="body2"
            sx={{ color: colors.primaryLight }}
            className="locations-list__item__title"
          >
            Saved Locations{' '}
          </Typography>{' '}
          <ul className="saved-locations-list">
            {isSavedLocationsExists ? (
              savedLocations.map((location: IWeatherData, index: number) => {
                return (
                  <li className="saved-locations-list__item" key={index}>
                    {' '}
                    <LocationCard {...location} />
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
        </Box>
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
