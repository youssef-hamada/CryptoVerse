import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoAPI";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, // Add the reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware), // Add the middleware
});

export default store;
