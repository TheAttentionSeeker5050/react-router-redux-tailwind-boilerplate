import { configureStore } from '@reduxjs/toolkit'

// import reducers
import testReducer from "./reduxFiles/testSlice"

export default configureStore({
  reducer: {
    test: testReducer,
  },
})