import { ThemeProvider } from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks";
import { toggleTheme } from "./redux/slices/theme/themeSlice";
import { GlobalStyle } from "./styled-components/global-styles/GlobalStyles";
import { Text } from "./styled-components/text";


function App() {
  const theme = useAppSelector(select => select.theme)
  const dispatch = useAppDispatch()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Text>Hello World</Text>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </ThemeProvider>
  )
}

export default App
