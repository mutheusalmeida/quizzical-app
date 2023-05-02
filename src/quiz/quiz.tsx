import { Question } from '@/question'
import { useState } from 'react'
import { useGetQuestionsQuery } from '@/features/api/api-slice'

import * as S from './styles'

export const Quiz = () => {
  const [checked, setChecked] = useState(false)
  const { data, isSuccess, isLoading, isError, error, isUninitialized, refetch } = useGetQuestionsQuery()
  let content

  console.log(data)

  if (isLoading || isUninitialized) {
    content = <>Loading...</>
  } else if (isSuccess) {
    const renderedQuestions = data.map(question => (
      <Question
        key={question.id}
        id={question.id}
        disabled={checked}
        question={question.question}
        correct_answer={question.correct_answer}
        incorrect_answers={question.incorrect_answers}
        selected={question.selected}
      />
    ))

    content = (
      <>
        <S.QuestionsWrapper>
          {renderedQuestions}
        </S.QuestionsWrapper>

        {checked
          ? (
            <S.ResultWrapper>
              <S.Result>You scored 3/5 correct answers</S.Result>

              <S.PlayAgainButton
                size='1x'
                onClick={() => {
                  refetch()
                  setChecked(false)
                }}
              >
                Play again
              </S.PlayAgainButton>
            </S.ResultWrapper>
            )
          : (
            <S.CheckButton
              size='2x'
              onClick={() => setChecked(true)}
            >
              Check answers
            </S.CheckButton>
            )}
      </>
    )
  } else if (isError) {
    content = <>{error.toString()}</>
  }

  return (
    <S.QuizWrapper>
      {content}
    </S.QuizWrapper>
  )
}
