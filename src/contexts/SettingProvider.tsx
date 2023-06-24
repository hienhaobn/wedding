import { createContext, useState } from 'react'

interface ISettingContext {
  resolvedTheme: 'dark' | 'light'
  setTheme: (themeValue: 'dark' | 'light') => void
}

interface ISettingProvider {
  children: React.ReactNode
}

export const SettingContext = createContext<ISettingContext>({} as ISettingContext)

const SettingProvider = (props: ISettingProvider) => {
  const [resolvedTheme, setTheme] = useState<'dark' | 'light'>('light')
  const value = {
    resolvedTheme,
    setTheme,
  }

  return <SettingContext.Provider value={value}>{props.children}</SettingContext.Provider>
}

export default SettingProvider
