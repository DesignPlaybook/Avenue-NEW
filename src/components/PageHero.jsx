import { motion } from 'framer-motion'

export default function PageHero({ title, sub, icon: Icon, image, alt = '' }) {
  return (
    <section className="relative overflow-hidden bg-lilac">
      <div aria-hidden className="absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 left-10 h-[24rem] w-[24rem] rounded-full bg-amber/25 blur-3xl" />
      <div className={`container-x relative grid items-center gap-10 py-20 sm:py-28 ${image ? 'lg:grid-cols-2' : ''}`}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {Icon && <span className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-cta-gradient text-white shadow-soft"><Icon size={30} strokeWidth={1.5} aria-hidden /></span>}
          <h1 className="text-4xl text-plum sm:text-6xl">{title}</h1>
          {sub && <p className="mt-5 max-w-xl text-lg text-ink/70">{sub}</p>}
        </motion.div>
        {image && <motion.img initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} src={`/img/${image}.jpg`} alt={alt} className="h-72 w-full rounded-[2rem] object-cover shadow-soft sm:h-96" />}
      </div>
    </section>
  )
}
