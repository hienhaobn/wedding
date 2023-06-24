import { KEY_STORE } from 'constants/index'
import { SettingContext } from 'contexts/SettingProvider'
import { useCallback, useContext, useMemo } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'

const useTheme = () => {
  const { resolvedTheme, setTheme } = useContext(SettingContext)
  const theme = useContext(StyledThemeContext)
  // need context theme
  const handleSwitchTheme = useCallback(
    (themeValue: 'dark' | 'light') => {
      try {
        setTheme(themeValue)
        localStorage.setItem(KEY_STORE.RESOLVED_THEME, resolvedTheme)
      } catch (error) {
        // ignore set localStorage error for per theme
      }
    },
    [setTheme],
  )
  return useMemo(
    () => ({ isDark: resolvedTheme === 'dark', theme, setTheme: handleSwitchTheme }),
    [theme, resolvedTheme, handleSwitchTheme],
  )
}

export default useTheme()
