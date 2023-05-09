import { Question } from '@/question'
import { useState } from 'react'
import { useGetQuestionsQuery } from '@/features/api/api-slice'

import * as S from './styles'

export const Quiz = () => {
  const [checked, setChecked] = useState(false)
  const { data, isFetching, isSuccess, isLoading, isError, error, isUninitialized, refetch } = useGetQuestionsQuery()
  let content

  const isAllAnswered = data?.every(question => question.selected)
  const scored = data?.filter(question => question.selected === question.correct_answer).length

  if (isFetching || isLoading || isUninitialized) {
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
              <S.Result>You scored {scored}/{data.length} correct answers</S.Result>

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
              disabled={!isAllAnswered}
              onClick={() => {
                if (isAllAnswered) {
                  setChecked(true)
                }
              }}
            >
              Check answers
            </S.CheckButton>
            )}
      </>
    )
  } else if (isError) {
    if ('status' in error) {
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      content = (
        <>
          <p>An error has accured:</p>

          <p>{errMsg}</p>
        </>
      )
    } else {
      content = <p>{error.message}</p>
    }
  }

  return (
    <S.QuizWrapper>
      {content}
    </S.QuizWrapper>
  )
}
