import { ButtonDefault } from '@/style'
import styled, { css } from 'styled-components'

type OptionType = {
  isSelected: boolean
  isCorrect: boolean
}

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const Title = styled.h2`
  font-family: 'Karla', sans-serif;
  font-weight: 700;

  ${({ theme }) => css`
    font-size: ${`${theme.fontSize.sm16 / 16}rem`};
    line-height: ${`${19 / theme.fontSize.sm16}em`};
    color: ${theme.colors.blue};
  `}
`

export const Options = styled.div`
  display: flex;
  gap: 0.75em;
`

export const Option = styled.button<OptionType>`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, isSelected }) => css`
    font-size: ${`${theme.fontSize.xxs10 / 16}rem`};
    line-height: ${`${20 / theme.fontSize.xxs10}em`};
    height: ${`${20 / theme.fontSize.xxs10}em`};
    min-width: ${`${66 / theme.fontSize.xxs10}em`};
    color: ${theme.colors.blue};
    border-radius: ${`${8 / theme.fontSize.xxs10}em`};
    padding: 0 ${`${8 / theme.fontSize.xxs10}em`};
    border: ${!isSelected ? `1px solid ${theme.colors.blue}` : 'none'};
  `}

  ${({ theme, isSelected, isCorrect }) => css`
    background-color: ${isSelected && isCorrect ? theme.colors.green : isSelected && !isCorrect ? theme.colors.red : isSelected ? theme.colors.blue100 : 'transparent'};
  `}

  &:disabled {
    opacity: ${({ isCorrect }) => isCorrect ? 1 : 0.5};
    cursor: default;
  }

  &:not(:disbled) {
    ${ButtonDefault}
  }

`
