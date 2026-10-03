import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Recycle } from 'lucide-react'
import Seo from '../components/Seo'
import Counter from '../components/Counter'
import { group, innovations, stats, foundation } from '../data/site'

const img = (n) => `/img/${n}.jpg`

/* Image that un-masks and settles as it scrolls into view */
function RevealImg({ src, alt, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const clip = useTransform(scrollYProgress, [0, 1], ['inset(16% 16% 16% 16% round 3rem)', 'inset(0% 0% 0% 0% round 2rem)'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1])
  return (
    <motion.div ref={ref} style={{ clipPath: clip }} className={`overflow-hidden bg-plum/20 ${className}`}>
      <motion.img style={{ scale }} src={img(src)} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const up = useTransform(scrollYProgress, [0, 1], [0, -140])
  const down = useTransform(scrollYProgress, [0, 1], [0, 120])
  const words = 'Transforming Industries, Empowering Communities'.split(' ')
  return (
    <section ref={ref} className="relative overflow-hidden bg-ivory">
      <motion.div style={{ y: down }} aria-hidden className="absolute -left-48 -top-56 h-[44rem] w-[44rem] rounded-full bg-violet/20 blur-3xl" />
      <motion.div style={{ y: up }} aria-hidden className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-amber/30 blur-3xl" />
      <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div>
          <h1 className="text-5xl leading-[1.05] text-plum sm:text-6xl xl:text-7xl">
            {words.map((w, i) => (
              <span key={i} className="mr-3 inline-block overflow-hidden pb-2 align-bottom">
                <motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-7 max-w-xl text-lg text-ink/70">
            A legacy of impact, fostering innovation, sustainability, and community empowerment.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-9 flex flex-wrap gap-4">
            <Link to="/companies" className="btn-primary">Explore Our Companies</Link>
            <Link to="/partner" className="btn-outline">Partner With Us</Link>
          </motion.div>
        </div>
        <div className="relative mx-auto h-[34rem] w-full max-w-md sm:h-[38rem]">
          <motion.div style={{ y: up }} className="absolute right-0 top-0 h-[80%] w-[72%] overflow-hidden rounded-t-full shadow-soft">
            <img src={img('p14')} alt="Farmer tending marigolds beside a river" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: down }} className="absolute bottom-0 left-0 h-[42%] w-[55%] overflow-hidden rounded-3xl border-4 border-ivory shadow-soft">
            <img src={img('p12')} alt="Packaging line in a modern plant" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute bottom-10 right-0 rounded-2xl bg-white px-5 py-4 shadow-soft">
            <p className="grad-text text-3xl font-extrabold">36</p>
            <p className="text-sm text-ink/60">countries served</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Words darken one by one as the reader scrolls */
function Word({ children, p, a, b }) {
  const o = useTransform(p, [a, b], [0.15, 1])
  return <motion.span style={{ opacity: o }}>{children}</motion.span>
}
function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = "We are not just building businesses; we are cultivating relationships, nurturing sustainability, and spreading happiness.".split(' ')
  return (
    <section className="section bg-white">
      <div className="container-x max-w-5xl">
        <p ref={ref} className="flex flex-wrap gap-x-3 gap-y-1 text-3xl font-bold leading-tight text-plum sm:text-5xl">
          {words.map((w, i) => <Word key={i} p={scrollYProgress} a={i / words.length} b={(i + 1) / words.length}>{w}</Word>)}
        </p>
        <p className="mt-8 text-ink/60">Sachin Salunke, Chairman, Avenue Group</p>
      </div>
    </section>
  )
}

function Card({ c }) {
  const inner = (
    <div className="group relative h-full w-full overflow-hidden rounded-[2rem] bg-brush shadow-soft">
      {c.img ? <img src={img(c.img)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
             : <c.icon aria-hidden className="absolute right-6 top-6 text-white/25" size={140} strokeWidth={1} />}
      <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <c.icon className="mb-3 text-amber" size={28} strokeWidth={1.5} aria-hidden />
        <p className="text-sm text-white/75">{c.sector}</p>
        <h3 className="mt-1 text-2xl">{c.name}</h3>
        <p className="mt-2 text-sm text-white/85">{c.blurb}</p>
        {c.slug && <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber">Explore <ArrowRight size={16} aria-hidden /></span>}
      </div>
    </div>
  )
  const cls = 'block h-[26rem] w-[80vw] shrink-0 sm:h-[30rem] sm:w-[24rem]'
  return c.slug ? <Link to={`/companies/${c.slug}`} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>
}

/* Vertical scroll drives a horizontal track */
function Businesses() {
  const ref = useRef(null), track = useRef(null)
  const reduce = useReducedMotion()
  const [dist, setDist] = useState(0)
  useEffect(() => {
    const m = () => setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    m(); window.addEventListener('resize', m)
    return () => window.removeEventListener('resize', m)
  }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  return (
    <section ref={ref} style={{ height: reduce ? 'auto' : `calc(100vh + ${dist}px)` }} className="bg-lilac">
      <div className={`${reduce ? '' : 'sticky top-0 h-screen'} flex flex-col justify-center overflow-hidden py-16`}>
        <div className="container-x mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl text-plum sm:text-5xl">One vision, eight businesses</h2>
            <p className="mt-3 max-w-xl text-ink/70">No compromise on excellence. Every human is worth it.</p>
          </div>
          <Link to="/companies" className="btn-outline hidden sm:inline-flex">All companies</Link>
        </div>
        <motion.div ref={track} style={{ x: reduce ? 0 : x }} className={`flex gap-6 px-5 sm:px-8 ${reduce ? 'overflow-x-auto' : ''}`}>
          {group.map((c) => <Card key={c.name} c={c} />)}
        </motion.div>
        {!reduce && <div className="container-x mt-10"><motion.div style={{ scaleX: scrollYProgress }} className="h-1 origin-left rounded-full bg-cta-gradient" /></div>}
      </div>
    </section>
  )
}

const stages = ['Raw material', 'Operations', 'Logistics', 'Consumption', 'Recycling']

function EcoGauge() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <RevealImg src="p12" alt="Sustainable packaging moving along a production line" className="h-[26rem] sm:h-[34rem]" />
        <div>
          <h2 className="text-4xl text-plum sm:text-5xl">Measure the carbon before you make the box</h2>
          <p className="mt-5 text-lg text-ink/70">
            EcoGauge, built by Avenue Packs, calculates carbon emissions across the whole design and development process, so packaging starts life with a smaller footprint.
          </p>
          <ol className="mt-8 flex flex-wrap gap-3">
            {stages.map((s, i) => (
              <motion.li key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-violet/30 bg-lilac px-4 py-2 text-sm text-plum">
                <span className="h-2 w-2 rounded-full bg-orange" aria-hidden />{s}
              </motion.li>
            ))}
          </ol>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {innovations.map((i) => (
              <div key={i.title} className="rounded-2xl bg-ivory p-5 ring-1 ring-plum/10">
                <i.icon className="text-orange" size={26} strokeWidth={1.5} aria-hidden />
                <h3 className="mt-3 text-base text-plum">{i.title}</h3>
              </div>
            ))}
          </div>
          <Link to="/innovation" className="btn-primary mt-10"><Recycle size={18} aria-hidden /> See our innovation</Link>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="bg-ivory py-20" aria-label="Group statistics">
      <div className="container-x grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="grad-text text-6xl font-extrabold"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="mt-2 text-ink/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Foundation() {
  return (
    <section className="section bg-lilac">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <RevealImg src="p15" alt="Woman planting seedlings in rich soil" className="h-[28rem] sm:h-[36rem]" />
        <div>
          <h2 className="text-4xl text-plum sm:text-5xl">Avenue Foundation</h2>
          <p className="mt-4 max-w-lg text-ink/70">Giving back through three pillars of community impact.</p>
          <div className="mt-8 space-y-4">
            {foundation.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.12, duration: 0.6 }}
                className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-soft" style={{ marginLeft: i * 24 }}>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cta-gradient text-white"><f.icon size={26} strokeWidth={1.5} aria-hidden /></span>
                <div><h3 className="text-xl text-plum">{f.title}</h3><p className="text-ink/70">{f.text}</p></div>
              </motion.div>
            ))}
          </div>
          <Link to="/foundation" className="btn-outline mt-10">Discover the Foundation</Link>
        </div>
      </div>
    </section>
  )
}

function Cta() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div ref={ref} className="relative overflow-hidden rounded-[2.5rem] bg-cta-gradient px-8 py-20 text-center text-white sm:px-16">
          <motion.img style={{ y }} src={img('p32')} alt="" aria-hidden className="absolute inset-0 h-[130%] w-full object-cover opacity-20 mix-blend-soft-light" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl">Together, let's build a future rooted in prosperity and happiness</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">Partner with Avenue Group to grow together.</p>
            <Link to="/partner" className="btn mt-9 bg-white text-plum hover:-translate-y-0.5">Partner With Us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo title="Transforming Industries, Empowering Communities" />
      <Hero />
      <Statement />
      <Businesses />
      <EcoGauge />
      <Stats />
      <Foundation />
      <Cta />
    </>
  )
}
