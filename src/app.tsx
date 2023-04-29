import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
`

export function App () {
  return (
    <Container>
      Hello, world!
    </Container>
  )
}
