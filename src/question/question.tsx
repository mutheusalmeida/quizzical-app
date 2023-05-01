import { useState } from 'react'

import * as S from './styles'

type QuestionProps = {
  disabled: boolean
}

export const Question = ({ disabled }: QuestionProps) => {
  const [selected, setSelecteed] = useState('')

  return (
    <S.QuestionWrapper>
      <S.Title>How would one say goodbye in Spanish?</S.Title>

      <S.Options>
        <S.Option
          isSelected={false}
          isCorrect={selected === 'kjk'}
          disabled={disabled}
          onClick={() => setSelecteed('')}
        >
          Cabbage Patch Kids
        </S.Option>
        <S.Option
          isSelected={selected === ''}
          isCorrect={selected === 'ff'}
          disabled={disabled}
          onClick={() => setSelecteed('')}
        >
          Cabbage Patch Kids
        </S.Option>
      </S.Options>
    </S.QuestionWrapper>
  )
}
