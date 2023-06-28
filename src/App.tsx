import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateCurrentWeather } from './Redux/Slices/WeatherSlice/operations'
import {
  selectGlobalIsSideBarOpen,
  selectSessionGeoLocation,
} from './Redux/selectors'
import { updateGeoLocation } from './Redux/Slices/SessionSlice/operations'
import { LazyRouter } from './utility/lazyComponents'
import { CircularProgress, Drawer } from '@mui/material'
import { updateIsSideBarOpen } from './Redux/Slices/GlobalSlice/GlobalSlice'


const App: React.FC = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>()
  const isDrawerOpen = useSelector(selectGlobalIsSideBarOpen)

  const geoLocation = useSelector(selectSessionGeoLocation)
  const city = geoLocation?.city || 'London'

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

  const handleDrawerClose = () => {
    dispatch(updateIsSideBarOpen(false))
  }

  return (
    <React.Suspense fallback={<CircularProgress />}>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        serwus
      </Drawer>
      <LazyRouter />
    </React.Suspense>
  )
}

export default App
