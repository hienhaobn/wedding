import { vars } from 'packages/ui'
import { Breakpoints, MediaQueries, ZIndices } from './types'

export interface RootTheme {
  siteWidth: number
  isDark: boolean
  // alert: AlertTheme;
  colors: typeof vars.colors
  // card: CardTheme;
  // nav: NavThemeType;
  // modal: ModalTheme;
  // pancakeToggle: PancakeToggleTheme;
  // radio: RadioTheme;
  // toggle: ToggleTheme;
  // tooltip: TooltipTheme;
  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: typeof vars.space
  shadows: typeof vars.shadows
  radii: typeof vars.radii
  zIndices: ZIndices
}
export { darkColors, lightColors } from './colors'
export { default as dark } from './dark'
export { default as light } from './light'
export * from './types'
