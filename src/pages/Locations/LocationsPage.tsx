import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Box, IconButton, Typography } from '@mui/material';
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { StyledLocationsPage } from './LocationsPage.styled';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useDispatch } from 'react-redux';
import { LocationCard } from '../../components/Locations/LocationCard/LocationCard';
import { colors, lightTextColors } from '../../utility/Themes/variables';
import { updateIsEditModeOn } from '../../Redux/Slices/GlobalSlice/GlobalSlice';
import { useSelector } from 'react-redux';
import { selectGlobalIsEditModeOpen } from '../../Redux/selectors';

export const LocationsPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const isEditModeOpen = useSelector(selectGlobalIsEditModeOpen);

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
            sx={{ color: colors.primaryLight2 }}
            className="locations-list__item__title"
          >
            Favorite Location{' '}
          </Typography>
          <LocationCard />
        </Box>{' '}
        <Box className="locations-list__item">
          <Typography
            variant="body2"
            sx={{ color: colors.primaryLight2 }}
            className="locations-list__item__title"
          >
            Saved Locations{' '}
          </Typography>{' '}
          <ul className="saved-locations-list">
            <li className="saved-locations-list__item">
              {' '}
              <LocationCard />
            </li>
            <li className="saved-locations-list__item">
              {' '}
              <LocationCard />
            </li>
            <li className="saved-locations-list__item">
              {' '}
              <LocationCard />
            </li>
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
