/* eslint-disable camelcase */
import { useMemo } from 'react'
import { QuestionType } from 'questions'
import { apiSlice } from '@/features/api/api-slice'
import { useAppDispatch } from '@/hooks/use-app-dispatch'

import * as S from './styles'

type QuestionProps = {
  disabled: boolean
} & Pick<QuestionType, 'correct_answer' | 'question' | 'incorrect_answers' | 'selected' | 'id'>

export const Question = ({
  disabled,
  question,
  correct_answer,
  incorrect_answers,
  selected,
  id,
}: QuestionProps) => {
  const dispatch = useAppDispatch()

  const shuffledOptions = useMemo(() => {
    return [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
  }, [correct_answer, incorrect_answers])

  const updateQuestion = (value: string) => {
    dispatch(apiSlice.util.updateQueryData('getQuestions', undefined, draft => {
      const question = draft.find(question => question.id === id)

      if (question) {
        question.selected = value
      }
    }))
  }

  return (
    <S.QuestionWrapper>
      <S.Title dangerouslySetInnerHTML={{ __html: question }} />

      <S.Options>
        {shuffledOptions.map((option, index) => (
          <S.Option
            key={index}
            isSelected={selected === option}
            isCorrect={option === correct_answer}
            disabled={disabled}
            onClick={() => updateQuestion(option)}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </S.Options>
    </S.QuestionWrapper>
  )
}
