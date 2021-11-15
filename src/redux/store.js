import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/slices'

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
})
export default store
