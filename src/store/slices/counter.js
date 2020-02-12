import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1
    },
    decrement: (state, action) => {
      state.value = state.value - 1
    }
  }
})

export const { actions } = counterSlice
