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
    z-index: -1;
  }

  > svg:nth-child(1) {
    transform: translate(444px, -196px);
    top: 0;
    right: 50%;
  }

  > svg:nth-child(2) {
    transform: translate(-114px, 104px);
    bottom: 0;
    right: 50%;
  }
`
