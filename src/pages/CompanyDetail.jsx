import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import RevealImg from '../components/RevealImg'
import Counter from '../components/Counter'
import EnquiryForm from '../components/EnquiryForm'
import NotFound from './NotFound'
import { companies } from '../data/site'
import { details } from '../data/companies'

const rise = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } }

export default function CompanyDetail() {
  const { slug } = useParams()
  const d = details[slug]
  const meta = companies.find((c) => c.slug === slug)
  if (!d || !meta) return <NotFound />
  return (
    <>
      <Seo title={`${meta.name} | ${meta.sector}`} description={d.tagline} />
      <PageHero title={meta.name} sub={d.tagline} icon={meta.icon} image={d.hero} alt={`${meta.name} at work`} />

      <section className="section bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...rise}>
            <h2 className="text-3xl text-plum sm:text-4xl">Overview</h2>
            {d.overview.map((p) => <p key={p} className="mt-5 text-lg text-ink/70">{p}</p>)}
          </motion.div>
          <RevealImg src={d.side} alt={`${meta.name} overview`} className="h-80 sm:h-[26rem]" />
        </div>
      </section>

      <section className="section bg-lilac">
        <div className="container-x">
          <h2 className="text-3xl text-plum sm:text-4xl">Key offerings</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.offerings.map((o, i) => (
              <motion.div key={o.t} {...rise} transition={{ duration: 0.5, delay: i * 0.07 }} className="rounded-3xl bg-white p-7 shadow-soft">
                <meta.icon className="text-orange" size={28} strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 text-xl text-plum">{o.t}</h3><p className="mt-2 text-ink/70">{o.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {d.steps && (
        <section className="section bg-white">
          <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <RevealImg src={d.side} alt="Farmer walking through a green field in the rain" className="h-96 lg:h-[34rem]" />
            </div>
            <div>
              <h2 className="text-3xl text-plum sm:text-4xl">A 360° agricultural ecosystem</h2>
              <ol className="relative mt-10 space-y-10 border-l-2 border-dashed border-violet/30 pl-10">
                {d.steps.map((s, i) => (
                  <motion.li key={s.t} {...rise} className="relative">
                    <span className="absolute -left-[3.6rem] grid h-11 w-11 place-items-center rounded-full bg-brush font-bold text-white ring-4 ring-white">{i + 1}</span>
                    <h3 className="text-2xl text-plum">{s.t}</h3><p className="mt-2 text-ink/70">{s.d}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {d.projects && (
        <section className="section bg-white">
          <div className="container-x">
            <h2 className="text-3xl text-plum sm:text-4xl">Project portfolio</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {d.projects.map((p) => (
                <div key={p.name} className="overflow-hidden rounded-3xl bg-lilac">
                  <div className="h-44 bg-brush opacity-80" role="img" aria-label="Project image placeholder" />
                  <div className="p-6"><h3 className="text-xl text-plum">{p.name}</h3><p className="text-ink/70">{p.place} · {p.status}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-lilac">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl text-plum sm:text-4xl">Why choose {meta.name}</h2>
            <ul className="mt-8 space-y-5">
              {d.why.map((w) => (
                <li key={w.t} className="flex gap-4"><span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-white"><Check size={16} aria-hidden /></span>
                  <p><span className="font-medium text-plum">{w.t}.</span> {w.d}</p></li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h3 className="text-2xl text-plum">Sustainability and innovation</h3>
            <ul className="mt-5 space-y-4 text-ink/70">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" aria-label="Key figures">
        <div className="container-x grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {d.stats.map((s) => (
            <div key={s.label}><p className="grad-text text-5xl font-extrabold"><Counter to={s.value} suffix={s.suffix || ''} /></p><p className="mt-2 text-ink/70">{s.label}</p></div>
          ))}
        </div>
      </section>

      <section className="section bg-lilac">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl text-plum sm:text-4xl">Talk to {meta.name}</h2>
            <p className="mt-4 max-w-md text-lg text-ink/70">Tell us what you need and the team will reply by email.</p>
          </div>
          <EnquiryForm topic={`${meta.name} enquiry`} heading={`Enquire about ${meta.name}`} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <h2 className="text-2xl text-plum">Explore our other companies</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {companies.filter((c) => c.slug !== slug).map((c) => (
              <Link key={c.slug} to={`/companies/${c.slug}`} className="btn-outline"><c.icon size={18} aria-hidden />{c.name}<ArrowRight size={16} aria-hidden /></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
