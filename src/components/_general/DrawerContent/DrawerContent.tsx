import { StyledDrawerContent } from './DrawerContent.styled';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Button, Typography } from '@mui/material';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSessionFavoriteLocation } from '../../../Redux/selectors';

export const DrawerContent = () => {
  const favoriteLocation = useSelector(selectSessionFavoriteLocation);
  console.log({ favoriteLocation });
  return (
    <StyledDrawerContent>
      <Link to="/settings" className="settings">
        {' '}
        <SettingsRoundedIcon className="setting__icon" />
      </Link>
      <ul className="localizations">
        <li className="localizations__item">
          <span className="localizations__item__section-name">
            {' '}
            <StarRoundedIcon className="localizations__item__section-name__icon" />
            <Typography
              variant="h5"
              className="localizations__item__section-name__text"
            >
              Favorite location
            </Typography>
          </span>
          <Box className="favorites__item">
            {' '}
            <span className="favorites__item__name">
              <PlaceIcon className="favorites__item__name__icon" />
              <p className="favorites__item__name__text">
                {favoriteLocation.name}
              </p>
            </span>{' '}
            <Box className="saved-localizations__item__info">info</Box>
          </Box>
        </li>{' '}
        <div className="separator" />
        <li className="localizations__item">
          {' '}
          <span className="localizations__item__section-name">
            {' '}
            <AddLocationRoundedIcon className="localizations__item__section-name__icon" />
            <Typography
              variant="h5"
              className="localizations__item__section-name__text"
            >
              Saved locations
            </Typography>
          </span>
          <ul className="saved-localizations">
            <li className="saved-localizations__item">
              <span className="saved-localizations__item__name">
                <PlaceIcon className="saved-localizations__item__name__icon" />
                <p className="saved-localizations__item__name__text"></p>
              </span>
              <Box className="saved-localizations__item__info">info</Box>
            </li>{' '}
          </ul>
        </li>{' '}
        <div className="separator" />
      </ul>{' '}
      <Link to="/locations" className="menage-link">
        <Button variant="contained" className="menage-link__button">
          Menage Locations
        </Button>
      </Link>
    </StyledDrawerContent>
  );
};
