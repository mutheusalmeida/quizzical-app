import { Question } from '@/question'
import { useState } from 'react'
import { useGetQuestionsQuery } from '@/features/api/api-slice'

import * as S from './styles'

export const Quiz = () => {
  const [checked, setChecked] = useState(false)
  const { data, isSuccess, isLoading, isError, error, isUninitialized } = useGetQuestionsQuery()
  let content

  console.log(data)

  if (isLoading || isUninitialized) {
    content = <>Loading...</>
  } else if (isSuccess) {
    const renderedQuestions = data.map((question, index) => (
      <Question
        key={index}
        disabled={checked}
        question={question.question}
        correct_answer={question.correct_answer}
        incorrect_answers={question.incorrect_answers}
      />
    ))

    content = (
      <>
        <S.QuestionsWrapper>
          {renderedQuestions}
        </S.QuestionsWrapper>

        <S.CheckButton
          size='2x'
          onClick={() => setChecked(true)}
        >
          Check answers
        </S.CheckButton>
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
