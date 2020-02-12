import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { counterSlice } from './slices/counter'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
  middleware: [...getDefaultMiddleware()]
})

export default store
