import styled, { css } from 'styled-components'
import blueBlob from '@/assets/blue-blob.svg'
import yellowBlob from '@/assets/yellow-blob.svg'

export const HomeWrapper = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url(${blueBlob}), url(${yellowBlob});
  background-repeat: no-repeat;
  background-position: -55% 134%, 200% -105%;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${`${theme.fontSize.md32 / 16}em`};
    line-height: ${`${37 / theme.fontSize.md32}em`};
    color: ${theme.colors.blue};
  `}
`
