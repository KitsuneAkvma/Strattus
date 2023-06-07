import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SessionReducer } from "./Slices/SessionSlice/SessionSlice";
import persistStore from "redux-persist/es/persistStore";

const sessionPersistConfig = { key: "session", storage };

const Store = configureStore({
  reducer: { session: persistReducer(sessionPersistConfig, SessionReducer) },
});

export default Store;
export const persistor = persistStore(Store);
