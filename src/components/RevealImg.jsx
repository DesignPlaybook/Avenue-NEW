import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function RevealImg({ src, alt, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const clip = useTransform(scrollYProgress, [0, 1], ['inset(16% 16% 16% 16% round 3rem)', 'inset(0% 0% 0% 0% round 2rem)'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1])
  return (
    <motion.div ref={ref} style={{ clipPath: clip }} className={`overflow-hidden bg-plum/20 ${className}`}>
      <motion.img style={{ scale }} src={`/img/${src}.jpg`} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </motion.div>
  )
}
