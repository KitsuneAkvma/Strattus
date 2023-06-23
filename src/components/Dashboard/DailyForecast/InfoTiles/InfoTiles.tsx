import { Typography } from '@mui/material';
import { StyledInfoTiles } from './InfoTiles.styled';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

export const InfoTiles = () => {
  return (
    <StyledInfoTiles>
      <div className="infoTile">
        <WbSunnyIcon className="infoTile__icon infoTile__icon--uv" />
        <Typography className="infoTile__header">UV index</Typography>
        <Typography className="infoTile__value">23</Typography>
      </div>
      <div className="infoTile">
        <WaterDropIcon className="infoTile__icon infoTile__icon--humidity" />
        <Typography className="infoTile__header">Humidity</Typography>
        <Typography className="infoTile__value">60%</Typography>
      </div>
      <div className="infoTile">
        <AirIcon className="infoTile__icon infoTile__icon--wind" />
        <Typography className="infoTile__header">Wind</Typography>
        <Typography className="infoTile__value">
          10 <span className="infoTile__value--windSpeed">km/h</span>
        </Typography>
      </div>
      <div className="infoTile infoTile--sunPos">
        <div className="infoTile__type infoTile__sunRise">
          <Typography className="infoTile__type__header">Sunrise</Typography>
          <Typography className="infoTile__type__value">06:32</Typography>
        </div>{' '}
        <div className="infoTile__type infoTile__sunSet">
          <Typography className="infoTile__type__header">Sunset</Typography>
          <Typography className="infoTile__type__value">21:22</Typography>
        </div>{' '}
        <WbTwilightIcon className="infoTile__icon infoTile__icon--sunPos" />
      </div>
    </StyledInfoTiles>
  );
};
