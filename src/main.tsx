import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import GlobalStyles from './style/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './resources/theme'
const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
