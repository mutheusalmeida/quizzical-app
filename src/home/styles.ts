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
  background-position: -25vw 76vh, 65vw -33vh;
`

export const Container = styled.div`
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

export const ButtonWrapper = styled.div`
  margin-top: 1.8125em;
  display: flex;
  justify-content: center;
  width: 100%;
`
