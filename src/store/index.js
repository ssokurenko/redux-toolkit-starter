import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { counterSlice } from './slices/counter'

const preloadedState = localStorage.getItem('preloadedState')
  ? JSON.parse(localStorage.getItem('preloadedState'))
  : {}

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
  middleware: [...getDefaultMiddleware()],
  preloadedState
})

store.subscribe(() =>
  localStorage.setItem('preloadedState', JSON.stringify(store.getState()))
)

export default store
