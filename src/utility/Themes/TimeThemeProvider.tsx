import { ThemeProvider } from 'styled-components'
import { day, dusk, morning, night } from './Themes.styled'
import { useSelector } from 'react-redux'
import { selectWeatherCurrentLocation } from '../../Redux/selectors'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TimeThemeProvider = ({ children }: any) => {
  const location = useSelector(selectWeatherCurrentLocation)
  const time = location ? new Date(location?.localtime).getHours() : undefined

  const dayPhase = (hour: number | undefined) => {
    if (!hour) return day
    else if (hour >= 5 && 10 > hour) return morning
    else if (hour >= 10 && 18 > hour) return day
    else if (hour >= 17 && 20 > hour) return dusk
    else if (hour >= 20 || 6 > hour) return night
  }

  return <ThemeProvider theme={dayPhase(time)}>{children}</ThemeProvider>
}
