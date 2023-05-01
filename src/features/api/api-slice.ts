import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Question } from 'questions'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com' }),
  endpoints: builder => ({
    getQuestions: builder.query<Question[], void>({
      query: () => '/api.php?amount=5&category=9&difficulty=medium&type=multiple',
      transformResponse: (rawResult: { results: Question[] }) => {
        return rawResult.results
      },
    }),
  }),
})

export const { useGetQuestionsQuery } = apiSlice
