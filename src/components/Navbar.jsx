import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks, companies } from '../data/site'

const linkCls = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm transition-colors hover:text-violet ${isActive ? 'text-violet' : 'text-ink/80'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dd, setDd] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); setDd(false) }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-plum/10 bg-ivory/85 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) =>
            l.dropdown ? (
              <li key={l.to} className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}
                  onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setDd(false)}>
                <NavLink to={l.to} end className={linkCls}>
                  <span className="inline-flex items-center gap-1">{l.label}<ChevronDown size={14} aria-hidden /></span>
                </NavLink>
                {dd && (
                  <ul className="absolute left-0 top-full w-56 rounded-2xl border border-plum/10 bg-white p-2 shadow-soft">
                    {companies.map((c) => (
                      <li key={c.slug}>
                        <Link to={`/companies/${c.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-lilac hover:text-violet">
                          <c.icon size={16} className="text-orange" aria-hidden />{c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.to}><NavLink to={l.to} end={l.to === '/'} className={linkCls}>{l.label}</NavLink></li>
            )
          )}
        </ul>
        <Link to="/partner" className="btn-primary hidden !py-2 text-sm lg:inline-flex">Partner With Us</Link>
        <button className="text-ink lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-plum/10 bg-ivory lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.to}><NavLink to={l.to} end={l.to === '/'} className={linkCls}>{l.label}</NavLink>
                {l.dropdown && (
                  <ul className="ml-4 border-l border-plum/10 pl-3">
                    {companies.map((c) => (
                      <li key={c.slug}><Link to={`/companies/${c.slug}`} className="block py-1.5 text-sm text-ink/70 hover:text-violet">{c.name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2"><Link to="/partner" className="btn-primary w-full">Partner With Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
