import styled, { css } from 'styled-components'

export const Button = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.3s ease;

  ${({ theme }) => css`
    font-size: ${`${theme.fontSize.sm16 / 16}em`};
    background-color: ${theme.colors.blue200};
    line-height: ${`${52 / theme.fontSize.sm16}em`};
    max-width: ${`${193 / theme.fontSize.sm16}em`};
    border-radius: ${`${15 / theme.fontSize.sm16}em`};
    color: ${theme.colors.gray};
  `}

  &:active {
    scale: 0.98;
  }

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`
