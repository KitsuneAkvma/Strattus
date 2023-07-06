import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { IGeoLocationData } from '../../../Redux/Slices/SessionSlice/types';
import { IWeatherData } from '../../../Redux/Slices/WeatherSlice/types';
import {
  selectSessionGeoLocation,
  selectWeatherCurrentWeather,
} from '../../../Redux/selectors';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { updateIsSideBarOpen } from '../../../Redux/Slices/GlobalSlice/GlobalSlice';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { HourlyForecast } from '../HourlyForecast/HourlyForecast';
import { AlertsCard } from './AlertsCard/AlertsCard';
import { StyledDashboardHero } from './DashboardHero.styled';

export const DashboardHero = () => {
  const dispatch = useDispatch();
  const geoLocation: IGeoLocationData = useSelector(selectSessionGeoLocation);
  const city = geoLocation?.city || 'London';
  const currentWeather: IWeatherData = useSelector(selectWeatherCurrentWeather);

  const handleDrawerOpen = () => dispatch(updateIsSideBarOpen(true));
  return (
    <StyledDashboardHero>
      {' '}
      <IconButton
        className="hero__button"
        aria-label="open menu"
        size="large"
        onClick={handleDrawerOpen}
      >
        <MenuIcon className="hero__button__icon" fontSize="inherit" />
      </IconButton>
      <div className="hero__current">
        <div
          className="hero__current__condition"
          aria-label="Current conditions"
        >
          <Typography variant="h2" component="p" sx={{ fontWeight: 700 }}>
            {useTempUnits('current')}
          </Typography>
          <Typography variant="h6" component="p">
            {currentWeather.current.condition.text}
          </Typography>
        </div>
        <img
          className="hero__current__image"
          src={currentWeather.current.condition.icon}
        />
      </div>
      <div className="hero__location">
        <span className="hero__location__name">
          {' '}
          <Typography
            variant="h6"
            component="p"
            className="hero__location__name__text"
          >
            {city}
          </Typography>
          <LocationOnIcon className="hero__location__name__icon" />
        </span>

        <Typography variant="body2" component="p">
          {useTempUnits('min')}/{useTempUnits('max')} Feels like{' '}
          {useTempUnits('feelsLike')}
        </Typography>
      </div>
      <AlertsCard /> <HourlyForecast />
    </StyledDashboardHero>
  );
};
