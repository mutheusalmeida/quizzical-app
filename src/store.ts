import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/api/api-slice'
import questionsReducer from './features/questions/questionsSlice'

export default configureStore({
  reducer: {
    questions: questionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
