import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { SessionReducer } from './Slices/SessionSlice/SessionSlice';
import persistStore from 'redux-persist/es/persistStore';
import { WeatherReducer } from './Slices/WeatherSlice/WeatherSlice';
import { GlobalReducer } from './Slices/GlobalSlice/GlobalSlice';

const rootReducer = combineReducers({
  session: SessionReducer,
  weather: WeatherReducer,
  global: GlobalReducer,
});
const rootPersistConfig = { key: 'root', storage: storage };
const Store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default Store;
export const persistor = persistStore(Store);
export type TRootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
