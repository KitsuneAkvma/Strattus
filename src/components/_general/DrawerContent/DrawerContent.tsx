import PlaceIcon from '@mui/icons-material/Place';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  Button,
  Typography,
  ListItemButton,
  Tooltip,
} from '@mui/material';
import { StyledDrawerContent } from './DrawerContent.styled';

import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TSavedLocations } from '../../../Redux/Slices/SessionSlice/types';
import { IWeatherData } from '../../../Redux/Slices/WeatherSlice/types';
import {
  selectSessionFavoriteLocation,
  selectWeatherSavedLocations,
} from '../../../Redux/selectors';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { LocationItem } from './LocationItem/LocationItem';
import { updateSelectedLocation } from '../../../Redux/Slices/WeatherSlice/WeatherSlice';
import { useAppDispatch } from '../../../utility/hooks/hooks';
import { updateIsSideBarOpen } from '../../../Redux/Slices/GlobalSlice/GlobalSlice';

export const DrawerContent = () => {
  const dispatch = useAppDispatch();
  const favoriteLocation: IWeatherData = useSelector(
    selectSessionFavoriteLocation
  );
  const savedLocations: TSavedLocations = useSelector(
    selectWeatherSavedLocations
  );
  const doesSavedLocationExist: boolean = savedLocations?.length > 0;
  const { location: favLocation } = favoriteLocation;
  const favTemp = useTempUnits('current', favoriteLocation);

  const handleFavoriteClick = () => {
    const locationLatLon = `${String(favLocation.lat)} ${String(
      favLocation.lon
    )}`;
    dispatch(updateSelectedLocation(locationLatLon));
    dispatch(updateIsSideBarOpen(false));
  };
  return (
    <StyledDrawerContent>
      <Link to="/settings" className="settings">
        <SettingsRoundedIcon className="setting__icon" />
      </Link>
      <ul className="localizations">
        <li className="localizations__item">
          <span className="localizations__item__section-name localizations__item__section-name--favorite ">
            <StarRoundedIcon className="localizations__item__section-name__icon localizations__item__section-name__icon--favorite" />
            <Typography
              variant="h5"
              className="localizations__item__section-name__text"
            >
              Favorite location
            </Typography>
            <Tooltip title="Favorite location is your actual real location. You can find it always in here !">
              <InfoOutlinedIcon className="localizations__item__section-name__info" />
            </Tooltip>
          </span>{' '}
          {favoriteLocation && (
            <Box>
              {' '}
              <ListItemButton
                sx={{ borderRadius: '20px' }}
                className="favorites__item"
                onClick={handleFavoriteClick}
              >
                <span className="favorites__item__name">
                  <PlaceIcon className="favorites__item__name__icon" />
                  <Typography
                    variant="subtitle1"
                    className="favorites__item__name__text"
                  >
                    {favLocation.name}
                  </Typography>
                </span>
                <Box className="saved-localizations__item__info">
                  <img
                    src={favoriteLocation.current.condition.icon}
                    alt="weather icon"
                    className="saved-localizations__item__info__icon"
                  />
                  <Typography
                    variant="subtitle1"
                    className="saved-localizations__item__info__temp"
                  >
                    {favTemp}
                  </Typography>
                </Box>{' '}
              </ListItemButton>
            </Box>
          )}
        </li>
        <div className="separator" />
        <li className="localizations__item">
          <span className="localizations__item__section-name">
            <AddLocationRoundedIcon className="localizations__item__section-name__icon" />
            <Typography
              variant="h5"
              className="localizations__item__section-name__text"
            >
              Saved locations
            </Typography>
          </span>
          {doesSavedLocationExist ? (
            <ul className="saved-localizations">
              {savedLocations.map((item, index) => {
                const props = { ...item, index };
                return <LocationItem {...props} key={index} />;
              })}
            </ul>
          ) : (
            <Typography variant="body2" className="saved-localizations--empty">
              No location saved
            </Typography>
          )}
        </li>
        <div className="separator" />
      </ul>
      <Link to="/locations" className="menage-link">
        <Button variant="contained" className="menage-link__button">
          Menage Locations
        </Button>
      </Link>
    </StyledDrawerContent>
  );
};
