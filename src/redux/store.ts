import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './slices/theme/themeSlice'
// ...

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch