import { Button } from '@/style'
import { ReactComponent as BlueBlob } from '@/assets/blue-blob.svg'
import { ReactComponent as YellowBlob } from '@/assets/yellow-blob.svg'

import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeWrapper>
      <S.Container>
        <YellowBlob />

        <BlueBlob />

        <S.Title>Quizzical</S.Title>

        <S.Desc>Test your knowledge with a quiz</S.Desc>

        <S.ButtonWrapper>
          <Button>Start quiz</Button>
        </S.ButtonWrapper>
      </S.Container>
    </S.HomeWrapper>
  )
}
