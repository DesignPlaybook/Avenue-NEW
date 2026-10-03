import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Companies from './pages/Companies'
import CompanyDetail from './pages/CompanyDetail'

// Pages arrive in later steps; placeholders keep navigation working for now.
const soon = ['innovation', 'global-presence', 'foundation', 'partner', 'contact']

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="companies" element={<Companies />} />
        <Route path="companies/:slug" element={<CompanyDetail />} />
        {soon.map((p) => <Route key={p} path={p} element={<NotFound title="Coming next" soon />} />)}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
