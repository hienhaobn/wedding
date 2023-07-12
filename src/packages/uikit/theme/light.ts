import { DefaultTheme } from 'styled-components'
import base from './base'
import { lightColors } from './colors'

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  // alert: lightAlert,
  colors: lightColors,
  // card: lightCard,
  // toggle: lightToggle,
  // nav: lightNav,
  // modal: lightModal,
  // pancakeToggle: lightPancakeToggle,
  // radio: lightRadio,
  // tooltip: lightTooltip,
}

export default lightTheme
