/* eslint-disable camelcase */
import { useMemo, useState } from 'react'
import { QuestionType } from 'questions'

import * as S from './styles'

type QuestionProps = {
  disabled: boolean
} & Pick<QuestionType, 'correct_answer' | 'question' | 'incorrect_answers'>

export const Question = ({
  disabled,
  question,
  correct_answer,
  incorrect_answers,
}: QuestionProps) => {
  const [selected, setSelecteed] = useState('')
  const shuffledOptions = useMemo(() => {
    return [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
  }, [correct_answer, incorrect_answers])

  return (
    <S.QuestionWrapper>
      <S.Title>{question}</S.Title>

      <S.Options>
        {shuffledOptions.map((option, index) => (
          <S.Option
            key={index}
            isSelected={selected === option}
            isCorrect={option === correct_answer}
            disabled={disabled}
            onClick={() => setSelecteed(option)}
          >
            {option}
          </S.Option>
        ))}
      </S.Options>
    </S.QuestionWrapper>
  )
}
