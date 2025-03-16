import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsApi"; // Import the cryptoNewsApi

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, // Add the cryptoApi reducer
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer, // Add the cryptoNewsApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware) // Add the cryptoApi middleware
      .concat(cryptoNewsApi.middleware), // Add the cryptoNewsApi middleware
});

export default store;
