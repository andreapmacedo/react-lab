import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/default"
import { GlobalStyle } from "./styles.ts/global"
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './contexts/DataContext';
import { Router } from './Router'

export function App() {
  return (
    <DataProvider>
      <ThemeProvider theme={defaultTheme} >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </DataProvider>
  )
}
