import { StyledSettingsPage } from './SettingsPage.styled';
import {
  Box,
  Button,
  FormControl,
  IconButton,
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
import { colors } from '../../utility/Themes/variables';

const selectStyles = {
  minWidth: 80,
  background: '#fffffff0',
  borderRadius: 2,
};

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

  const handleGoBack = () => {
    navigation(-1);
  };
  const navigation = useNavigate();
  return (
    <StyledSettingsPage>
      <Typography
        variant="h4"
        className="title"
        sx={{ color: '#e0e7fd', fontWeight: 700 }}
      >
        User Settings
      </Typography>
      <IconButton onClick={handleGoBack} className="go-back">
        <KeyboardBackspaceRoundedIcon
          className="go-back__icon"
          fontSize="large"
          sx={{ color: colors.primary }}
        />
      </IconButton>
      <ul className="settings-list">
        <Box className="settings-list__item">
          <Typography variant="body1">Preferred temperature unit: </Typography>
          <FormControl variant="filled" sx={selectStyles}>
            {' '}
            <Select
              labelId="temperature-unit-select"
              value={tempUnit}
              variant="filled"
              label="Temp. Unit"
              onChange={handleTempUnitUpdate}
            >
              <MenuItem value={'C'}>°C</MenuItem>{' '}
              <MenuItem value={'F'}>°F</MenuItem>{' '}
            </Select>{' '}
          </FormControl>
        </Box>{' '}
        <Box className="settings-list__item">
          <Typography variant="body1">Preferred speed unit: </Typography>{' '}
          <FormControl variant="filled" sx={selectStyles}>
            <Select
              labelId="speed-unit-select"
              value={speedUnit}
              variant="filled"
              label="Speed Unit"
              onChange={handleSpeedUnitUpdate}
            >
              <MenuItem value={'km/h'}>km/h</MenuItem>{' '}
              <MenuItem value={'mph'}>mph</MenuItem>{' '}
            </Select>
          </FormControl>
        </Box>{' '}
        <Box className="settings-list__item">
          <Typography variant="body1">Menage your locations </Typography>
          <Link to="/locations">
            <Button variant="contained" sx={{ background: '#a1b6ff' }}>
              Menage
            </Button>
          </Link>
        </Box>
      </ul>
    </StyledSettingsPage>
  );
};
