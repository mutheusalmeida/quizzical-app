import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <S.HomeWrapper>
      <S.Title>Quizzical</S.Title>

      <S.Desc>Test your knowledge with a quiz</S.Desc>

      <S.StartButton
        size='3x'
        onClick={() => navigate('quiz')}
      >
        Start quiz
      </S.StartButton>
    </S.HomeWrapper>
  )
}
