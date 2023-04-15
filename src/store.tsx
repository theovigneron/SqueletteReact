import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { squeletteApi } from './api'

export const store = configureStore({
  reducer: {
    [squeletteApi.reducerPath]: squeletteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(squeletteApi.middleware),
})

setupListeners(store.dispatch)