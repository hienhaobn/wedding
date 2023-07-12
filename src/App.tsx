import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SettingProvider from 'contexts/SettingProvider'
import RootProviders from 'contexts/RootProvider'
import AboutPage from 'pages/AboutPage'
import ContactPage from 'pages/ContactPage'
import AllContactsPage from 'pages/AllContactsPage'
import IndexPage from 'pages'


// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingProvider>
        <RootProviders>
          <Routes>
            <React.Fragment>
              {/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
              <Route path="/about" element={<AboutPage />} />

              {/* Note how these two routes are ordered. The more specific
              path="/contact/:id" comes before path="/contact" so that
              route will render when viewing an individual contact */}
              <Route path="/contact/:id" element={<ContactPage />} />
              <Route path="/contact" element={<AllContactsPage />} />

              {/* If none of the previous routes render anything,
              this route acts as a fallback.
              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
              <Route path="/" element={<IndexPage />} />
            </React.Fragment>
          </Routes>
        </RootProviders>
      </SettingProvider>
    </QueryClientProvider>
  )
}

export default App
