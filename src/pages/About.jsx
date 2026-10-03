import { motion } from 'framer-motion'
import { ShieldCheck, Leaf, Users, Lightbulb } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import RevealImg from '../components/RevealImg'
import Counter from '../components/Counter'
import { stats } from '../data/site'

const values = [
  { icon: ShieldCheck, t: 'Trust', d: 'Adding value for every stakeholder we serve.' },
  { icon: Leaf, t: 'Sustainability', d: 'Nurturing sustainable practices across every industry.' },
  { icon: Users, t: 'Community', d: 'Enhancing lives through sustainable partnerships.' },
  { icon: Lightbulb, t: 'Innovation', d: 'Driving progress with cutting-edge technology and strategic investments.' },
]
// TODO: replace with real milestones and years
const timeline = [{ y: 'Year', t: 'Founding of Avenue Group' }, { y: 'Year', t: 'Agrovan food park opens' }, { y: 'Year', t: 'Expansion into Dubai and export markets' }, { y: '2025', t: 'Serving 36 countries' }]
const rise = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } }

export default function About() {
  return (
    <>
      <Seo title="About" description="Avenue Group is a diversified conglomerate built on innovation, sustainability and community-centric practices." />
      <PageHero title="A legacy of trust, longevity and progress" sub="No compromise on excellence. Every human is worth it." image="p17" alt="Farmers walking through a field at sunrise" />

      <section className="section bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...rise}>
            <h2 className="text-3xl text-plum sm:text-4xl">Our legacy</h2>
            <p className="mt-5 text-lg text-ink/70">Avenue Group of Companies, based in India, is a diversified conglomerate that thrives on innovation, sustainability and community-centric business practices.</p>
            <p className="mt-4 text-lg text-ink/70">Committed to driving economic growth, the group creates impactful, future-ready offerings across diverse industries, from packaging and agriculture to automotive and real estate.</p>
          </motion.div>
          <RevealImg src="p10" alt="Warehouse aisle stacked with packaged goods" className="h-80 sm:h-[26rem]" />
        </div>
      </section>

      <section className="bg-lilac py-20">
        <div className="container-x grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => <div key={s.label}><p className="grad-text text-5xl font-extrabold"><Counter to={s.value} suffix={s.suffix} /></p><p className="mt-2 text-ink/70">{s.label}</p></div>)}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <motion.div {...rise} className="max-w-3xl"><h2 className="text-3xl text-plum sm:text-4xl">Our vision</h2>
            <p className="mt-5 text-2xl font-light text-ink/80">To create value across every business sector we enter, while transforming the lives of farmers and consumers alike.</p></motion.div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.t} {...rise} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-3xl bg-lilac p-7">
                <v.icon className="text-orange" size={30} strokeWidth={1.5} aria-hidden /><h3 className="mt-4 text-xl text-plum">{v.t}</h3><p className="mt-2 text-ink/70">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-lilac">
        <div className="container-x">
          <h2 className="text-3xl text-plum sm:text-4xl">Our journey</h2>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
            {timeline.map((m, i) => (
              <motion.li key={i} {...rise} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative border-t-2 border-violet/30 pt-6">
                <span className="absolute -top-2 left-0 h-3.5 w-3.5 rounded-full bg-orange" aria-hidden />
                <p className="grad-text text-2xl font-bold">{m.y}</p><p className="mt-1 text-ink/70">{m.t}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <h2 className="text-3xl text-plum sm:text-4xl">Leadership</h2>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <RevealImg src="chairman" alt="Sachin Salunke, Chairman of Avenue Group" className="h-96 max-w-sm" />
            <div>
              <h3 className="text-2xl text-plum">Sachin Salunke</h3>
              <p className="text-violet">Chairman, Avenue Group</p>
              <p className="mt-5 text-lg text-ink/70">Alumnus of IIM Kozhikode and the Kellogg School of Management, Northwestern University. A leader with a track record of achieving revenue, profit and business growth in competitive engineering and automotive (tier 1) organizations.</p>
              <p className="mt-4 text-ink/60">TODO: add further leadership team members.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
