import { Button } from '@/style'
import styled from 'styled-components'

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  align-items: center;
  padding: 2.5em 1em 1.5em;
  width: 80vw;
  max-width: 34.375em;
`

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const ResultWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.25em;
`

export const Result = styled.div`
  font-weight: 700;
  font-size: 12.8px;
  line-height: 15px;
  color: #293264;
`

export const PlayAgainButton = styled(Button)``

export const CheckButton = styled(Button)``
