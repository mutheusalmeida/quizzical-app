import { Outlet } from 'react-router-dom'
import { ReactComponent as BlueBlob } from '@/assets/blue-blob.svg'
import { ReactComponent as YellowBlob } from '@/assets/yellow-blob.svg'

import * as S from './styles'

export const Layout = () => {
  return (
    <S.LayoutWrapper>
      <S.Container>
        <YellowBlob />

        <BlueBlob />

        <Outlet />
      </S.Container>
    </S.LayoutWrapper>
  )
}
