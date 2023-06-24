import { StyledDashboard } from './DashboardPage.styled';
import { DashboardHero } from '../../components/Dashboard/Hero/DashboardHero';
import { DailyForecast } from '../../components/Dashboard/DailyForecast/DailyForecast';
import { InfoTiles } from '../../components/Dashboard/InfoTiles/InfoTiles';
import { ExtraInfo } from '../../components/Dashboard/ExtraInfo/ExtraInfo';

export const DashboardPage = () => {
  return (
    <StyledDashboard>
      <DashboardHero />
      <DailyForecast />
      <InfoTiles />
      <ExtraInfo />
    </StyledDashboard>
  );
};
