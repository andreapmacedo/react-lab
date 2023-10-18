import { Route, Routes } from 'react-router-dom'
import { History } from './pages/History'
import { Sync } from './pages/Sync'
import { Records } from './pages/Records'
import { Views } from './pages/Views'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/sync" element={<Sync />} />
        <Route path="/records" element={<Records />} />
        <Route path="/views" element={<Views />} />
      </Route>
    </Routes>
  )
}