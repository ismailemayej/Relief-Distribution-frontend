import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import { persistReducer, persistStore } from "redux-persist";
import baseApi from "./Api/baseApi";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedauthReducer = persistReducer(persistConfig, AuthSlice);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedauthReducer,
  },
  middleware: (getDefultMiddlewares) =>
    getDefultMiddlewares().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
