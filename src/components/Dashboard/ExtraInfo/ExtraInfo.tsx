import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MasksIcon from '@mui/icons-material/Masks';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectWeatherCurrentWeather } from '../../../Redux/selectors';
import { StyledExtraInfo } from './ExtraInfo.styled';
export const ExtraInfo = () => {
  const currentWeather = useSelector(selectWeatherCurrentWeather);
  const airQualityIndex = currentWeather.air_quality['gb-defra-index'];

  const determineAirQuality: (index: number) => string = index => {
    if (index < 3) {
      return 'Very Good';
    } else if (index === 3) {
      return 'Good';
    } else if (index > 3 && index <= 6) {
      return 'Moderate';
    } else if (index > 6 && index <= 9) {
      return 'Bad';
    } else {
      return 'Very Bad';
    }
  };

  return (
    <StyledExtraInfo>
      <ul className="extra-info">
        <li className="extra-info__item">
          <span className="extra-info__item__name">
            {' '}
            <MasksIcon className="extra-info__item__name__icon" />
            <Typography
              className="extra-info__item__name__text"
              variant="subtitle2"
              component="h5"
            >
              AQI
            </Typography>
          </span>

          <Typography
            className="extra-info__item__value"
            variant="body2"
            component="p"
          >
            {determineAirQuality(airQualityIndex)}
          </Typography>
        </li>
        <li className="extra-info__item">
          <span className="extra-info__item__name">
            {' '}
            <LocalFloristIcon className="extra-info__item__name__icon" />
            <Typography
              className="extra-info__item__name__text"
              variant="subtitle2"
              component="h5"
            >
              Pollen
            </Typography>
          </span>

          <Typography
            className="extra-info__item__value"
            variant="body2"
            component="p"
          >
            Very High
          </Typography>
        </li>
        <li className="extra-info__item">
          <span className="extra-info__item__name">
            {' '}
            <DirectionsCarIcon className="extra-info__item__name__icon" />
            <Typography
              className="extra-info__item__name__text"
              variant="subtitle2"
              component="h5"
            >
              Driving difficulty
            </Typography>
          </span>

          <Typography
            className="extra-info__item__value"
            variant="body2"
            component="p"
          >
            None
          </Typography>
        </li>
        <li className="extra-info__item">
          <span className="extra-info__item__name">
            {' '}
            <DirectionsRunIcon className="extra-info__item__name__icon" />
            <Typography
              className="extra-info__item__name__text"
              variant="subtitle2"
              component="h5"
            >
              Jogging
            </Typography>
          </span>

          <Typography
            className="extra-info__item__value"
            variant="body2"
            component="p"
          >
            Very good
          </Typography>
        </li>
      </ul>
    </StyledExtraInfo>
  );
};
