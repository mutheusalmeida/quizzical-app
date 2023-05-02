import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/api/api-slice'
import questionsReducer from './features/questions/questionsSlice'

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
export type AppDispatch = typeof store.dispatch
