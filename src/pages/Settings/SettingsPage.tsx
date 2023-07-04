import { StyledSettingsPage } from './SettingsPage.styled';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link, useNavigate } from 'react-router-dom';
import { selectSessionSettings } from '../../Redux/selectors';
import { useSelector } from 'react-redux';
import { ISessionSettings } from '../../Redux/Slices/SessionSlice/types';
import { useDispatch } from 'react-redux';
import {
  updateSettingsSpeedUnit,
  updateSettingsTempUnit,
} from '../../Redux/Slices/SessionSlice/SessionSlice';
import { ChangeEvent } from 'react';

export const SettingsPage = () => {
  const dispatch = useDispatch();
  const userSettings: ISessionSettings = useSelector(selectSessionSettings);
  const tempUnit = userSettings.tempUnit;
  const speedUnit = userSettings.speedUnit;
  const handleTempUnitUpdate = (e: SelectChangeEvent): void => {
    const value = e.target.value;
    if (value === tempUnit) return;
    dispatch(updateSettingsTempUnit(value));
  };
  const handleSpeedUnitUpdate = (e: SelectChangeEvent): void => {
    const value: string = e.target.value;
    if (value === tempUnit) return;
    dispatch(updateSettingsSpeedUnit(value));
  };

  const navigation = useNavigate();
  return (
    <StyledSettingsPage>
      <Typography variant="h3" className="page-title">
        User Settings
      </Typography>
      <Link to={'...'} onClick={() => navigation(-1)} className="go-back">
        <KeyboardBackspaceRoundedIcon className="go-back__icon" />
      </Link>
      <ul className="settings-list">
        <Box className="settings-list__item">
          <Typography variant="body1">Preferred temperature unit: </Typography>
          <Select
            labelId="temperature-unit-select"
            value={tempUnit}
            onChange={handleTempUnitUpdate}
          >
            <MenuItem value={'C'}>°C</MenuItem>{' '}
            <MenuItem value={'F'}>°F</MenuItem>{' '}
          </Select>
        </Box>{' '}
        <Box className="settings-list__item">
          <Typography variant="body1">Preferred speed unit: </Typography>
          <Select
            labelId="speed-unit-select"
            value={speedUnit}
            onChange={handleSpeedUnitUpdate}
          >
            <MenuItem value={'km/h'}>km/h</MenuItem>{' '}
            <MenuItem value={'mph'}>mph</MenuItem>{' '}
          </Select>
        </Box>
      </ul>
    </StyledSettingsPage>
  );
};
