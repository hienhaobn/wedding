import { createGlobalStyle } from 'styled-components'
import { RootTheme } from 'packages/uikit/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends RootTheme {}
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.75em;
    color: #888;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`
export default GlobalStyle
