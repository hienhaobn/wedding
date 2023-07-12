// import 'packages/ui/css/reset.css'

import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Store } from '@reduxjs/toolkit'
import { useContext } from 'react'
import { SettingContext } from './SettingProvider'
import dark from 'packages/uikit/theme/dark'
import light from 'packages/uikit/theme/light'
import { UIKitProvider } from 'packages/uikit/Providers'
import GlobalStyle from 'style/Global'
import ResetCSS from 'packages/uikit/ResetCSS'

// Create a client
const queryClient = new QueryClient()

// const StyledUIKitProvider: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
//   const { resolvedTheme } = useContext(SettingContext)
//   return (
//     <UIKitProvider theme={resolvedTheme === 'dark' ? dark : light} {...props}>
//       {children}
//     </UIKitProvider>
//   )
// }

// const RootProviders: React.FC<React.PropsWithChildren<{ store: Store; children: React.ReactNode }>> = ({
//   children,
//   store,
// }) => {

const RootProviders: React.FC<React.PropsWithChildren<{ children: React.ReactNode }>> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      {/* <StyledUIKitProvider> */}
      <ResetCSS />
      <GlobalStyle />
      {children}
      {/* </StyledUIKitProvider> */}
      {/* TODO: Last update */}
      {/* <ModalProvider>{children}</ModalProvider> */}
      {/* </Provider> */}
    </QueryClientProvider>
  )
}

export default RootProviders
