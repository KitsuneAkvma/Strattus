import { StyledDashboard } from './DashboardPage.styled';
import { DashboardHero } from '../../components/Dashboard/Hero/DashboardHero';
import { DailyForecast } from '../../components/Dashboard/DailyForecast/DailyForecast';
import { InfoTiles } from '../../components/Dashboard/InfoTiles/InfoTiles';
import { ExtraInfo } from '../../components/Dashboard/ExtraInfo/ExtraInfo';
import { Box, SwipeableDrawer } from '@mui/material';
import { DrawerContent } from '../../components/_general/DrawerContent/DrawerContent';
import { useSelector } from 'react-redux';
import { selectGlobalIsSideBarOpen } from '../../Redux/selectors';
import { updateIsSideBarOpen } from '../../Redux/Slices/GlobalSlice/GlobalSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const drawerCustomStyles = {
  width: '90vw',
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '0 16px 16px 0 ',

  ' boxShadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8.6px)',
  WebkitBackdropFilter: 'blur(8.6px)',
  border: ' 1px solid rgba(255, 255, 255, 0.3)',
};

export const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return handleDrawerClose;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDrawerOpen = useSelector(selectGlobalIsSideBarOpen);
  const handleDrawerClose = () => {
    dispatch(updateIsSideBarOpen(false));
  };
  const handleDrawerOpen = () => dispatch(updateIsSideBarOpen(true));

  return (
    <StyledDashboard>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{ sx: drawerCustomStyles }}
      >
        <DrawerContent />
      </SwipeableDrawer>
      <DashboardHero />
      <Box className="secondary-info">
        {' '}
        <DailyForecast />
        <InfoTiles />
        <ExtraInfo />
        <Box className="signature">
          Made with 🔥 by{' '}
          <a href="https://github.com/KitsuneAkvma" target="_blank">
            Mateusz Martin
          </a>
        </Box>
      </Box>
    </StyledDashboard>
  );
};
