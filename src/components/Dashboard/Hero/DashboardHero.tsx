import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { IWeatherData } from '../../../Redux/Slices/WeatherSlice/types';
import { selectWeatherCurrentWeather } from '../../../Redux/selectors';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { updateIsSideBarOpen } from '../../../Redux/Slices/GlobalSlice/GlobalSlice';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { HourlyForecast } from '../HourlyForecast/HourlyForecast';
import { AlertsCard } from './AlertsCard/AlertsCard';
import { StyledDashboardHero } from './DashboardHero.styled';

export const DashboardHero = () => {
  const dispatch = useDispatch();
  const weather: IWeatherData = useSelector(selectWeatherCurrentWeather);
  const { current, location } = weather;
  const city = location.name;

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
          <Typography
            variant="h3"
            component="p"
            sx={{ fontWeight: 700 }}
            className="hero__current__condition__temp"
          >
            {useTempUnits('current', weather)}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            className="hero__current__condition__text"
          >
            {current.condition.text}
          </Typography>
        </div>
        <img className="hero__current__image" src={current.condition.icon} />
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
          {useTempUnits('min', weather)}/{useTempUnits('max', weather)} Feels
          like {useTempUnits('feelsLike', weather)}
        </Typography>
      </div>
      <AlertsCard /> <HourlyForecast />
    </StyledDashboardHero>
  );
};
