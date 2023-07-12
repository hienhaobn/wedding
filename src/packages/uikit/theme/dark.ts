import { DefaultTheme } from 'styled-components'
import base from './base'
import { darkColors } from './colors'

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  // alert: darkAlert,
  colors: darkColors,
  // card: darkCard,
  // toggle: darkToggle,
  // nav: darkNav,
  // modal: darkModal,
  // pancakeToggle: darkPancakeToggle,
  // radio: darkRadio,
  // tooltip: darkTooltip,
}

export default darkTheme
