import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateCurrentWeather } from './Redux/Slices/WeatherSlice/operations'
import { selectSessionGeoLocation } from './Redux/selectors'
import { updateGeoLocation } from './Redux/Slices/SessionSlice/operations'
import { LazyRouter } from './utility/lazyComponents'
import { CircularProgress } from '@mui/material'

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>()

  const geoLocation = useSelector(selectSessionGeoLocation)
  const city = geoLocation?.city?.name || 'London'

  const fetchGeoLocation = useCallback(() => {
    dispatch(updateGeoLocation())
  }, [dispatch])
  const fetchWeather = useCallback(
    (city: string) => {
      dispatch(updateCurrentWeather(city))
    },
    [dispatch]
  )
  useEffect(() => {
    fetchGeoLocation()
    fetchWeather(city)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  return (
    <React.Suspense fallback={<CircularProgress />}>
      <LazyRouter />
    </React.Suspense>
  )
}

export default App
