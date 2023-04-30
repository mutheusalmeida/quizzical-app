import styled, { css } from 'styled-components'

type ButtonType = {
  size: '3x' | '2x' | '1x'
}

export const Button = styled.button<ButtonType>`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.blue200};
    color: ${theme.colors.gray};
  `}

  ${({ theme, size }) => size === '3x' && css`
    font-size: ${`${theme.fontSize.sm16 / 16}em`};
    font-weight: 500;
    line-height: ${`${52 / theme.fontSize.sm16}em`};
    height: ${`${52 / theme.fontSize.sm16}em`};
    max-width: ${`${193 / theme.fontSize.sm16}em`};
    border-radius: ${`${15 / theme.fontSize.sm16}em`};
  `}

  ${({ theme, size }) => (size === '2x' || size === '1x') && css`
    font-size: ${`${theme.fontSize.xxs10 / 16}em`};
    font-weight: 600;
    border-radius: ${`${10 / theme.fontSize.xxs10}em`};
  `}

  ${({ theme, size }) => size === '2x' && css`
    line-height: ${`${35 / theme.fontSize.xxs10}em`};
    height: ${`${35 / theme.fontSize.xxs10}em`};
    max-width: ${`${120 / theme.fontSize.xxs10}em`};
  `}

  ${({ theme, size }) => size === '1x' && css`
    line-height: ${`${30 / theme.fontSize.xxs10}em`};
    height: ${`${30 / theme.fontSize.xxs10}em`};
    max-width: ${`${104 / theme.fontSize.xxs10}em`};
  `}

  &:active {
    scale: 0.98;
  }

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`
