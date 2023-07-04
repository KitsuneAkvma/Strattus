import { StyledDrawerContent } from './DrawerContent.styled';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Typography } from '@mui/material';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import { Link } from 'react-router-dom';

export const DrawerContent = () => {
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
          <span className="favorites__item__name">
            <PlaceIcon className="favorites__item__name__icon" />
            <p className="favorites__item__name__text"></p>
          </span>
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
            <li className="saved-localization__item">
              <span className="saved-localization__item__name">
                <PlaceIcon className="saved-localization__item__name__icon" />
                <p className="saved-localization__item__name__text"></p>
              </span>
            </li>
          </ul>
          <Link to="/settings/locations">Menage Locations</Link>
        </li>{' '}
        <div className="separator" />
      </ul>
    </StyledDrawerContent>
  );
};
