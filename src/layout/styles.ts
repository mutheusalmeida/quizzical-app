import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625em;
  position: relative;

  > svg {
    position: absolute;
    max-width: max-content;
  }

  > svg:nth-child(1) {
    top: -374px;
    right: -316px;
  }

  > svg:nth-child(2) {
    bottom: -308px;
    right: 254px;
  }
`
