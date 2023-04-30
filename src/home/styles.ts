import { Button } from '@/style'
import styled, { css } from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625em;
`

export const Title = styled.h1`
  font-family: 'Karla', sans-serif;

  ${({ theme }) => css`
    font-size: ${`${theme.fontSize.md32 / 16}em`};
    line-height: ${`${37 / theme.fontSize.md32}em`};
    color: ${theme.colors.blue};
  `}
`

export const Desc = styled.p`
  ${({ theme }) => css`
    font-size: ${`${theme.fontSize.sm16 / 16}em`};
    line-height: ${`${19 / theme.fontSize.sm16}em`};
    color: ${theme.colors.blue};
    text-align: center;
  `}
`

export const StartButton = styled(Button)`
  margin-top: 1.8125em;
`
