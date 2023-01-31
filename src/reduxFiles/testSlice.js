import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
          state.value -= 1
        },
    }
})

export const { increment, decrement } = testSlice.actions

export default testSlice.reducer