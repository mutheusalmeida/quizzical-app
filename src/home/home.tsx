import { Button } from '@/style'

import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeWrapper>
      <S.Container>
        <S.Title>Quizzical</S.Title>

        <S.Desc>Test your knowledge with a quiz</S.Desc>

        <S.ButtonWrapper>
          <Button>Start quiz</Button>
        </S.ButtonWrapper>
      </S.Container>
    </S.HomeWrapper>
  )
}
