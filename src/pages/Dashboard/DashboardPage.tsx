import { useSelector } from "react-redux";
import {
  selectSessionGeoLocation,
  selectWeatherCurrentWeather,
} from "../../Redux/selectors";

import { IWeatherCurrent } from "../../utility/hooks/useGetWeather";
import { StyledDashboard } from "./DashboardPage.styled";
import { Typography } from "@mui/material";
import { IGeoLocationData } from "../../utility/hooks/useGetGeoLocation";

export const DashboardPage = () => {
  const geoLocation: IGeoLocationData = useSelector(selectSessionGeoLocation);
  const city = geoLocation?.city?.name || "London";
  const currentWeather: IWeatherCurrent = useSelector(
    selectWeatherCurrentWeather
  );

  return (
    <StyledDashboard>
      <main className="dashboard__current">
        <div
          className="dashboard__current__condition"
          aria-label="Current conditions"
        >
          <Typography variant="h3" component="p">
            {currentWeather.temp_c}°C
          </Typography>
          <Typography variant="h4" component="p">
            {currentWeather.condition.text}
          </Typography>
        </div>
        <img
          className="dashboard__current__image"
          src={currentWeather.condition.icon}
        />
      </main>
      <Typography variant="h4" component="p">
        {city}
      </Typography>{" "}
      <Typography variant="h5" component="p">
        {currentWeather.temp_c}°C/{currentWeather.temp_f}°F Feels like{" "}
        {currentWeather.feelslike_c}°C/{currentWeather.feelslike_f}°F
      </Typography>
    </StyledDashboard>
  );
};
