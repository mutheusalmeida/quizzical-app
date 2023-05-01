import { Question } from '@/question'
import { useState } from 'react'
import { useGetQuestionsQuery } from '@/features/api/api-slice'

import * as S from './styles'

export const Quiz = () => {
  const [checked, setChecked] = useState(true)
  const { data } = useGetQuestionsQuery()

  console.log(data)

  return (
    <S.QuizWrapper>
      <S.QuestionsWrapper>
        <Question disabled={checked} />

        <Question disabled={checked} />
      </S.QuestionsWrapper>

      <S.CheckButton
        size='2x'
        onClick={() => setChecked(true)}
      >
        Check answers
      </S.CheckButton>
    </S.QuizWrapper>
  )
}
