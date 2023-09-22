import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../reducers/HomeReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import AlbumPageReducer from "../reducers/AlbumPageReducer";
import ArtistPageReducer from "../reducers/ArtistPageReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  home: HomeReducer,
  albumPage: AlbumPageReducer,
  artistPage: ArtistPageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
