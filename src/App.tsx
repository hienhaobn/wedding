import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import SettingProvider from 'contexts/SettingProvider'
import IndexPage from 'pages'

function App() {
  return (
    <SettingProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
        </Route>
      </Routes>
    </SettingProvider>
  )
}

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default App
