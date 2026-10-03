import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { group } from '../data/site'

export default function Companies() {
  const main = group.filter((c) => c.slug), others = group.filter((c) => !c.slug)
  return (
    <>
      <Seo title="Our Companies" description="Packaging, agriculture, real estate and automotive: the businesses of Avenue Group." />
      <PageHero title="Our companies" sub="Four industries, one commitment to trust." />
      <section className="section bg-white">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {main.map((c, i) => (
            <motion.div key={c.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}>
              <Link to={`/companies/${c.slug}`} className="group relative block h-[26rem] overflow-hidden rounded-[2rem] bg-brush shadow-soft">
                <img src={`/img/${c.img}.jpg`} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <c.icon className="mb-3 text-amber" size={30} strokeWidth={1.5} aria-hidden />
                  <p className="text-sm text-white/75">{c.sector}</p><h2 className="text-3xl">{c.name}</h2>
                  <p className="mt-2 max-w-md text-white/85">{c.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-medium text-amber">View company <ArrowRight size={16} aria-hidden /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="container-x mt-16">
          <h2 className="text-2xl text-plum">Also in the group</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((c) => (
              <div key={c.name} className="rounded-3xl bg-lilac p-6"><c.icon className="text-orange" size={26} strokeWidth={1.5} aria-hidden /><h3 className="mt-3 text-lg text-plum">{c.name}</h3><p className="mt-1 text-sm text-ink/70">{c.blurb}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
