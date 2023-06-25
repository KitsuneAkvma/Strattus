import React from 'react';
import { StyledDrawerContent } from './DrawerContent.styled';
import PlaceIcon from '@mui/icons-material/Place';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
export const DrawerContent = () => {
  return (
    <StyledDrawerContent>
      <span className="section-name">
        {' '}
        <StarIcon className="section-name__icon" />
        <Typography variant="h5" className="section-name__text">
          Favorite
        </Typography>
      </span>
      <ul className="fav-localizations">
        <li className="fav-localization__item">
          <span className="fav-localization__item__name">
            <PlaceIcon className="fav-localization__item__name__icon" />
            <p className="fav-localization__item__name__text"></p>
          </span>
        </li>
      </ul>
      <div className="separator" />
      <span className="section-name">
        {' '}
        <AddLocationAltIcon className="section-name__icon" />
        <Typography variant="h5" className="section-name__text">
          Saved
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
      <div className="separator" />
    </StyledDrawerContent>
  );
};
