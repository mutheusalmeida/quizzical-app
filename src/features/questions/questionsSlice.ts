import { client } from '@/api/client'
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
} from '@reduxjs/toolkit'
import { QuestionType } from 'questions'

type initialStateType= {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | undefined
}

const questionsAdapter = createEntityAdapter()

const initialState = questionsAdapter.getInitialState<initialStateType>({
  status: 'idle',
  error: undefined,
})

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
  const response = await client.get<QuestionType[]>('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')

  return response?.data
})

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded'

        if (action.payload) {
          questionsAdapter.upsertMany(state, action.payload)
        }
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed'

        if (action.payload) {
          state.error = action.error.message
        }
      })
  },
})

export default questionsSlice.reducer

export const {
  selectAll: selectAllQuestions,
} = questionsAdapter.getSelectors<{ questions: EntityState<QuestionType[]>}>((state) => state.questions)
