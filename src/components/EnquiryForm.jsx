import { useState } from 'react'
import { Send } from 'lucide-react'

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function EnquiryForm({ topic = 'General enquiry', heading = 'Send an enquiry' }) {
  const [v, setV] = useState({ name: '', email: '', phone: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const n = {}
    if (v.name.trim().length < 2) n.name = 'Enter your full name.'
    if (!emailOk(v.email)) n.email = 'Enter a valid email address.'
    if (v.message.trim().length < 10) n.message = 'Tell us a little more (10+ characters).'
    setErr(n)
    if (!Object.keys(n).length) setSent(true) // TODO: POST to your backend or form service
  }
  const field = 'mt-1 w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-violet'
  const F = ({ k, label, type = 'text', area }) => (
    <div>
      <label htmlFor={k} className="text-sm font-medium text-plum">{label}</label>
      {area ? <textarea id={k} rows={4} value={v[k]} onChange={set(k)} className={`${field} ${err[k] ? 'border-coral' : 'border-plum/15'}`} aria-invalid={!!err[k]} />
            : <input id={k} type={type} value={v[k]} onChange={set(k)} className={`${field} ${err[k] ? 'border-coral' : 'border-plum/15'}`} aria-invalid={!!err[k]} />}
      {err[k] && <p role="alert" className="mt-1 text-sm text-coral">{err[k]}</p>}
    </div>
  )
  if (sent) return <div className="rounded-3xl bg-white p-10 text-center shadow-soft" role="status"><h3 className="text-2xl text-plum">Thank you, {v.name.split(' ')[0]}.</h3><p className="mt-2 text-ink/70">We received your {topic.toLowerCase()} and will reply by email.</p></div>
  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl bg-white p-7 shadow-soft sm:p-10">
      <h3 className="text-2xl text-plum">{heading}</h3>
      <div className="grid gap-4 sm:grid-cols-2">{F({ k: 'name', label: 'Full name' })}{F({ k: 'email', label: 'Email', type: 'email' })}</div>
      {F({ k: 'phone', label: 'Phone (optional)', type: 'tel' })}
      {F({ k: 'message', label: 'Message', area: true })}
      <button className="btn-primary"><Send size={18} aria-hidden /> Send enquiry</button>
    </form>
  )
}
