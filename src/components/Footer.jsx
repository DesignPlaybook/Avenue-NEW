import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { navLinks, companies, site } from '../data/site'

const socials = [
  { icon: Linkedin, label: 'LinkedIn' }, { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' }, { icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-lilac text-ink/70">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs">{site.tagline}</p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-plum/20 text-violet hover:bg-white">
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-base text-violet">Quick links</h3>
          <ul className="space-y-2">{navLinks.filter((l) => !l.dropdown).map((l) => (
            <li key={l.to}><Link to={l.to} className="hover:text-violet">{l.label}</Link></li>))}</ul>
        </div>
        <div>
          <h3 className="mb-4 text-base text-violet">Our companies</h3>
          <ul className="space-y-2">{companies.map((c) => (
            <li key={c.slug}><Link to={`/companies/${c.slug}`} className="hover:text-violet">{c.name}</Link></li>))}</ul>
        </div>
        <div>
          <h3 className="mb-4 text-base text-violet">Contact</h3>
          <ul className="space-y-3">
            <li className="flex gap-2"><MapPin size={18} className="mt-0.5 shrink-0 text-orange" aria-hidden />{site.address}</li>
            <li className="flex gap-2"><Mail size={18} className="text-orange" aria-hidden /><a href={`mailto:${site.email}`} className="hover:text-violet">{site.email}</a></li>
            <li className="flex gap-2"><Phone size={18} className="text-orange" aria-hidden />{site.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-plum/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} Avenue Group. All rights reserved. Confidential: information on this site is for intended audiences only.
      </div>
    </footer>
  )
}
