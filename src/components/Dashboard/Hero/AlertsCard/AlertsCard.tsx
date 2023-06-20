import { useSelector } from 'react-redux'
import { selectWeatherAlerts } from '../../../../Redux/selectors'
import { StyledAlertsCard } from './AlertsCard.styled'
import { IWeatherAlert } from '../../../../Redux/Slices/WeatherSlice/types'
import WarningIcon from '@mui/icons-material/Warning'
import { Typography } from '@mui/material'

type Talerts = IWeatherAlert[] | null

export const AlertsCard = () => {
  const alerts: Talerts = useSelector(selectWeatherAlerts)
  console.log({ alerts })

  const shortenDescription = (desc: string) => {
    const descLength = desc.length
    const maxLength = 90
    console.log({ descLength })

    const shortDesc =
      descLength <= maxLength ? desc : desc.slice(0, maxLength + 1) + ' ...'

    return shortDesc
  }
  if (alerts)
    return (
      <StyledAlertsCard aria-label="weather alerts card">
        <span className="alerts__title">
          <WarningIcon className="alerts__title__icon" />
          <Typography
            variant="h6"
            component="h3"
            className="alerts__title__text"
            sx={{ fontSize: '1em' }}
          >
            Alerts
          </Typography>
        </span>

        {alerts.map((alert: IWeatherAlert, i: number) => {
          return (
            <li className="alert" key={i}>
              <Typography variant="subtitle2" component="p">
                {' '}
                {shortenDescription(alert.desc)}
              </Typography>
            </li>
          )
        })}
      </StyledAlertsCard>
    )
}
